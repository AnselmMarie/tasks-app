/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconZeppelinOff = (_props: any) => {
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
        <Path d="M15.773 15.783c-.723.141-1.486.217-2.273.217-2.13 0-4.584-.926-7.364-2.777L4 15v-3.33A46.07 46.07 0 0 1 2 10a46.07 46.07 0 0 1 2-1.67V5l2.135 1.778c.13-.087.261-.172.39-.256m2.564-1.42C10.69 4.367 12.16 4 13.5 4c4.694 0 8.5 2.686 8.5 6 0 1.919-1.276 3.627-3.261 4.725" />
        <Path d="M10 15.5V20h6v-4M3 3l18 18" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconZeppelinOff))
export { Memo as IconZeppelinOff }
