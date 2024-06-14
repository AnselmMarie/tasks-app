/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCurrentLocationOff = (_props: any) => {
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
        <Path d="M14.685 10.661c-.3-.6-.795-1.086-1.402-1.374m-3.397.584a3 3 0 1 0 4.24 4.245" />
        <Path d="M6.357 6.33a8 8 0 1 0 11.301 11.326m1.642-2.378A8 8 0 0 0 8.703 4.709M12 2v2m0 16v2m8-10h2M2 12h2M3 3l18 18" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconCurrentLocationOff))
export { Memo as IconCurrentLocationOff }
