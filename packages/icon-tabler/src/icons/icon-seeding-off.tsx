/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSeedingOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.412 7.407a6.025 6.025 0 0 0-2.82-2.82M4 4H3v2a6 6 0 0 0 6 6h3m0 2a6 6 0 0 1 .255-1.736m1.51-2.514A5.981 5.981 0 0 1 18 8h3v1c0 2.158-1.14 4.05-2.85 5.107M15 15h-3m0 5v-8M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSeedingOff))
export { Memo as IconSeedingOff }
