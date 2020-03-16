import clsx from 'clsx';
import { useRef, useEffect, useLayoutEffect } from 'react';
import { useDrag } from 'react-use-gesture';
import { useSpring, config, animated, interpolate } from 'react-spring';
import { useBEM } from '../lib/hooks';

export function SlideListItem({
  className,
  children,
  actions = [],
  onSlideOpen,
  onSlideClose,
  threshold = 0.3,
  ...props
}) {
  const bem = useBEM('slide-list-item');
  const rootClasses = clsx(bem(), className);
  const background = useRef(null);
  const foreground = useRef(null);
  const isDragging = useRef(false);
  const slideWidth = useRef(0);
  const [{ x }, set] = useSpring(() => ({ x: 0 }));

  const open = ({ canceled }) => {
    set({ x: -slideWidth.current, config: canceled ? config.wobbly : config.stiff });
  };

  const close = (velocity = 0) => {
    set({ x: 0, config: { ...config.stiff, velocity } });
  };

  const bind = useDrag(
    ({ first, last, vxvy: [vx], movement: [mx], cancel, canceled }) => {

      if (first) isDragging.current = true;
      else if (last) isDragging.current = false;

      console.debug('drag event(first: %s, last: %s, vx: %d, mx: %d)', first, last, vx, mx);
      set({ x: mx, immediate: true, config: config.stiff });
      return;

      // If user drags past slideWidth multiplied by props.threshold, cancel animation and set state to open
      if (mx < -(slideWidth.current * (1 + threshold))) cancel();

      // If user has dragged past a certain threshold, snap actions open. Otherwise return to closed
      if (last) mx > slideWidth.current * (1 - threshold) || vx > 0.5 ? close(vx) : open({ canceled });
      // when user keeps dragging, move according to touch or cursor position:
      else set({ x: mx, immediate: false, config: config.stiff });
    }
  );

  const bgStyle = {
    opacity: x.interpolate({ map: Math.abs, range: [0, slideWidth.current], output: [0.4, 1], extrapolate: 'clamp'})
  };

  const fgStyle = {
    transform: interpolate([x], (x) => `translateX(${x}px)`),
  };

  useLayoutEffect(() => {
    if (!background.current) return;

    const setSlideWidth = () => {
      slideWidth.current = Array.from(background.current.childNodes).reduce(
        (width, node) => width + node.offsetWidth,
        0
      );
      console.log('Update slide width to %d', slideWidth.current);
    };

    window.addEventListener('resize', setSlideWidth);
    setSlideWidth();

    return () => {
      window.removeEventListener('resize', setSlideWidth);
    };
  }, [background.current]);

  return (
    <li className={rootClasses} {...props}>
      <animated.div className={bem('background')} ref={background} style={bgStyle}>
        {actions.map(({ label, icon, className: btnClass, onClick }, idx) => (
          <button key={`action-${idx}`} className={clsx(bem('button'), btnClass)} onClick={onClick} aria-label={label}>
            {icon ? <span dangerouslySetInnerHTML={{ __html: icon }} /> : label}
          </button>
        ))}
      </animated.div>
      <animated.div {...bind()} className={bem('foreground')} ref={foreground} style={fgStyle}>
        {children}
      </animated.div>
    </li>
  );
}
