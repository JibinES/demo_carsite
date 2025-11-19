import { HTMLAttributes, forwardRef } from 'react'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'red' | 'black' | 'gray' | 'success' | 'warning'
  size?: 'small' | 'medium' | 'large'
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      children,
      variant = 'red',
      size = 'medium',
      className = '',
      ...props
    },
    ref
  ) => {
    const baseStyles = 'inline-block font-bold uppercase rounded-badge'

    const variantStyles = {
      red: 'bg-primary-red text-neutral-white',
      black: 'bg-neutral-black text-neutral-white',
      gray: 'bg-neutral-light-gray text-neutral-dark-gray',
      success: 'bg-accent-success text-neutral-white',
      warning: 'bg-accent-warning text-neutral-black',
    }

    const sizeStyles = {
      small: 'px-2 py-0.5 text-[10px]',
      medium: 'px-2 py-1 text-xs',
      large: 'px-3 py-1.5 text-sm',
    }

    return (
      <span
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      >
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'

export default Badge
