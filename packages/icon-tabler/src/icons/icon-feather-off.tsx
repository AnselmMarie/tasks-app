/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFeatherOff = (_props: any) => {
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
        <Path d="m4 20 8-8m2-7v5h5M9 11v4h4m-7-2v5h5m-5-5 3.502-3.502m2.023-2.023L14 5" />
        <Path d="M19 10c.638-.636 1-1.515 1-2.486A3.515 3.515 0 0 0 16.483 4c-.97 0-1.847.367-2.483 1m-3 13 3.499-3.499m2.008-2.008L19 10M3 3l18 18" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconFeatherOff))
export { Memo as IconFeatherOff }
