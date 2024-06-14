/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChessFilled = (_props: any) => {
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
          d="M12 2a4 4 0 0 1 4 4 5.03 5.03 0 0 1-.438 2.001L16 8a1 1 0 0 1 .117 1.993L16 10h-1.263l1.24 5.79a1 1 0 0 1-.747 1.184l-.113.02L15 17H9a1 1 0 0 1-.996-1.093l.018-.117L9.262 10H8a1 1 0 0 1-.117-1.993L8 8h.438a5.154 5.154 0 0 1-.412-1.525l-.02-.259L8 6a4 4 0 0 1 4-4m6 16H6a1 1 0 0 0-1 1 2 2 0 0 0 2 2h10a2 2 0 0 0 1.987-1.768l.011-.174A1 1 0 0 0 18 18"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconChessFilled))
export { Memo as IconChessFilled }
