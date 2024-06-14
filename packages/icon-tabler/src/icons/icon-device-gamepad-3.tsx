/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDeviceGamepad_3 = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 12 7 9H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2zm4 0 3-3h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2zm-2 2-3 3v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2zm0-4L9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconDeviceGamepad_3))
export { Memo as IconDeviceGamepad_3 }
