import '@mantine/core/styles.css'
import {mantineHtmlProps} from '@mantine/core'
import '@/assets/styles/variables.css'
import '@/assets/styles/font.css'
import '@/assets/styles/main.css'

import Mantine     from '../components/Mantine/Mantine'
import {ReactNode} from 'react'


export const metadata = {
    description: 'Theme',
    title: 'Dark-Orchid'

}

export default async function RootLayout(props: { children: ReactNode }) {
    const {children} = props

    return (
        <html lang="de" {...mantineHtmlProps}>
        <body>
        <main>
            <Mantine>{children}</Mantine>
        </main>
        </body>
        </html>
    )
}
