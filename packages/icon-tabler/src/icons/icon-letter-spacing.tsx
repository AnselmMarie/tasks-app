/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconLetterSpacing = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 12V6.5a2.5 2.5 0 0 1 5 0V12m0-4H5m8-4 3 8 3-8M5 18h14m-2 2 2-2-2-2M7 16l-2 2 2 2"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconLetterSpacing))
export { Memo as IconLetterSpacing }
