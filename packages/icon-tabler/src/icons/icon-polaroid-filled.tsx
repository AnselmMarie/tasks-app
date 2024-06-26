/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPolaroidFilled = (_props: any) => {
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
          d="m9.199 9.623.108.098 3.986 3.986.094.083a1 1 0 0 0 1.403-1.403l-.083-.094-.292-.293 1.292-1.293.106-.095c.457-.38.918-.38 1.386.011l.108.098 4.502 4.503a4.003 4.003 0 0 1-3.596 2.77L18 18H6a4.002 4.002 0 0 1-3.809-2.775l5.516-5.518.106-.095c.457-.38.918-.38 1.386.011M18 2a4 4 0 0 1 3.995 3.8L22 6v6.585l-3.293-3.292-.15-.137c-1.256-1.095-2.85-1.097-4.096-.017l-.154.14L13 10.585l-2.293-2.292-.15-.137c-1.256-1.095-2.85-1.097-4.096-.017l-.154.14L2 12.585V6a4 4 0 0 1 3.8-3.995L6 2zm-2.99 3-.127.007a1 1 0 0 0 0 1.986L15 7l.127-.007a1 1 0 0 0 0-1.986zm-7 15a1 1 0 0 1 .117 1.993L8 22a1 1 0 0 1-.117-1.993zm4 0a1 1 0 0 1 .117 1.993L12 22a1 1 0 0 1-.117-1.993zm4 0a1 1 0 0 1 .117 1.993L16 22a1 1 0 0 1-.117-1.993z"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconPolaroidFilled))
export { Memo as IconPolaroidFilled }
