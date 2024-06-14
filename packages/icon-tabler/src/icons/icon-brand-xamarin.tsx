/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandXamarin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15.958 21H8.041a2 2 0 0 1-1.732-1l-4.041-7a2 2 0 0 1 0-2l4.041-7a2 2 0 0 1 1.732-1h7.917a2 2 0 0 1 1.732 1l4.042 7a2 2 0 0 1 0 2l-4.041 7a2 2 0 0 1-1.733 1M15 16 9 8m0 8 6-8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBrandXamarin))
export { Memo as IconBrandXamarin }
