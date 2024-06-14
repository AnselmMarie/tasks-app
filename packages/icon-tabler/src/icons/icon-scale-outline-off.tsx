/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconScaleOutlineOff = (_props: any) => {
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
        <Path d="M7 3h10a4 4 0 0 1 4 4v10m-1.173 2.83A3.987 3.987 0 0 1 17 21H7a4 4 0 0 1-4-4V7c0-1.104.447-2.103 1.17-2.827" />
        <Path d="M11.062 7.062A7.002 7.002 0 0 1 17 9.095 142.85 142.85 0 0 0 15 11m-3.723.288a3 3 0 0 0-1.315.71L7.006 9.095a6.977 6.977 0 0 1 1.142-.942M3 3l18 18" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconScaleOutlineOff))
export { Memo as IconScaleOutlineOff }
