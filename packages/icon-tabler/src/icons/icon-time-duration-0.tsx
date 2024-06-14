/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTimeDuration_0 = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 12v.01M21 12v.01M12 21v.01M12 3v.01M7.5 4.2v.01m9-.01v.01m0 15.59v.01m-9-.01v.01M4.2 16.5v.01m15.6-.01v.01m0-9.01v.01M4.2 7.5v.01M10 11v2a2 2 0 1 0 4 0v-2a2 2 0 1 0-4 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTimeDuration_0))
export { Memo as IconTimeDuration_0 }
