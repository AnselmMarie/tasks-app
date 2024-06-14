/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBodyScan = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2m8-16h2a2 2 0 0 1 2 2v2m-4 12h2a2 2 0 0 0 2-2v-2m-9-8a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-1 9v-1a2 2 0 1 1 4 0v1m-6-7c.666.666 1.334 1 2 1h4c.666 0 1.334-.334 2-1m-4 1v3"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBodyScan))
export { Memo as IconBodyScan }
