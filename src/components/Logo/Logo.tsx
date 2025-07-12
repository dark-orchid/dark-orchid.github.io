'use client'
import {FC}  from 'react'
import {Box} from '@mantine/core'
import Image from 'next/image'


interface LogoProps {
    height?: number | string
    width?: number | string
    maxWidth?: number | string
    maxHeight?: number | string
    className?: string
    objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
    manualColorScheme?: 'light' | 'dark' | 'green'
}

const Logo: FC<LogoProps> = ({
                                 height,
                                 width,
                                 maxWidth,
                                 maxHeight,
                                 className = '',
                                 objectFit = 'contain'
                             }) => {
    const ALT_LABEL = 'Logo'
    const imageUrl = '/images/196x196.png'

    return (
        <Box h={height} w={width} mah={maxHeight} maw={maxWidth}>
            <Image
                src={imageUrl}
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'block',
                    objectFit: objectFit
                }}
                priority
                sizes="(max-width: 768px) 400px, 80vw"
                quality={100}
                alt={ALT_LABEL}
                width={typeof width === 'number' ? width : 100}
                height={typeof height === 'number' ? height : 100}
                className={className}
            />
        </Box>
    )
}

export default Logo
