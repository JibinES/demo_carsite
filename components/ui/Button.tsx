'use client'

import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { Loader2 } from 'lucide-react'

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref' | 'children'> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'small' | 'medium' | 'large'
  isLoading?: boolean
  fullWidth?: boolean
  children?: ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'medium',
      isLoading = false,
      fullWidth = false,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'font-semibold rounded-button transition-all duration-standard focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2'

    const variantStyles = {
      primary: 'bg-primary-red text-neutral-white hover:bg-primary-dark-red focus:ring-primary-red',
      secondary: 'bg-neutral-black text-neutral-white hover:bg-neutral-dark-gray focus:ring-neutral-black',
      outline: 'border-2 border-primary-red text-primary-red hover:bg-primary-red hover:text-neutral-white focus:ring-primary-red',
    }

    const sizeStyles = {
      small: 'px-4 py-2 text-sm h-9',
      medium: 'px-6 py-3 text-base h-11',
      large: 'px-8 py-4 text-lg h-12',
    }

    const widthStyle = fullWidth ? 'w-full' : ''

    return (
      <motion.button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`}
        disabled={disabled || isLoading}
        whileHover={!disabled && !isLoading ? { scale: 1.02 } : {}}
        whileTap={!disabled && !isLoading ? { scale: 0.98 } : {}}
        {...props}
      >
        {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export default Button
