import clsx from 'clsx';
import { useCallback, useRef, useEffect, useLayoutEffect } from 'react';
import { useBEM } from '../lib/hooks';
import { action } from 'mobx';

const minMax = (num, min, max) => Math.min(Math.max(num, min), max);

export function SwipeableListItem({ className, children, actions = [], onSwipe, threshold = 0.3, ...props }) {
  const bem = useBEM('swipeable-item');
  const rootClasses = clsx(bem(), className);
  const listItem = useRef(null);
  const background = useRef(null);
  const foreground = useRef(null);
  const frame = useRef(null);
  const isSliding = useRef(false);
  const dragStartX = useRef(0);
  const left = useRef(0);
  const startTime = useRef(0);
  const actionsWidth = useRef(0);

  useLayoutEffect(() => {
    if (!foreground.current || !background.current) return;

    const setActionsWidth = () => {
      actionsWidth.current = Array.from(background.current.childNodes).reduce((width, node) => width + node.offsetWidth, 0);
      console.debug('Actions width: %d', actionsWidth.current);
    };

    window.addEventListener('resize', setActionsWidth);
    setActionsWidth();

    const updatePosition = () => {
      if (!isSliding.current) return;

      frame.current = requestAnimationFrame(updatePosition);

      const now = Date.now();
      const elapsed = now - startTime.current;

      console.debug(left.current);
      foreground.current.style.transform = `translateX(${left.current}px)`;

      const opacity = (Math.abs(left.current) / actionsWidth.current).toFixed(2);

      if (opacity < 1 && opacity.toString() !== background.current.style.opacity) {
        background.current.style.opacity = opacity.toString();
      }

      if (opacity >= 1) {
        background.current.style.opacity = '1';
      }

      startTime.current = Date.now();
      console.debug('updatePosition');
    };

    const onMouseMove = (event) => {
      const pos = event.clientX - dragStartX.current;
      left.current = minMax(pos, -actionsWidth.current, 0);
      console.log('mousemove pos: %d, actionsWidth: %d, current: %d', pos, actionsWidth.current, left.current);
    };

    const onTouchMove = (event) => {
      const touch = event.targetTouches[0];
      const pos = touch.clientX - dragStartX.current;
      left.current = minMax(pos, -actionsWidth.current, 0);
      console.log('touchmove pos: %d, actionsWidth: %d, current: %d', pos, actionsWidth.current, left.current);
    };

    const onDragStart = (clientX) => {
      isSliding.current = true;
      dragStartX.current = clientX;
      frame.current = requestAnimationFrame(updatePosition);
      foreground.current.classList.remove('-has-transition');

      console.log('dragstart - dragStartX: %d, isSliding: %s', dragStartX.current, isSliding.current);
    };

    const onDragEnd = () => {
      if (!isSliding.current) return;

      isSliding.current = false;

      if (left.current < actionsWidth.current * threshold * -1) {
        left.current = -actionsWidth.current;
        if (onSwipe && typeof onSwipe === 'function') onSwipe();
      } else {
        left.current = 0;
      }

      cancelAnimationFrame(frame.current);
      updatePosition();

      foreground.current.classList.add('-has-transition');
      foreground.current.style.transform = `translateX(${left.current}px)`;
      console.log('dragend');
    };

    const onMouseDown = (event) => {
      onDragStart(event.clientX);
      window.addEventListener('mousemove', onMouseMove);
      console.log('mousedown');
    };

    const onTouchStart = (event) => {
      const touch = event.targetTouches[0];
      onDragStart(touch.clientX);
      window.addEventListener('touchmove', onTouchMove);
      console.log('touchstart');
    };

    const onMouseUp = (event) => {
      console.log('mouseup');
      window.removeEventListener('mousemove', onMouseMove);
      onDragEnd();
    };

    const onTouchEnd = (event) => {
      console.log('touchend');
      window.removeEventListener('touchmove', onTouchMove);
      onDragEnd();
    };

    foreground.current.addEventListener('mousedown', onMouseDown);
    foreground.current.addEventListener('touchstart', onTouchStart);
    foreground.current.addEventListener('mouseup', onMouseUp);
    foreground.current.addEventListener('touchend', onTouchEnd);

    return () => {
      foreground.current.removeEventListener('mousedown', onMouseDown);
      foreground.current.removeEventListener('touchstart', onTouchStart);
      foreground.current.removeEventListener('mouseup', onMouseUp);
      foreground.current.removeEventListener('touchend', onTouchEnd);
    };
  }, [threshold, listItem.current, foreground.current, background.current, actionsWidth, onSwipe]);

  return (
    <li className={rootClasses} {...props} ref={listItem}>
      <div className={bem('background')} ref={background}>
        {actions.map(({ label, className, onClick }, idx) => (
          <button key={`btn-${idx}`} className={clsx(bem('button'), className)} onClick={onClick}>
            {label}
          </button>
        ))}
      </div>
      <div className={bem('foreground')} ref={foreground}>
        {children}
      </div>
    </li>
  );
}
