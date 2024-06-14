/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandSurfshark = (_props: any) => {
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
        <Path d="M19.954 9.447c-.237-6.217 0-6.217-6-6.425-5.774-.208-6.824 1-7.91 5.382C3.16 20.22 2.199 23.12 10.836 19.602c9.392-3.831 9.297-5.382 9.114-10.155z" />
        <Path d="M8 16h.452c1.943.007 3.526-1.461 3.543-3.286v-2.428c.018-1.828 1.607-3.298 3.553-3.286H16" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandSurfshark))
export { Memo as IconBrandSurfshark }
