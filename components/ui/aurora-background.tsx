"use client";
import { cn } from "@/utils/cn";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col  items-center justify-center bg-zinc-50 dark:bg-zinc-900  text-slate-950 transition-bg",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            //   I'm sorry but this is what peak developer performance looks like // trigger warning
            className={cn(
              `
            [--secondary-aurora-gradient:repeating-linear-gradient(100deg,var(--secondary-aurora)_0%,var(--secondary-aurora)_10%,var(--transparent)_15%,var(--transparent)_20%,var(--secondary-aurora)_25%)]
[--dark-gradient:repeating-linear-gradient(90deg,var(--main-aurora)_0%,var(--main-aurora)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--main-aurora)_16%)]
[--aurora:repeating-linear-gradient(100deg,var(--neutral-aurora)_10%,var(--secondary-aurora)_20%,var(--neutral-aurora)_30%,var(--secondary-aurora)_40%,var(--neutral-aurora)_50%)]
[background-image:var(--secondary-aurora-gradient),var(--aurora)]
dark:[background-image:var(--dark-gradient),var(--aurora)]
[background-size:150%,_100%]
[background-position:50%_50%,50%_50%]
filter blur-[10px] invert dark:invert-0
after:content-[""] after:absolute after:inset-0 after:[background-image:var(--secondary-aurora-gradient),var(--aurora)] 
after:dark:[background-image:var(--dark-gradient),var(--aurora)]
after:[background-size:250%,_100%] 
after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
pointer-events-none
absolute -inset-[20px] opacity-70 will-change-transform
            `,

              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};
