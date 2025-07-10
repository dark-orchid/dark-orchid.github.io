import React, { ReactNode } from "react"

interface IProps {
  condition: boolean | ReactNode
  children: ReactNode
}

const Check: React.FC<IProps> = ({ condition, children }) => {
  return condition && <>{children}</>
}

export default Check
