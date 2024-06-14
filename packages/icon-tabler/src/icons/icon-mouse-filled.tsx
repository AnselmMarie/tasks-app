/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMouseFilled = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <G
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <Path d="M0 0h24v24H0z" />
        <Path
          fill="currentColor"
          d="M14 2a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5h-4a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm-2 4a1 1 0 0 0-1 1v4l.007.117A1 1 0 0 0 13 11V7l-.007-.117A1 1 0 0 0 12 6"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconMouseFilled))
export { Memo as IconMouseFilled }
