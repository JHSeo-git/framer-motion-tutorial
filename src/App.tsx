import { css } from '@linaria/core'
import AnimatedButton from './components/AnimatedButton'

function App() {
  return (
    <section className={box}>
      <AnimatedButton />
    </section>
  )
}

const box = css`
  padding: 50px;
`

export default App
