/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrightnessDownFilled = (_props: any) => {
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
          d="M12 8a4 4 0 1 1-3.995 4.2L8 12l.005-.2A4 4 0 0 1 12 8m0-4a1 1 0 0 1 .993.883L13 5.01a1 1 0 0 1-1.993.117L11 5a1 1 0 0 1 1-1m5 2a1 1 0 0 1 .993.883L18 7.01a1 1 0 0 1-1.993.117L16 7a1 1 0 0 1 1-1m2 5a1 1 0 0 1 .993.883l.007.127a1 1 0 0 1-1.993.117L18 12a1 1 0 0 1 1-1m-2 5a1 1 0 0 1 .993.883l.007.127a1 1 0 0 1-1.993.117L16 17a1 1 0 0 1 1-1m-5 2a1 1 0 0 1 .993.883l.007.127a1 1 0 0 1-1.993.117L11 19a1 1 0 0 1 1-1m-5-2a1 1 0 0 1 .993.883L8 17.01a1 1 0 0 1-1.993.117L6 17a1 1 0 0 1 1-1m-2-5a1 1 0 0 1 .993.883L6 12.01a1 1 0 0 1-1.993.117L4 12a1 1 0 0 1 1-1m2-5a1 1 0 0 1 .993.883L8 7.01a1 1 0 0 1-1.993.117L6 7a1 1 0 0 1 1-1"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrightnessDownFilled))
export { Memo as IconBrightnessDownFilled }
