/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPumpkinScary = (_props: any) => {
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
        <Path d="m9 15 1.5 1 1.5-1 1.5 1 1.5-1m-5-4h.01M14 11h.01" />
        <Path d="M17 6.082c2.609.588 3.627 4.162 2.723 7.983-.903 3.82-2.75 6.44-5.359 5.853a3.355 3.355 0 0 1-.774-.279A3.728 3.728 0 0 1 12 20c-.556 0-1.09-.127-1.59-.362a3.296 3.296 0 0 1-.774.28c-2.609.588-4.456-2.033-5.36-5.853-.903-3.82.115-7.395 2.724-7.983 1.085-.244 1.575.066 2.585.787C10.301 6.315 11.125 6 12 6c.876 0 1.699.315 2.415.87 1.01-.722 1.5-1.032 2.585-.788" />
        <Path d="M12 6c0-1.226.693-2.346 1.789-2.894L14 3" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconPumpkinScary))
export { Memo as IconPumpkinScary }
