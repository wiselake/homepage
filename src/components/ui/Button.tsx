import { type ButtonHTMLAttributes } from "react";
import { Link } from "@/i18n/navigation";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

  const variants = {
    primary:
      "relative bg-accent/90 text-bg-primary backdrop-blur-sm border border-accent/30 hover:bg-accent hover:shadow-[0_0_30px_rgba(245,166,35,0.4)] hover:border-accent/50 overflow-hidden",
    secondary:
      "glass text-text-primary hover:border-accent/40 hover:text-accent hover:shadow-[0_0_20px_rgba(245,166,35,0.1)]",
    ghost:
      "text-text-secondary hover:text-text-primary",
  };

  const sizes = {
    sm: "text-xs px-4 py-2",
    md: "text-sm px-6 py-2.5",
    lg: "text-base px-8 py-3",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("//");
    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
