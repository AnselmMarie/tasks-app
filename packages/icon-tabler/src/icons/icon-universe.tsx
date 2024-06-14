/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconUniverse = (_props: any) => {
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
        <Path d="M7.027 11.477a5 5 0 1 0 5.496-4.45 4.951 4.951 0 0 0-3.088.681" />
        <Path d="M5.636 5.636a9 9 0 1 0 3.555-2.188" />
        <Path d="M17 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-6 7a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-3 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconUniverse))
export { Memo as IconUniverse }
