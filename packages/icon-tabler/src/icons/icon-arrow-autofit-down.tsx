/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowAutofitDown = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8m4 0v17m-3-3 3 3 3-3"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowAutofitDown))
export { Memo as IconArrowAutofitDown }
