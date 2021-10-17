import { css, cx } from '@linaria/core'
import { Link } from 'react-router-dom'

type AppLinkProps = {
  to: string
  className?: string
  children: React.ReactNode
}

function AppLink({ to, className, children }: AppLinkProps) {
  const external = to.startsWith('http')
  if (external) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noreferrer"
        className={cx(linkStyle, className)}
      >
        {children}
      </a>
    )
  }
  return (
    <Link to={to} className={cx(linkStyle, className)}>
      {children}
    </Link>
  )
}

const linkStyle = css`
  display: inline-block;
`

export default AppLink
