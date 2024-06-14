/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandTeams = (_props: any) => {
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
        <Path d="M3 7h10v10H3zm3 3h4m-2 0v4" />
        <Path d="M8.104 17c.47 2.274 2.483 4 4.896 4a5 5 0 0 0 5-5V9h-5m5 9a4 4 0 0 0 4-4V9h-4" />
        <Path d="M13.003 8.83a3 3 0 1 0-1.833-1.833" />
        <Path d="M15.83 8.36a2.5 2.5 0 1 0 .594-4.117" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandTeams))
export { Memo as IconBrandTeams }
