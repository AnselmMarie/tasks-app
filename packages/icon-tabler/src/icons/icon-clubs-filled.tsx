/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconClubsFilled = (_props: any) => {
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
          d="M12 2a5 5 0 0 0-4.488 2.797l-.103.225a4.998 4.998 0 0 0-.334 2.837l.027.14a5 5 0 0 0-3.091 9.009l.198.14a4.998 4.998 0 0 0 4.42.58l.174-.066-.773 3.095A1 1 0 0 0 9 22h6l.113-.006a1 1 0 0 0 .857-1.237l-.774-3.095.174.065A5 5 0 1 0 16.897 8l.028-.14A4.997 4.997 0 0 0 12 2"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconClubsFilled))
export { Memo as IconClubsFilled }
