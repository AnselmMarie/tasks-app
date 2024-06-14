/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBattery_4Filled = (_props: any) => {
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
          d="M17 6a3 3 0 0 1 2.995 2.824L20 9v.086l.052.019a1.5 1.5 0 0 1 .941 1.25L21 10.5v3a1.5 1.5 0 0 1-.948 1.395l-.052.018V15a3 3 0 0 1-2.824 2.995L17 18H6a3 3 0 0 1-2.995-2.824L3 15V9a3 3 0 0 1 2.824-2.995L6 6zM7 9a1 1 0 0 0-1 1v4l.007.117A1 1 0 0 0 8 14v-4l-.007-.117A1 1 0 0 0 7 9m3 0a1 1 0 0 0-1 1v4l.007.117A1 1 0 0 0 11 14v-4l-.007-.117A1 1 0 0 0 10 9m3 0a1 1 0 0 0-1 1v4l.007.117A1 1 0 0 0 14 14v-4l-.007-.117A1 1 0 0 0 13 9m3 0a1 1 0 0 0-1 1v4l.007.117A1 1 0 0 0 17 14v-4l-.007-.117A1 1 0 0 0 16 9"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBattery_4Filled))
export { Memo as IconBattery_4Filled }
