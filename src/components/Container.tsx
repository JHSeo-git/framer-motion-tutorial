type ContainerProps = {
  children: React.ReactNode
}

function Container({ children }: ContainerProps) {
  return <div>{children}</div>
}

export default Container
