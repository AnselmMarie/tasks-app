/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCameraOff = (_props: any) => {
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
        <Path d="M8.297 4.289A.997.997 0 0 1 9 4h6a1 1 0 0 1 1 1 2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v8m-1.187 2.828c-.249.11-.524.172-.813.172H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1c.298 0 .58-.065.834-.181" />
        <Path d="M10.422 10.448a3 3 0 1 0 4.15 4.098M3 3l18 18" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconCameraOff))
export { Memo as IconCameraOff }
