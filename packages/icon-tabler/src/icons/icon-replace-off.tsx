/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconReplaceOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 3h1a1 1 0 0 1 1 1v1m-.303 3.717A1 1 0 0 1 8 9H4a1 1 0 0 1-1-1V4c0-.28.115-.532.3-.714M19 15h1a1 1 0 0 1 1 1v1m-.303 3.717A1 1 0 0 1 20 21h-4a1 1 0 0 1-1-1v-4c0-.28.115-.532.3-.714M21 11V8a2 2 0 0 0-2-2h-6l3 3m0-6-3 3M3 13v3a2 2 0 0 0 2 2h6l-3-3m0 6 3-3M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconReplaceOff))
export { Memo as IconReplaceOff }
