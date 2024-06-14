/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPlant_2Off = (_props: any) => {
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
        <Path d="M2 9c0 5.523 4.477 10 10 10a9.953 9.953 0 0 0 5.418-1.593m2.137-1.855A9.961 9.961 0 0 0 22 9" />
        <Path d="M12 19c0-1.988.58-3.84 1.58-5.397m1.878-2.167A9.961 9.961 0 0 1 22 9M2 9a10 10 0 0 1 10 10m0-15a9.7 9.7 0 0 1 3 7.013" />
        <Path d="M9.01 11.5a9.696 9.696 0 0 1 .163-2.318m1.082-2.942A9.696 9.696 0 0 1 12 4M3 3l18 18" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconPlant_2Off))
export { Memo as IconPlant_2Off }
