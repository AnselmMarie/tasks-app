/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAspectRatioFilled = (_props: any) => {
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
          d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3M9 7a1 1 0 0 1 .117 1.993L9 9H7v2a1 1 0 0 1-.883.993L6 12a1 1 0 0 1-.993-.883L5 11V8a1 1 0 0 1 .883-.993L6 7zm9 5a1 1 0 0 1 .993.883L19 13v3a1 1 0 0 1-.883.993L18 17h-3a1 1 0 0 1-.117-1.993L15 15h2v-2a1 1 0 0 1 .883-.993z"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconAspectRatioFilled))
export { Memo as IconAspectRatioFilled }
