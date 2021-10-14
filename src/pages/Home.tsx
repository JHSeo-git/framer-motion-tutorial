import { css } from '@linaria/core'
import AnimatedButton from '../components/AnimatedButton'
import Card from '../components/Card'

function Home() {
  return (
    <section className={box}>
      <AnimatedButton name="Button" />
      {Array.from({ length: 20 }).map((_, idx) => (
        <Card key={idx}>Card {idx}</Card>
      ))}
    </section>
  )
}

const box = css`
  padding: 50px;
`

export default Home
