/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const Icon_3dRotate = (_props: any) => {
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
        <Path d="M12 3a7 7 0 0 1 7 7v4l-3-3m6 0-3 3M8 15.5l-5-3 5-3 5 3V18l-5 3z" />
        <Path d="M3 12.5V18l5 3m0-5.455 5-3.03" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(Icon_3dRotate))
export { Memo as Icon_3dRotate }
