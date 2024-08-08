import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',

        // 커스텀
        violet: 'bg-violet',
        mint: 'bg-mint',
        navy: 'bg-blue-900 text-[14px] text-white rounded-[0px] hover:bg-blue-700 animate-bounce',
        lightblue:
          'bg-cyan-400 text-[14px] font-bold text-cyan-700 rounded-full hover:bg-cyan-300',
      },
      font: {
        default: 'text-sm', // 기본 14px
        xs: 'text-xs', // 12px
        base: 'text-base', // 16px
        lg: 'text-lg', // 18px
        xl: 'text-xl', // 20px
      },
      weight: {
        default: 'font-normal',
        medium: 'font-medium',
        bold: 'font-bold',
        extrabold: 'font-extrabold',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
        customRound: 'h-7 w-20 rounded-2xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      font: 'default', // 커스텀 (defaultVariants에 추가)
      weight: 'default', // 커스텀 (defaultVariants에 추가)
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, font, weight, asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, font, weight, className })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
