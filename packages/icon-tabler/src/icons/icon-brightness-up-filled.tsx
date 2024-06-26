/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrightnessUpFilled = (_props: any) => {
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
          d="M12 8a4 4 0 1 1-3.995 4.2L8 12l.005-.2A4 4 0 0 1 12 8m0-6a1 1 0 0 1 .993.883L13 3v2a1 1 0 0 1-1.993.117L11 5V3a1 1 0 0 1 1-1m5.693 2.893a1 1 0 0 1 1.497 1.32l-.083.094-1.4 1.4a1 1 0 0 1-1.497-1.32l.083-.094zM21 11a1 1 0 0 1 .117 1.993L21 13h-2a1 1 0 0 1-.117-1.993L19 11zm-4.707 5.293a1 1 0 0 1 1.32-.083l.094.083 1.4 1.4a1 1 0 0 1-1.32 1.497l-.094-.083-1.4-1.4a1 1 0 0 1 0-1.414M12 18a1 1 0 0 1 .993.883L13 19v2a1 1 0 0 1-1.993.117L11 21v-2a1 1 0 0 1 1-1m-5.707-1.707a1 1 0 0 1 1.497 1.32l-.083.094-1.4 1.4a1 1 0 0 1-1.497-1.32l.083-.094zM6 11a1 1 0 0 1 .117 1.993L6 13H4a1 1 0 0 1-.117-1.993L4 11zM4.893 4.893a1 1 0 0 1 1.32-.083l.094.083 1.4 1.4a1 1 0 0 1-1.32 1.497l-.094-.083-1.4-1.4a1 1 0 0 1 0-1.414"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrightnessUpFilled))
export { Memo as IconBrightnessUpFilled }
