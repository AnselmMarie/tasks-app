/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRefreshOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20 11A8.1 8.1 0 0 0 8.729 4.695m-2.41 1.624A8.083 8.083 0 0 0 4.5 9M4 5v4h4m-4 4a8.1 8.1 0 0 0 13.671 4.691M20 16v-1h-1M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconRefreshOff))
export { Memo as IconRefreshOff }
