/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowAutofitHeight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6m6 10v7m0-18v7m-3 8 3 3 3-3M15 6l3-3 3 3"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowAutofitHeight))
export { Memo as IconArrowAutofitHeight }
