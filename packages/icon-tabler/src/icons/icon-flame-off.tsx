/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFlameOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.973 8.974C8.638 9.352 8.303 9.69 8 10c-1.226 1.26-2 3.24-2 5a6 6 0 0 0 11.472 2.466m.383-3.597C17.535 12.46 16.733 10.824 16 10c-.281.472-.543.87-.79 1.202m-2.358-2.35C12.784 6.695 11.67 4.668 11 4c0 .968-.18 1.801-.465 2.527M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFlameOff))
export { Memo as IconFlameOff }
