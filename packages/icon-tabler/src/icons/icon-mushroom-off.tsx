/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMushroomOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5.874 5.89A8.128 8.128 0 0 0 4 11.1a.9.9 0 0 0 .9.9H12m4 0h3.1a.9.9 0 0 0 .9-.9C20 6.626 16.418 3 12 3c-1.43 0-2.774.38-3.936 1.047M10 12v7a2 2 0 1 0 4 0v-5M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconMushroomOff))
export { Memo as IconMushroomOff }
