/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBowlFilled = (_props: any) => {
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
          d="M20 7H4a2 2 0 0 0-2 2v.5l.007.18c.134 1.806 2.169 5.275 3.928 6.771l.065.053V17a2 2 0 0 0 2 2h8l.15-.005A2 2 0 0 0 18 17v-.504l.017-.013C19.753 14.989 22 11.194 22 9.5V9a2 2 0 0 0-2-2"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBowlFilled))
export { Memo as IconBowlFilled }
