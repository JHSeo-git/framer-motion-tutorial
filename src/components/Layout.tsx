import { css } from '@linaria/core'

type LayoutProps = {
  children: React.ReactChild
}

function Layout({ children }: LayoutProps) {
  return (
    <div className={box}>
      <div className="bg"></div>
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

    background: linear-gradient(
      45deg,
      var(--pink-color-100),
      var(--blue-color-100),
      var(--purple-color-100),
      var(--cyan-color-100)
    );
    background-size: 400% 100%;
    animation: gradient 10s ease infinite;

    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  }
`
const main = css``

export default Layout
