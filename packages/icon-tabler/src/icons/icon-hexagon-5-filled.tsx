/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHexagon_5Filled = (_props: any) => {
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
          d="M10.425 1.414a3.33 3.33 0 0 1 3.216 0l6.775 3.995c.067.04.127.084.18.133l.008.007.107.076a3.223 3.223 0 0 1 1.284 2.39l.005.203v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.226 3.226 0 0 1 2 15.502V8.217a3.21 3.21 0 0 1 1.65-2.808zM14 7h-4a1 1 0 0 0-.993.883L9 8v4a1 1 0 0 0 .883.993L10 13h3v2h-2l-.007-.117A1 1 0 0 0 9 15a2 2 0 0 0 1.85 1.995L11 17h2a2 2 0 0 0 1.995-1.85L15 15v-2a2 2 0 0 0-1.85-1.995L13 11h-2V9h3a1 1 0 0 0 .993-.883L15 8a1 1 0 0 0-.883-.993z"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconHexagon_5Filled))
export { Memo as IconHexagon_5Filled }
