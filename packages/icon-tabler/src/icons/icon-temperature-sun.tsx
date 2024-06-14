/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTemperatureSun = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 13.5a4 4 0 1 0 4 0V5a2 2 0 1 0-4 0zM4 9h4m5 7a4 4 0 1 0 0-8 4.07 4.07 0 0 0-1 .124M13 3v1m8 8h1m-9 8v1m6.4-15.4-.7.7m0 11.4.7.7"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTemperatureSun))
export { Memo as IconTemperatureSun }
