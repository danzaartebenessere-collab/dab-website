import { forwardRef } from "react";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";
import { cn } from "../../lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "sm";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-sans font-semibold transition-all duration-300 ease-dab focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-dab-terracotta text-dab-white hover:bg-dab-brown shadow-dab",
  secondary:
    "border border-dab-brown/30 text-dab-brown bg-transparent hover:border-dab-brown hover:bg-dab-brown/5",
  ghost: "text-dab-brown hover:text-dab-terracotta bg-transparent",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-[0.95rem]",
  sm: "px-4 py-2 text-sm",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined; to?: undefined };

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; to?: undefined };

type ButtonAsLink = CommonProps &
  Omit<LinkProps, "to" | "className" | "children"> & { to: string; href?: undefined };

type ButtonProps = ButtonAsButton | ButtonAsAnchor | ButtonAsLink;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(props, ref) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("to" in props && props.to) {
    const { to, children: _c, className: _cl, variant: _v, size: _s, href: _h, ...rest } =
      props as ButtonAsLink;
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if ("href" in props && props.href) {
    const { href, children: _c, className: _cl, variant: _v, size: _s, to: _t, ...rest } =
      props as ButtonAsAnchor;
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  const { children: _c, className: _cl, variant: _v, size: _s, to: _t, href: _h, ...rest } =
    props as ButtonAsButton;
  return (
    <button ref={ref} className={classes} {...rest}>
      {children}
    </button>
  );
});
