import { css } from '@linaria/core'
import AnimatedButton from '../components/AnimatedButton'
import AnimatedCard from '../components/AnimatedCard'

function Home() {
  return (
    <section className={box}>
      <AnimatedButton name="Button" />
      {Array.from({ length: 20 }).map((_, idx) => (
        <AnimatedCard key={idx} type="slide" direction="left">
          AnimatedCard {idx}
        </AnimatedCard>
      ))}
    </section>
  )
}

const box = css`
  padding: 50px;
`

export default Home
