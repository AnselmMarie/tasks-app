/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPentagonOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m8.133 4.133 2.704-1.965a1.978 1.978 0 0 1 2.326 0l8.021 5.828c.694.504.984 1.397.719 2.212l-1.887 5.808m-.981 3.02-.196.602a1.978 1.978 0 0 1-1.881 1.367H7.042a1.978 1.978 0 0 1-1.881-1.367l-3.064-9.43a1.978 1.978 0 0 1 .719-2.212L5.81 5.82M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPentagonOff))
export { Memo as IconPentagonOff }
