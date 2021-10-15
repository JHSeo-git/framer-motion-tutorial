import { css } from '@linaria/core'
import Card from '../../components/Card'

function SampleCard() {
  return (
    <section className={box}>
      {Array.from({ length: 20 }).map((_, idx) => (
        <Card key={idx} type="slide" direction="left">
          Card {idx}
        </Card>
      ))}
    </section>
  )
}

const box = css`
  padding: 50px;
`

export default SampleCard
