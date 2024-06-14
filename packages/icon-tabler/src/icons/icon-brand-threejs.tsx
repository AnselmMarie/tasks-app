/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandThreejs = (_props: any) => {
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
        <Path d="M8 22 3 3l19 5.5z" />
        <Path d="m12.573 17.58-6.152-1.576 8.796-9.466 1.914 6.64" />
        <Path d="M12.573 17.58 11 11l6.13 2.179M9.527 4.893 11 11 4.69 9.436z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandThreejs))
export { Memo as IconBrandThreejs }
