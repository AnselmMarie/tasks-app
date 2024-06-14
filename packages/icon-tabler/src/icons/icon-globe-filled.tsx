/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGlobeFilled = (_props: any) => {
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
          d="M11 4a5 5 0 1 1-4.995 5.217L6 9l.005-.217A5 5 0 0 1 11 4"
        />
        <Path
          fill="currentColor"
          d="M14.133 1.502a1 1 0 0 1 1.365-.369A9.015 9.015 0 1 1 5.094 15.755a1 1 0 1 1 1.312-1.51 7.015 7.015 0 1 0 8.096-11.378 1 1 0 0 1-.369-1.365"
        />
        <Path
          fill="currentColor"
          d="M11 16a1 1 0 0 1 .993.883L12 17v4a1 1 0 0 1-1.993.117L10 21v-4a1 1 0 0 1 1-1"
        />
        <Path
          fill="currentColor"
          d="M15 20a1 1 0 0 1 .117 1.993L15 22H7a1 1 0 0 1-.117-1.993L7 20z"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconGlobeFilled))
export { Memo as IconGlobeFilled }
