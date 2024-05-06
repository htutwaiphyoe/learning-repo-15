import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type Props = PropsWithChildren & {
  className?: string;
};

export default function MaxWidthWrapper({ className, children }: Props) {
  return (
    <div
      className={cn(
        "h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
}
