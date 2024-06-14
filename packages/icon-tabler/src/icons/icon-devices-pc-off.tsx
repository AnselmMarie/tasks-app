/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDevicesPcOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 9v10H3V5h2m8 4h9v7h-2m-4 0h-4v-4m2 7h5m-2-2v2M6 13v.01M6 16v.01M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconDevicesPcOff))
export { Memo as IconDevicesPcOff }
