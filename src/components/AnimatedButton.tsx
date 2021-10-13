import { motion } from 'framer-motion'
import { css } from '@linaria/core'

function AnimatedButton() {
  return (
    <motion.button className={buttonStyle}>
      <span>Button</span>
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

export default AnimatedButton