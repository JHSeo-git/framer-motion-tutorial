import { css, cx } from '@linaria/core'
import { useCallback, useEffect, useRef, useState } from 'react'
import FramerIcon from '../assets/images/icons/framer.svg'
import AppLink from './AppLink'

function Header() {
  const ref = useRef<HTMLDivElement>(null)
  const [isTop, SetIsTop] = useState(true)

  const handleScrolling = useCallback(() => {
    const { top } = document.body.getBoundingClientRect()
    if (top < 0) {
      SetIsTop(false)
    } else {
      SetIsTop(true)
    }
  }, [SetIsTop])

  useEffect(() => {
    window.addEventListener('scroll', handleScrolling)

    return () => window.removeEventListener('scroll', handleScrolling)
  }, [handleScrolling])

  return (
    <header ref={ref} className={cx(header, isTop ? '' : 'outline')}>
      <nav className={inner}>
        <AppLink to="/" className={overrideAppLink}>
          <FramerIcon />
          <span>Framer</span>
        </AppLink>
      </nav>
    </header>
  )
}

const header = css`
  background-color: #ffffff;
  position: fixed;
  width: 100%;

  z-index: var(--zIndex-fixed);
  transition: box-shadow 0.2s ease;
  &.outline {
    box-shadow: 0 0 0.125rem rgb(0 0 0 / 22%),
      0 0.4375rem 0.625rem rgb(0 0 0 / 12%);
  }
`

const inner = css`
  height: var(--size-header-height);
  margin: 0 auto;
  max-width: 1140px;
  padding: 0 50px;

  display: flex;
  align-items: center;
`

const overrideAppLink = css`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    height: 21px;
    width: 14px;
    margin-right: 1rem;
  }
  span {
    font-weight: bold;
  }
`

export default Header
