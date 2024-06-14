/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBeerFilled = (_props: any) => {
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
          d="M17 2a2 2 0 0 1 1.995 1.85L19 4v4c0 1.335-.229 2.386-.774 3.692l-.157.363-.31.701a8.902 8.902 0 0 0-.751 3.242l-.008.377V20a2 2 0 0 1-1.85 1.995L15 22H9a2 2 0 0 1-1.995-1.85L7 20v-3.625c0-1.132-.21-2.25-.617-3.28l-.142-.34-.31-.699c-.604-1.358-.883-2.41-.925-3.698L5 8V4a2 2 0 0 1 1.85-1.995L7 2zm0 2H7v3h10z"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBeerFilled))
export { Memo as IconBeerFilled }
