/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSunElectricity = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 12a4 4 0 0 0 4 4m0-8a4 4 0 0 0-4 4m-5 0h1m8-9v1m0 16v1M5.6 5.6l.7.7m0 11.4-.7.7M20 7l-3 5h4l-3 5"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSunElectricity))
export { Memo as IconSunElectricity }
