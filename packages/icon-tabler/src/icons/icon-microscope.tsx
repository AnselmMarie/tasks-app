/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMicroscope = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 21h14M6 18h2m-1 0v3m2-10 3 3 6-6-3-3zm1.5 1.5L9 14m8-11 3 3m-8 15a6 6 0 0 0 3.715-10.712"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconMicroscope))
export { Memo as IconMicroscope }
