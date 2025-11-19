import { InputHTMLAttributes, forwardRef } from 'react'
import { LucideIcon } from 'lucide-react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  icon?: LucideIcon
  fullWidth?: boolean
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      icon: Icon,
      fullWidth = false,
      className = '',
      ...props
    },
    ref
  ) => {
    const widthStyle = fullWidth ? 'w-full' : ''
    const errorStyle = error ? 'border-primary-red focus:ring-primary-red' : ''

    return (
      <div className={`${widthStyle}`}>
        {label && (
          <label className="block text-sm font-medium text-neutral-dark-gray mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          {Icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <Icon className="w-5 h-5 text-neutral-medium-gray" />
            </div>
          )}
          <input
            ref={ref}
            className={`input-field ${Icon ? 'pl-10' : ''} ${errorStyle} ${widthStyle} ${className}`}
            {...props}
          />
        </div>
        {error && (
          <p className="mt-1 text-sm text-primary-red">{error}</p>
        )}
        {helperText && !error && (
          <p className="mt-1 text-sm text-neutral-medium-gray">{helperText}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
