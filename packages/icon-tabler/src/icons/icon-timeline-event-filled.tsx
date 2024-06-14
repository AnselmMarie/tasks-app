/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTimelineEventFilled = (_props: any) => {
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
          d="M12 17c1.306 0 2.418.835 2.83 2H20a1 1 0 0 1 0 2h-5.171a3.001 3.001 0 0 1-5.658 0H4a1 1 0 0 1 0-2h5.17A3.001 3.001 0 0 1 12 17m5-15a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.586l-1.707 1.707a1 1 0 0 1-1.32.083l-.094-.083L9.585 14H7a2 2 0 0 1-1.995-1.85L5 12V4a2 2 0 0 1 2-2z"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconTimelineEventFilled))
export { Memo as IconTimelineEventFilled }
