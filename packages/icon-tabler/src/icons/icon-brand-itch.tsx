/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandItch = (_props: any) => {
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
        <Path d="M2 7v1c0 1.087 1.078 2 2 2 1.107 0 2-.91 2-2 0 1.09.893 2 2 2s2-.91 2-2c0 1.09.893 2 2 2s2-.91 2-2c0 1.09.893 2 2 2s2-.91 2-2c0 1.09.893 2 2 2 .922 0 2-.913 2-2V7c-.009-.275-.538-.964-1.588-2.068A3 3 0 0 0 18.238 4H5.762a3 3 0 0 0-2.174.932C2.538 6.036 2.008 6.725 2 7m2 3c-.117 6.28.154 9.765.814 10.456 1.534.367 4.355.535 7.186.536 2.83-.001 5.652-.169 7.186-.536.99-1.037.898-9.559.814-10.456" />
        <Path d="m10 16 2-2 2 2m-2-2v4" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandItch))
export { Memo as IconBrandItch }
