/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBookDownload = (_props: any) => {
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
        <Path d="M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12v5" />
        <Path d="M13 16H6a2 2 0 0 0-2 2m11 1 3 3 3-3m-3 3v-9" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBookDownload))
export { Memo as IconBookDownload }
