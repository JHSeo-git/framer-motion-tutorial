import { css } from '@linaria/core'
import AppLink from '../components/AppLink'

function Home() {
  return (
    <section className={box}>
      <h1>Samples for Framer motion</h1>
      <div className="grid">
        <AppLink to="/sample/card" className={overrideStyle}>
          CARD
        </AppLink>
        <AppLink to="/sample/tossbank" className={overrideStyle}>
          TOSS BANK
        </AppLink>
      </div>
    </section>
  )
}

const box = css`
  padding: 50px 25px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  // TODO: responsive style
  @media (min-width: 800px) {
    max-width: 700px;
    margin: 0 auto;
    padding: 100px 50px;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 50px;
    color: var(--color-gray-900);
  }

  .grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
  }
`

const overrideStyle = css`
  padding: 1rem 1.5rem;
  color: var(--color-gray-900);
  background-color: #ffffff;
  border-radius: 9999px;
  transition: all 0.2s ease;

  @media (hover: hover) {
    &:hover {
      transform: translateY(-5px);
    }
  }
`

export default Home
