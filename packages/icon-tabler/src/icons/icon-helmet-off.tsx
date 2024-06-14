/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHelmetOff = (_props: any) => {
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
        <Path d="M8.633 4.654a9 9 0 0 1 11.718 11.7m-1.503 2.486A9.008 9.008 0 0 1 17.656 20H6.344a9 9 0 0 1-.185-13.847" />
        <Path d="M20 9h-7m-2.768 1.246c.507 2 1.596 3.418 3.268 4.254.524.262 1.07.49 1.64.683M3 3l18 18" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconHelmetOff))
export { Memo as IconHelmetOff }
