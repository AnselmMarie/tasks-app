/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMusicPlus = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 17a3 3 0 1 0 6 0 3 3 0 0 0-6 0m6 0V4h10v8M9 8h10m-3 11h6m-3-3v6"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconMusicPlus))
export { Memo as IconMusicPlus }
