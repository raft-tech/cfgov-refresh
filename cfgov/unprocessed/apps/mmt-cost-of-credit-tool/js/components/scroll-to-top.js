import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  useScrollToTop();
  return null;
}

export function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

export function useScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}