/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPizza = (_props: any) => {
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
        <Path d="M12 21.5c-3.04 0-5.952-.714-8.5-1.983L12 3l8.5 16.517A19.09 19.09 0 0 1 12 21.5" />
        <Path d="M5.38 15.866a14.94 14.94 0 0 0 6.815 1.634 14.944 14.944 0 0 0 6.502-1.479M13 11.01V11m-2 3v-.01" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconPizza))
export { Memo as IconPizza }
