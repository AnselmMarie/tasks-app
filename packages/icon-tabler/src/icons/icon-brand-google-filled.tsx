/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandGoogleFilled = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <G
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <Path d="M0 0h24v24H0z" />
        <Path
          fill="currentColor"
          d="M12 2a9.96 9.96 0 0 1 6.29 2.226 1 1 0 0 1 .04 1.52l-1.51 1.362a1 1 0 0 1-1.265.06 6 6 0 1 0 2.103 6.836l.001-.004h-3.66a1 1 0 0 1-.992-.883L13 13v-2a1 1 0 0 1 1-1h6.945a1 1 0 0 1 .994.89c.04.367.061.737.061 1.11 0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandGoogleFilled))
export { Memo as IconBrandGoogleFilled }
