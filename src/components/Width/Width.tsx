import { FC, ReactNode } from "react"
import { Box, Flex } from "@mantine/core"

interface IProps {
  children: ReactNode
}

const Width: FC<IProps> = ({ children }) => {
  return (
    <Flex bg="transparent" h="100%" w="100%" justify="center" px={{ base: "25", xl: "0" }}>
      <Box bg="transparent" w="100%" maw={1250}>
        {children}
      </Box>
    </Flex>
  )
}

export default Width
