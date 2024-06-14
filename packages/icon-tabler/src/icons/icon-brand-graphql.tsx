/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandGraphql = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m5.308 7.265 5.385-3.029m2.615-.001 5.384 3.03M20 9.5v5m-1.307 2.236-5.385 3.029m-2.616 0-5.384-3.03M4 14.5v-5m8.772-4.714 6.121 10.202M18.5 16h-13m-.393-1.012 6.122-10.201M10.5 3.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0m0 17a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0M2.5 8a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0m0 8a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0m16 0a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0m0-8a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBrandGraphql))
export { Memo as IconBrandGraphql }
