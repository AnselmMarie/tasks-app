/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNavigationTop = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16.54 19.977a.34.34 0 0 0 .357-.07.33.33 0 0 0 .084-.35L12 9 7.018 19.557a.33.33 0 0 0 .084.35.34.34 0 0 0 .357.07L12 18.5zM12 3v2"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNavigationTop))
export { Memo as IconNavigationTop }
