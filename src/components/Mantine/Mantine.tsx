'use client'
import React, {FC, ReactNode}                               from 'react'
import {createTheme, CSSVariablesResolver, MantineProvider} from '@mantine/core'
import {DARK_MODE, DARK_PURPLE, LIGHT_MODE, LIGHT_PURPLE}   from '@/assets/colors/colors'


interface IProps {
    children: ReactNode
}

const resolver: CSSVariablesResolver = () => ({
    variables: {},
    light: LIGHT_MODE.reduce((acc, color, index) => ({...acc, [`--app-theme-${index}`]: color}), {}),
    dark: DARK_MODE.reduce((acc, color, index) => ({...acc, [`--app-theme-${index}`]: color}), {})
})

const theme: object = createTheme({
                                      fontFamily: 'Noto Sans',
                                      white: '#fff',
                                      black: '#000',
                                      colors: {
                                          light_mode: LIGHT_MODE,
                                          dark_mode: DARK_MODE,
                                          light_purple: LIGHT_PURPLE,
                                          dark_purple: DARK_PURPLE
                                      },
                                      fontSizes: {
                                          xs: '0.75rem',
                                          sm: '0.875rem',
                                          md: '1rem',
                                          lg: '1.125rem',
                                          xl: '1.25rem',
                                          xxl: '1.5rem'
                                      },
                                      breakpoints: {
                                          xs: '375px',
                                          sm: '425px',
                                          md: '768px',
                                          lg: '1024px',
                                          xl: '1440px'
                                      },
                                      radius: {
                                          xs: "2px",
                                          sm: "4px",
                                          md: "6px",
                                          lg: "8px",
                                          xl: "12px",
                                          full: "16px"
                                      },
                                      components: {}
                                  })

const Mantine: FC<IProps> = (props) => {
    return (
        <MantineProvider forceColorScheme={"dark"} cssVariablesResolver={resolver} theme={theme}>
            {props.children}
        </MantineProvider>
    )
}

export default Mantine
