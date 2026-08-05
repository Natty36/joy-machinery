import { cn } from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: "primary" | "outline";
}

export default function Button({ href, variant = "primary", className, children, ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center px-8 py-4 font-headline font-semibold transition-colors duration-200";
  
  const variants = {
    primary: "bg-accent text-light hover:bg-[#d85f27]",
    outline: "border-2 border-accent text-accent hover:bg-accent hover:text-light",
  };

  return (
    <a href={href} className={cn(base, variants[variant], className)} {...props}>
      {children}
    </a>
  );
}