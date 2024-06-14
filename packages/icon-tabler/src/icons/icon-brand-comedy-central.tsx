/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandComedyCentral = (_props: any) => {
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
        <Path d="M5.343 17.657a8 8 0 1 0 0-11.314" />
        <Path d="M13.828 9.172a4 4 0 1 0 0 5.656" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandComedyCentral))
export { Memo as IconBrandComedyCentral }
