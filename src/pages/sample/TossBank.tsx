import { css } from '@linaria/core'
import AnimateStack from '../../components/AnimateStack'
import Button from '../../components/Button'

function TossBank() {
  return (
    <>
      <div className={headerSpace} />
      <section className={box}>
        <AnimateStack type="pull" direction="up" duration={0.5}>
          <h1>
            새로운 은행을
            <br />
            만날 순간
          </h1>
        </AnimateStack>
        <AnimateStack type="pull" direction="up" duration={0.5}>
          <Button className={overrideButton}>사전신청하기</Button>
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
    margin-top: 65px;
    font-size: 4rem;
    color: var(--color-gray-900);
  }
`
const overrideButton = css`
  width: 200px;
  height: 50px;
  margin-top: 40px;

  border-radius: 100px;
  border: 0 solid transparent;

  font-weight: bold;

  @media (min-width: 640px) {
    width: 240px;
    height: 60px;

    border-radius: 120px;

    font-size: 18px;
  }
`

export default TossBank
