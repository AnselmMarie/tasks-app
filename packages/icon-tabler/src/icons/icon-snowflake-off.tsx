/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSnowflakeOff = (_props: any) => {
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
        <Path d="m10 4 2 1 2-1m-2-2v6m1.196 1.186L15 10.22m2.928-3.952.134 2.232 1.866 1.232" />
        <Path d="m20.66 7-5.629 3.25L15 11m4.928 3.268-1.015.67m-4.701-.712-2.171 1.262M14 20l-2-1-2 1" />
        <Path d="M12 22v-6.5l-3-1.72m-2.928 3.952L5.938 15.5l-1.866-1.232" />
        <Path d="m3.34 17 5.629-3.25-.01-3.458m-4.887-.56L5.938 8.5l.134-2.232" />
        <Path d="m3.34 7 5.629 3.25.802-.466M3 3l18 18" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconSnowflakeOff))
export { Memo as IconSnowflakeOff }
