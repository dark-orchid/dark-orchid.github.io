'use client'

import { FC } from 'react'
import Image from 'next/image'
import type { Media } from '@/payload-types'
import { Box } from '@mantine/core'

interface RenderImageProps {
  data: string | Media | undefined
  width?: number | string
  height?: number | string
  maxWidth?: number | string
  maxHeight?: number | string
  className?: string
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
}

const RenderImage: FC<RenderImageProps> = ({
  data,
  width,
  height,
  maxWidth,
  maxHeight,
  className = '',
  objectFit = 'cover',
}) => {
  if (!data) return null

  let imageUrl: string | null = null
  let alt: string = ''

  if (typeof data === 'object' && 'url' in data) {
    imageUrl = data.url ?? null
  } else if (typeof data === 'string') {
    imageUrl = data
  }
  if (!imageUrl) return null

  if (typeof data === 'object' && 'alt' in data) {
    alt = data.alt ?? 'Kein Bildtext vorhanden.'
  }

  return (
    <Box h={height} w={width} mah={maxHeight} maw={maxWidth}>
      <Image
        src={imageUrl}
        style={{
          height: '100%',
          width: '100%',
          display: 'block',
          borderRadius: 6,
          objectFit: objectFit,
        }}
        priority={true}
        sizes="(max-width: 768px) 400px, 80vw"
        quality={100}
        alt={alt}
        width={typeof width === 'number' ? width : 100}
        height={typeof height === 'number' ? height : 100}
        className={className}
      />
    </Box>
  )
}

export default RenderImage
