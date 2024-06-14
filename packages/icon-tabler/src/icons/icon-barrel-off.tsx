/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBarrelOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <G
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <Path d="M8 4h8.722a2 2 0 0 1 1.841 1.22C19.521 7.48 20 9.74 20 12a16.35 16.35 0 0 1-.407 3.609m-.964 3.013-.066.158A2 2 0 0 1 16.722 20H7.278a2 2 0 0 1-1.841-1.22C4.479 16.52 4 14.26 4 12c0-2.21.458-4.42 1.374-6.63" />
        <Path d="M14 4c.585 2.337.913 4.674.985 7.01m-.114 3.86A33.415 33.415 0 0 1 14 20M10 4a34.42 34.42 0 0 0-.366 1.632m-.506 3.501A32.126 32.126 0 0 0 9 12c0 2.667.333 5.333 1 8m-5.5-4H16m3.5-8H12M8 8H4.5M3 3l18 18" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBarrelOff))
export { Memo as IconBarrelOff }
