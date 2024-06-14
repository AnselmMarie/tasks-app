/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRadioactive = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m13.5 14.6 3 5.19A9 9 0 0 0 21 12h-6a3 3 0 0 1-1.5 2.6m0-5.2 3-5.19a9 9 0 0 0-9 0l3 5.19a3 3 0 0 1 3 0m-3 5.2-3 5.19A9 9 0 0 1 3 12h6a3 3 0 0 0 1.5 2.6"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconRadioactive))
export { Memo as IconRadioactive }
