/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMicrophone_2 = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 12.9A5 5 0 1 0 11.098 9M15 12.9l-3.902-3.899-7.513 8.584a2 2 0 1 0 2.827 2.83z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconMicrophone_2))
export { Memo as IconMicrophone_2 }
