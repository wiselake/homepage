"use client";

import { Component, useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import Spline from "@splinetool/react-spline";

const SPLINE_SCENE_URL =
  "https://prod.spline.design/xzzasRAbUM8v4faK/scene.splinecode";

interface ErrorBoundaryProps {
  children: ReactNode;
  onError?: () => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class SplineErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch() {
    this.props.onError?.();
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

interface HeroSplineProps {
  onLoad?: () => void;
  onError?: () => void;
}

export function HeroSpline({ onLoad, onError }: HeroSplineProps) {
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const removeWatermark = useCallback(() => {
    if (!containerRef.current) return;
    // Remove by link selector
    containerRef.current.querySelectorAll('a[href*="spline.design"]').forEach((el) => {
      const parent = el.parentElement;
      if (parent && parent.tagName !== "CANVAS") {
        parent.remove();
      }
      el.remove();
    });
    // Remove #logo element (Spline watermark container)
    containerRef.current.querySelectorAll("#logo").forEach((el) => el.remove());
    // Remove any non-canvas siblings with absolute positioning (watermark pattern)
    const canvas = containerRef.current.querySelector("canvas");
    if (canvas?.parentElement) {
      Array.from(canvas.parentElement.children).forEach((child) => {
        if (child !== canvas && child.tagName !== "CANVAS") {
          const style = window.getComputedStyle(child);
          if (style.position === "absolute" || style.position === "fixed") {
            (child as HTMLElement).style.display = "none";
          }
        }
      });
    }
  }, []);

  useEffect(() => {
    if (!loaded || !containerRef.current) return;
    // MutationObserver to catch dynamically added watermarks
    const observer = new MutationObserver(() => removeWatermark());
    observer.observe(containerRef.current, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [loaded, removeWatermark]);

  return (
    <SplineErrorBoundary onError={onError}>
      <div
        ref={containerRef}
        className={`absolute inset-0 transition-opacity duration-1000 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Spline
          scene={SPLINE_SCENE_URL}
          onLoad={() => {
            setLoaded(true);
            onLoad?.();
            setTimeout(removeWatermark, 100);
          }}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </SplineErrorBoundary>
  );
}
