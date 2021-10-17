import { css } from '@linaria/core'
import { motion } from 'framer-motion'
import AppLink from '../components/AppLink'

function Page404() {
  return (
    <motion.div
      className={box}
      transition={{ duration: 0.5 }}
      animate={{
        opacity: [0, 1],
        y: [-20, 0],
      }}
    >
      <div className="row">
        <h1>404</h1>
        <div className="seperate" />
        <h2>Page Not Found</h2>
      </div>
      <div className="row">
        <AppLink className={overrideAppLink} to="/">
          Go Home
        </AppLink>
      </div>
    </motion.div>
  )
}

const box = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1,
  h2 {
    color: var(--color-gray-900);
  }

  .row {
    display: flex;
    justify-content: center;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
  .seperate {
    margin: 0 20px;
    height: 20px;
    width: 2px;
    background-color: var(--color-gray-500);
  }
`

const overrideAppLink = css`
  border-radius: 9999px;
  background-color: var(--color-gray-900);
  color: #ffffff;
  transition: all 0.1s linear;

  @media (hover: hover) {
    &:hover {
      text-decoration: none;
      background-color: #ffffff;
      color: var(--color-gray-900);
    }
  }
`

export default Page404
