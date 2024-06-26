/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandZalando = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7.531 21c-.65 0-1-.15-1.196-.27-.266-.157-.753-.563-1.197-1.747A20.583 20.583 0 0 1 4.001 12c.015-2.745.436-5.07 1.137-6.975.444-1.2.93-1.605 1.197-1.763C6.527 3.159 6.88 3 7.53 3c.244 0 .532.022.871.075a19.093 19.093 0 0 1 6.425 2.475h.007a19.572 19.572 0 0 1 5.287 4.508c.783.99.879 1.627.879 1.942 0 .315-.096.953-.879 1.943a19.571 19.571 0 0 1-5.287 4.5h-.007a19.041 19.041 0 0 1-6.425 2.474A5.01 5.01 0 0 1 7.53 21z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBrandZalando))
export { Memo as IconBrandZalando }
