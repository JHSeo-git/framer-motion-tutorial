import { motion } from 'framer-motion'
import { css } from '@linaria/core'

function AnimatedButton() {
  return <motion.button className={buttonStyle}>Button</motion.button>
}

const buttonStyle = css`
  border: 1px solid black;
  padding: 5px 10px;
`

export default AnimatedButton
