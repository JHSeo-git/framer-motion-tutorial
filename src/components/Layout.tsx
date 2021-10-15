import { css } from '@linaria/core'
import Waves from '../images/bg/waves.svg'

type LayoutProps = {
  children: React.ReactChild
}

function Layout({ children }: LayoutProps) {
  return (
    <div className={box}>
      <div className="bg">
        <Waves height="100%" />
      </div>
      <main className={main}>{children}</main>
    </div>
  )
}
const box = css`
  /* background-color: var(--gray-color-100); */
  min-height: 100%;
  position: relative;

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    z-index: -1;
  }
`
const main = css``

export default Layout
