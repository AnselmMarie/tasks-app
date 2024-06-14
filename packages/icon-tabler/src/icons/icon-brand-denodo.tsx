/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandDenodo = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 11h2v2h-2zm-7.366 4.634 1.732-1 1 1.732-1.732 1zM11 19h2v2h-2zm7.634-4.366 1.732 1-1 1.732-1.732-1zm-1-7 1.732-1 1 1.732-1.732 1zM11 3h2v2h-2zM3.634 8.366l1-1.732 1.732 1-1 1.732z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBrandDenodo))
export { Memo as IconBrandDenodo }
