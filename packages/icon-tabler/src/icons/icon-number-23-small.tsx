/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNumber_23Small = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 8h2.5A1.5 1.5 0 0 1 17 9.5v1a1.5 1.5 0 0 1-1.5 1.5H14h1.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5H13M6 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNumber_23Small))
export { Memo as IconNumber_23Small }
