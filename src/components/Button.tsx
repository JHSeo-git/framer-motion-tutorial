import { motion } from 'framer-motion'
import { css } from '@linaria/core'

type ButtonProps = {
  name: string
  progress?: number
} & React.ComponentProps<typeof motion.button>

function Button({ name, progress, ...rest }: ButtonProps) {
  return (
    <motion.button className={buttonStyle} {...rest}>
      <span>{name}</span>
    </motion.button>
  )
}

const buttonStyle = css`
  padding: 1rem 1.5rem;
  margin: 0 auto;
  display: flex;

  background: linear-gradient(
    90deg,
    var(--blue-color-300) 20%,
    var(--cyan-color-300) 80%
  );
  border-radius: 9999px;

  font-size: 18px;
  color: white;
`

export default Button
