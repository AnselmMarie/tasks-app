/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandDeezer = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 16.5h2v.5H3zm5 0h2.5v.5H8zm8 .5h-2.5v-.5H16zm5.5 0H19v-.5h2.5zm0-4H19v.5h2.5zm0-3.5H19v.5h2.5zm0-3.5H19v.5h2.5zM16 13h-2.5v.5H16zm-8 .5h2.5V13H8zm0-4h2.5v.5H8z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBrandDeezer))
export { Memo as IconBrandDeezer }
