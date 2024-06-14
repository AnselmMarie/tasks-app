/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandRadixUi = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 5.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0M6 3h5v5H6zm5 8v10a5 5 0 0 1-.217-9.995z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBrandRadixUi))
export { Memo as IconBrandRadixUi }
