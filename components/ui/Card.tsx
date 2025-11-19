'use client'

import { HTMLAttributes, forwardRef } from 'react'
import { motion } from 'framer-motion'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  padding?: 'none' | 'small' | 'medium' | 'large'
  shadow?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      hover = false,
      padding = 'medium',
      shadow = true,
      className = '',
      ...props
    },
    ref
  ) => {
    const baseStyles = 'bg-neutral-white rounded-card transition-all duration-standard'
    const shadowStyle = shadow ? 'shadow-card' : ''
    const hoverStyle = hover ? 'hover:shadow-card-hover hover:-translate-y-1 cursor-pointer' : ''

    const paddingStyles = {
      none: 'p-0',
      small: 'p-4',
      medium: 'p-6',
      large: 'p-8',
    }

    if (hover) {
      return (
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
        >
          <div
            ref={ref}
            className={`${baseStyles} ${shadowStyle} ${hoverStyle} ${paddingStyles[padding]} ${className}`}
            {...props}
          >
            {children}
          </div>
        </motion.div>
      )
    }

    return (
      <div
        ref={ref}
        className={`${baseStyles} ${shadowStyle} ${hoverStyle} ${paddingStyles[padding]} ${className}`}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export default Card
