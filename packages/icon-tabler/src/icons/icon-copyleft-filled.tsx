/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCopyleftFilled = (_props: any) => {
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
          d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34m-2.117 5.889a4.016 4.016 0 0 0-5.543-.23 1 1 0 0 0 1.32 1.502 2.016 2.016 0 0 1 2.783.116 1.993 1.993 0 0 1 0 2.766 2.016 2.016 0 0 1-2.783.116A1 1 0 0 0 9.34 15a4.016 4.016 0 0 0 5.543-.23 3.993 3.993 0 0 0 0-5.542z"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconCopyleftFilled))
export { Memo as IconCopyleftFilled }
