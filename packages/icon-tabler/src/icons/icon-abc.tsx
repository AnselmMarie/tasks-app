/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAbc = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 16v-6a2 2 0 1 1 4 0v6m-4-3h4m3-5v6a2 2 0 1 0 4 0v-1a2 2 0 1 0-4 0v1m10.732-2A2 2 0 0 0 17 13v1a2 2 0 0 0 3.726 1.01"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconAbc))
export { Memo as IconAbc }
