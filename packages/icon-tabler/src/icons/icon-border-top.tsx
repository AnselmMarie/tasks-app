/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBorderTop = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 4h16M4 8v.01M12 8v.01M20 8v.01M4 12v.01M8 12v.01m4-.01v.01m4-.01v.01m4-.01v.01M4 16v.01m8-.01v.01m8-.01v.01M4 20v.01M8 20v.01m4-.01v.01m4-.01v.01m4-.01v.01"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBorderTop))
export { Memo as IconBorderTop }
