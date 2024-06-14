/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandCitymapper = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 11a1 1 0 1 1-1 1.013 1 1 0 0 1 1-1zm18 0a1 1 0 1 1-1 1.013 1 1 0 0 1 1-1zM8 12h8m-3-3 3 3-3 3"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBrandCitymapper))
export { Memo as IconBrandCitymapper }
