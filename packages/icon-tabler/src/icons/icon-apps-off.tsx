/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAppsOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 4h1a1 1 0 0 1 1 1v1m-.29 3.704A1 1 0 0 1 9 10H5a1 1 0 0 1-1-1V5c0-.276.111-.525.292-.706M18 14h1a1 1 0 0 1 1 1v1m-.29 3.704A1 1 0 0 1 19 20h-4a1 1 0 0 1-1-1v-4c0-.276.111-.525.292-.706M4 15a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm10-8h6m-3-3v6M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconAppsOff))
export { Memo as IconAppsOff }
