/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRadioactiveOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.118 14.127c-.182.181-.39.341-.618.473l3 5.19a9 9 0 0 0 1.856-1.423m1.68-2.32A8.993 8.993 0 0 0 21 12h-5m-2.5-2.6 3-5.19a9 9 0 0 0-8.536-.25M10.5 14.6l-3 5.19A9 9 0 0 1 3 12h6a3 3 0 0 0 1.5 2.6M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconRadioactiveOff))
export { Memo as IconRadioactiveOff }
