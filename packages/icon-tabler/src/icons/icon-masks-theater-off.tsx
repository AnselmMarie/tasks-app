/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMasksTheaterOff = (_props: any) => {
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
        <Path d="M13 9h6.808a2 2 0 0 1 1.992 2.183l-.554 6.041m-1.286 2.718A3.99 3.99 0 0 1 17.25 21h-1.5a4 4 0 0 1-3.983-3.635l-.567-6.182M18 13h.01" />
        <Path d="M15 16.5c.657.438 1.313.588 1.97.451m-8.338-.969A4.05 4.05 0 0 1 8.25 16h-1.5a4 4 0 0 1-3.983-3.635L2.2 6.183a2 2 0 0 1 .514-1.531A1.99 1.99 0 0 1 4 4m4 0h2.808a2 2 0 0 1 2 2M6 8h.01" />
        <Path d="M6 12c.764-.51 1.528-.63 2.291-.36M3 3l18 18" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconMasksTheaterOff))
export { Memo as IconMasksTheaterOff }
