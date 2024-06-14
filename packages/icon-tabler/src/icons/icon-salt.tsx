/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSalt = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <G
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <Path d="M12 13v.01M10 16v.01m4-.01v.01M7.5 8h9l-.281-2.248A2 2 0 0 0 14.234 4H9.766A2 2 0 0 0 7.78 5.752z" />
        <Path d="m7.5 8-1.612 9.671A2 2 0 0 0 7.861 20h8.278a2 2 0 0 0 1.973-2.329L16.5 8" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconSalt))
export { Memo as IconSalt }
