/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRecharging = (_props: any) => {
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
        <Path d="M7.038 4.5a9 9 0 0 0-2.495 2.47m-1.357 3.239a9 9 0 0 0 0 3.508M4.5 16.962a9 9 0 0 0 2.47 2.495m3.239 1.357a9 9 0 0 0 3.5 0m3.253-1.314a9 9 0 0 0 2.495-2.47m1.357-3.239a9 9 0 0 0 0-3.508M19.5 7.038a9 9 0 0 0-2.47-2.495m-3.239-1.357a9 9 0 0 0-3.508-.02M12 8l-2 4h4l-2 4" />
        <Path d="M12 21a9 9 0 0 0 0-18" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconRecharging))
export { Memo as IconRecharging }
