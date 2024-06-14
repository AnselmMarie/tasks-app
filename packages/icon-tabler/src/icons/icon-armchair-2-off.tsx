/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArmchair_2Off = (_props: any) => {
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
        <Path d="M5 10V6a3 3 0 0 1 .128-.869m2.038-2.013C7.43 3.04 7.71 3 8 3h8a3 3 0 0 1 3 3v4" />
        <Path d="M16.124 12.145a3 3 0 1 1 3.756 3.724M19 19H5v-3a3 3 0 1 1 3-3v2m0-3h4m-5 7v2m10-2v2M3 3l18 18" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconArmchair_2Off))
export { Memo as IconArmchair_2Off }
