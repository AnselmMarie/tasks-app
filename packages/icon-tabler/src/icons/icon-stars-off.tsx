/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconStarsOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m17.373 13.371.076-.154a.392.392 0 0 1 .702 0l.907 1.831m.367.39c.498.071 1.245.18 2.24.324a.39.39 0 0 1 .217.665c-.326.316-.57.553-.732.712m-.611 3.405a.39.39 0 0 1-.567.411L17.8 19.817l-2.172 1.138a.392.392 0 0 1-.568-.41l.415-2.411-1.757-1.707a.389.389 0 0 1 .217-.665l1.601-.232M6.2 19.817l-2.172 1.138a.392.392 0 0 1-.568-.41l.415-2.411-1.757-1.707a.389.389 0 0 1 .217-.665l2.428-.352 1.086-2.193a.392.392 0 0 1 .702 0l1.086 2.193 2.428.352a.39.39 0 0 1 .217.665l-1.757 1.707.414 2.41a.39.39 0 0 1-.567.411zM9.557 5.556l1-.146 1.086-2.193a.392.392 0 0 1 .702 0l1.086 2.193 2.428.352a.39.39 0 0 1 .217.665l-1.757 1.707.414 2.41a.39.39 0 0 1-.014.187m-4.153-.166-.744.39a.392.392 0 0 1-.568-.41l.188-1.093M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconStarsOff))
export { Memo as IconStarsOff }
