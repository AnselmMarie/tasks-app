/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChartBarOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm9-5h2a1 1 0 0 1 1 1v2m0 4v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V9m6 2V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v12m-1 3h-4a1 1 0 0 1-1-1v-4M4 20h14M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconChartBarOff))
export { Memo as IconChartBarOff }
