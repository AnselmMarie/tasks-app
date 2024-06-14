/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFoldersOff = (_props: any) => {
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
        <Path d="M17 17H9a2 2 0 0 1-2-2V7m1.177-2.823C8.428 4.063 8.707 4 9 4h3l2 2h5a2 2 0 0 1 2 2v7c0 .55-.223 1.05-.583 1.411" />
        <Path d="M17 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2M3 3l18 18" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconFoldersOff))
export { Memo as IconFoldersOff }
