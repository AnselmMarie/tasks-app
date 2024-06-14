/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandToyota = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <G
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <Path d="M2 12a10 7 0 1 0 20 0 10 7 0 1 0-20 0" />
        <Path d="M9 12c0 3.866 1.343 7 3 7s3-3.134 3-7-1.343-7-3-7-3 3.134-3 7" />
        <Path d="M6.415 6.191C5.527 6.694 5 7.321 5 8c0 1.657 3.134 3 7 3s7-1.343 7-3c0-.678-.525-1.304-1.41-1.806" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandToyota))
export { Memo as IconBrandToyota }
