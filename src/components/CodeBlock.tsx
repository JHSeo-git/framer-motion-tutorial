import { css } from '@linaria/core'
import { motion } from 'framer-motion'
import { useState } from 'react'
import CopyIcon from '../images/icons/copy.svg'

type CodeBlockPrpos = {
  code: string
}

function CodeBlock({ code }: CodeBlockPrpos) {
  const [copiedCode, setCopiedCode] = useState<string | undefined>()
  const [hasCopied, setHasCopied] = useState(false)
  return (
    <motion.div className={box}>
      <pre>
        <code>{code}</code>
      </pre>
      <motion.button className={buttonStyle}>
        <CopyIcon />
      </motion.button>
    </motion.div>
  )
}

const box = css`
  padding: 20px;
  border-radius: 1rem;
  background: linear-gradient(
    '90deg',
    var(--pink-color-50),
    var(--blue-color-50)
  );
`

const buttonStyle = css`
  svg {
    width: 20px;
    height: 20px;
  }
`

export default CodeBlock
