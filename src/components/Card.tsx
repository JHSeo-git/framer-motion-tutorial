import { motion, useAnimation, Variants } from 'framer-motion'
import { css } from '@linaria/core'
import useInView from '../hooks/useInView'
import { useEffect, useMemo, useRef } from 'react'

export type CardType = 'slide' | 'stack' | 'scale'
export type CardDirection = {
  slide: {
    direction: 'right' | 'left'
  }
  stack: {
    direction: 'up' | 'down'
  }
  scale: {
    direction: 'all'
  }
}
export type ExtractCardDirection<Type extends CardType> =
  CardDirection[Type]['direction']

type CardProps<Type extends CardType> = {
  children: React.ReactNode
  type: Type
  direction: ExtractCardDirection<Type>
  duration?: number
  distance?: number
}

function Card<Type extends CardType>({
  children,
  type,
  direction,
  duration = 0.3,
  distance = 20,
}: CardProps<Type>) {
  const ref = useRef<HTMLDivElement>(null)
  const { inView } = useInView(ref, { rootMargin: '-100px 0px' })
  const controls = useAnimation()

  // TODO: refactoring
  const motionVariants: Variants | undefined = useMemo(() => {
    const negative =
      (direction as ExtractCardDirection<typeof type>) === ('down' || 'right')
    switch (type) {
      case 'stack': {
        return {
          visible: {
            opacity: 1,
            y: 0,
          },
          hidden: {
            opacity: 0,
            y: distance * (negative ? -1 : 1),
          },
        }
      }
      case 'slide': {
        return {
          visible: {
            opacity: 1,
            x: 0,
          },
          hidden: {
            opacity: 0,
            x: distance * (negative ? -1 : 1),
          },
        }
      }
      case 'scale': {
        return {
          visible: {
            opacity: 1,
            scale: 1,
          },
          hidden: {
            opacity: 0,
            scale: 1 - distance / 100,
          },
        }
      }
    }
  }, [type, direction, distance])

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
        duration,
      }}
      variants={motionVariants}
      className={box}
    >
      {children}
    </motion.div>
  )
}

const box = css`
  background-color: #ffffff;
  margin-top: 50px;
  padding: 50px;
  border-radius: 1rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`

export default Card
