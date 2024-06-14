/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowAutofitRight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20 12V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8m0 4h17m-3-3 3 3-3 3"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowAutofitRight))
export { Memo as IconArrowAutofitRight }
