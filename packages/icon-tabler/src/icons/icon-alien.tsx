/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAlien = (_props: any) => {
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
        <Path d="M11 17a2.5 2.5 0 0 0 2 0" />
        <Path d="M12 3C7.336 3 4.604 5.331 4.138 8.595a11.816 11.816 0 0 0 2 8.592 10.777 10.777 0 0 0 3.199 3.064c1.666 1 3.664 1 5.33 0a10.777 10.777 0 0 0 3.199-3.064 11.89 11.89 0 0 0 2-8.592C19.4 5.33 16.668 3 12.004 3zm-4 8 2 2m6-2-2 2" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconAlien))
export { Memo as IconAlien }
