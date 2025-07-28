"use client";

import React from "react";
import { useLoading } from "@/hooks/use-loading";

export const TransitionLink = React.forwardRef(({
  href,
  children,
  onClick,
  ...props
}, ref) => {
  const { startLoading } = useLoading();

  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) {
      onClick(e);
    }
    startLoading(href);
  };

  return (
    <a href={href} onClick={handleClick} {...props} ref={ref}>
      {children}
    </a>
  );
});

TransitionLink.displayName = "TransitionLink";
