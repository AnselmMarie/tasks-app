/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTextDirectionRtl = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 4H9.5a3.5 3.5 0 0 0 0 7h.5m4 4V4m-4 11V4M5 19h14M7 21l-2-2 2-2"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTextDirectionRtl))
export { Memo as IconTextDirectionRtl }
