/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDatabaseOff = (_props: any) => {
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
        <Path d="M12.983 8.978C16.938 8.796 20 7.532 20 6c0-1.657-3.582-3-8-3-1.661 0-3.204.19-4.483.515M4.734 4.743C4.263 5.125 4 5.551 4 6c0 1.22 1.944 2.271 4.734 2.74" />
        <Path d="M4 6v6c0 1.657 3.582 3 8 3 .986 0 1.93-.067 2.802-.19m3.187-.82C19.24 13.46 20 12.762 20 12V6" />
        <Path d="M4 12v6c0 1.657 3.582 3 8 3 3.217 0 5.991-.712 7.261-1.74M20 16v-4M3 3l18 18" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconDatabaseOff))
export { Memo as IconDatabaseOff }
