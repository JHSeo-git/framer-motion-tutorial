import { motion, useAnimation } from 'framer-motion'
import { css } from '@linaria/core'
import useInView from '../hooks/useInView'
import { useEffect, useRef } from 'react'

type CardProps = {
  children: React.ReactNode
}

function Card({ children }: CardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { inView } = useInView(ref, { rootMargin: '-100px 0px' })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [inView, controls])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{
        duration: 0.3,
      }}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
        },
        hidden: {
          opacity: 0,
          y: 20,
        },
      }}
      className={box}
    >
      {children}
    </motion.div>
  )
}

const box = css`
  margin-top: 50px;
  padding: 50px;
  border-radius: 1rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`

export default Card
