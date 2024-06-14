/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPdf = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 8v8h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm-7 4h2a2 2 0 1 0 0-4H3v8m14-4h3m1-4h-4v8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPdf))
export { Memo as IconPdf }
