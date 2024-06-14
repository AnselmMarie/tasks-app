/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPhotoSensor = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 5h2a2 2 0 0 1 2 2v2m0 6v2a2 2 0 0 1-2 2h-2M7 19H5a2 2 0 0 1-2-2v-2m0-6V7a2 2 0 0 1 2-2h2m0 5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPhotoSensor))
export { Memo as IconPhotoSensor }
