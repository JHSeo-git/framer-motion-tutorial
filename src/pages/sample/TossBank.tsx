import { css } from '@linaria/core'
import AnimateStack from '../../components/AnimateStack'

function TossBank() {
  return (
    <>
      <div className={headerSpace} />
      <section className={box}>
        <AnimateStack type="pull" direction="up">
          <h1>
            새로운 은행을
            <br />
            만날 순간
          </h1>
          <button></button>
        </AnimateStack>
      </section>
    </>
  )
}

const headerSpace = css`
  height: var(--size-header-height);
`

const box = css`
  padding-top: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: hidden;

  height: 2000px;

  h1 {
    text-align: center;
    font-size: 4rem;
    color: var(--color-gray-900);
  }
`

export default TossBank
