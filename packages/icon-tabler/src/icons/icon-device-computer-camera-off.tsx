/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDeviceComputerCameraOff = (_props: any) => {
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
        <Path d="M6.15 6.153a7 7 0 0 0 9.696 9.696m2-2a7 7 0 0 0-9.699-9.695" />
        <Path d="M9.13 9.122a3 3 0 0 0 3.743 3.749m2-2a3 3 0 0 0-3.737-3.736M8 16l-2.091 3.486A1 1 0 0 0 6.766 21h10.468a1 1 0 0 0 .857-1.514L16 16M3 3l18 18" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconDeviceComputerCameraOff))
export { Memo as IconDeviceComputerCameraOff }
