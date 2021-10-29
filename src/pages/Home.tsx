import { css } from '@linaria/core'
import AppLink from '../components/AppLink'

function Home() {
  return (
    <section className={box}>
      <h1>Samples for Framer motion</h1>
      <ul className={list}>
        <li>
          <AppLink to="/sample/card" className={overrideStyle}>
            CARD Components
          </AppLink>
        </li>
      </ul>
      <ul className={list}>
        <li>
          <AppLink to="/sample/bank" className={overrideStyle}>
            BANK PAGE
          </AppLink>
        </li>
      </ul>
    </section>
  )
}

const box = css`
  padding: 50px 25px;

  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 50px;
    color: var(--color-gray-900);
  }
`

const list = css`
  width: 100%;
  margin-bottom: 20px;

  li + li {
    margin-top: 20px;
  }
`

const overrideStyle = css`
  width: 100%;
  padding: 1rem 1.5rem;
  color: var(--color-gray-900);
  background-color: #ffffff;
  font-weight: bold;
  border-radius: 9999px;
  transition: all 0.2s ease;

  @media (hover: hover) {
    &:hover {
      transform: translateY(-5px);
    }
  }
`

export default Home
