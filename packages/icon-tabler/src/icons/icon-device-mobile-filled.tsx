/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDeviceMobileFilled = (_props: any) => {
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
          d="M16 2a3 3 0 0 1 2.995 2.824L19 5v14a3 3 0 0 1-2.824 2.995L16 22H8a3 3 0 0 1-2.995-2.824L5 19V5a3 3 0 0 1 2.824-2.995L8 2zm-4 14a1 1 0 0 0-.993.883L11 17l.007.127a1 1 0 0 0 1.986 0L13 17.01l-.007-.127A1 1 0 0 0 12 16m1-12h-2l-.117.007a1 1 0 0 0 0 1.986L11 6h2l.117-.007a1 1 0 0 0 0-1.986z"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconDeviceMobileFilled))
export { Memo as IconDeviceMobileFilled }
