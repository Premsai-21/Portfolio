import { useCallback, useEffect, useRef, useState } from "react";

export default function Reveal({
  as: Tag = "div",
  className = "",
  delayClass = "",
  children,
  ...rest
}) {
  const nodeRef = useRef(null);
  const observerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const show = useCallback(() => {
    setVisible(true);
  }, []);

  const setRef = useCallback(
    (node) => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }

      nodeRef.current = node;
      if (!node) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      );
      if (reduceMotion.matches || !("IntersectionObserver" in window)) {
        show();
        return;
      }

      const io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              show();
              io.unobserve(node);
            }
          }
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
      );

      observerRef.current = io;
      io.observe(node);

      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        show();
      }
    },
    [show]
  );

  useEffect(() => {
    const fallback = window.setTimeout(show, 600);
    return () => {
      window.clearTimeout(fallback);
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [show]);

  const merged = [
    "reveal",
    delayClass,
    visible ? "is-visible" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag ref={setRef} className={merged} {...rest}>
      {children}
    </Tag>
  );
}
