import { css } from '@linaria/core'

type LayoutProps = {
  children: React.ReactChild
}

function Layout({ children }: LayoutProps) {
  return (
    <div className={box}>
      <main className={main}>{children}</main>
    </div>
  )
}
const box = css`
  background-color: var(--gray-color-100);
  min-height: 100%;
`
const main = css``

export default Layout
