import { css } from '@linaria/core'
import { motion, useAnimation, Variants } from 'framer-motion'
import { useEffect, useMemo, useRef } from 'react'
import useInView from '../hooks/useInView'

export type StackType = 'slide' | 'pull' | 'scale'
export type StackDirection = {
  slide: {
    direction: 'right' | 'left'
  }
  pull: {
    direction: 'up' | 'down'
  }
}
export type ExtractStackDirection<Type extends StackType> = Type extends
  | 'slide'
  | 'pull'
  ? StackDirection[Type]['direction']
  : never

type AnimateStackProps<Type extends StackType> = {
  type: Type
  direction?: ExtractStackDirection<Type>
  duration?: number
  distance?: number
  children: React.ReactNode
} & React.ComponentProps<typeof motion.div>

function AnimateStack<Type extends StackType>({
  type,
  direction,
  duration = 0.3,
  distance = 20,
  children,
  ...rest
}: AnimateStackProps<Type>) {
  const ref = useRef<HTMLDivElement>(null)
  const { inView } = useInView(ref, { rootMargin: '-100px 0px' })
  const controls = useAnimation()

  const motionVariants: Variants | undefined = useMemo(() => {
    const negative =
      (direction as ExtractStackDirection<typeof type>) === ('down' || 'right')
    switch (type) {
      case 'slide': {
        return {
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: distance * (negative ? -1 : 1) },
        }
      }
      case 'pull': {
        return {
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: distance * (negative ? -1 : 1) },
        }
      }
      case 'scale': {
        return {
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 1 - distance / 100 },
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
      className={box}
      transition={{ duration }}
      initial="hidden"
      animate={controls}
      variants={motionVariants}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

const box = css``

export default AnimateStack
