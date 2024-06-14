/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBuildingMosque = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 21h7v-2a2 2 0 1 1 4 0v2h7M4 21V11m16 10V11M4 16h3v-3h10v3h3m-3-3a5 5 0 0 0-10 0m14-2.5c0-.329-.077-.653-.224-.947L20 8l-.776 1.553A2.118 2.118 0 0 0 19 10.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5m-16 0c0-.329-.077-.653-.224-.947L4 8l-.776 1.553A2.118 2.118 0 0 0 3 10.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5M12 2a2 2 0 1 0 2 2m-2 2v2"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBuildingMosque))
export { Memo as IconBuildingMosque }
