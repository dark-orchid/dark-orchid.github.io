import {FC, ReactNode} from "react"
import {Box} from "@mantine/core"
import styles from "./BackgroundGradient.module.css"

interface IProps {
  children?: ReactNode;
}

const BackgroundGradient: FC<IProps> = ({children}) => {
  return (
    <Box h={"100%"} className={`${styles.gradient}`}>
      <div className={`${styles.blob} ${styles.blob1}`}/>
      <div className={`${styles.blob} ${styles.blob2}`}/>
      <div className={`${styles.blob} ${styles.blob3}`}/>
      <div className={` ${styles.gridoverlay}`}/>
      {children}
    </Box>
  )
}

export default BackgroundGradient
