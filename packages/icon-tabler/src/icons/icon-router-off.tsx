/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRouterOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 13h2a2 2 0 0 1 2 2v2m-.588 3.417c-.362.36-.861.583-1.412.583H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h8m4 4v.01M13 17v.01m-.774-8.81a4 4 0 0 1 6.024.55M9.445 5.407A8 8 0 0 1 21.5 6.5M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconRouterOff))
export { Memo as IconRouterOff }
