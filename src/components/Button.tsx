import { motion } from 'framer-motion'
import { css, cx } from '@linaria/core'

type ButtonProps = {
  progress?: number
  children?: React.ReactNode
} & React.ComponentProps<typeof motion.button>

function Button({ progress, className, children, ...rest }: ButtonProps) {
  return (
    <motion.button
      type="button"
      className={cx(buttonStyle, className)}
      {...rest}
    >
      {children}
    </motion.button>
  )
}

const buttonStyle = css`
  // default
  position: relative;
  margin: 0 auto;
  text-align: center;
  vertical-align: middle;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  background-color: var(--color-gray-900);

  font-size: 14px;
  color: #ffffff;

  transition: background-color 0.2s ease, color 0.1s ease,
    border-color 0.2s ease;

  @media (hover: hover) {
    &:hover {
      border: 2px solid var(--color-gray-900);
      background-color: #ffffff;
      color: var(--color-gray-900);
    }
  }

  @media (min-width: 640px) {
    font-size: 16px;
    padding: 10px;
  }

  &.primary {
    background-color: var(--color-blue-900);
    color: #ffffff;

    @media (hover: hover) {
      &:hover {
        background-color: #ffffff;
        color: var(--color-blue-900);
      }
    }
  }
`

export default Button
