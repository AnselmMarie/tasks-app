/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChartGridDotsFilled = (_props: any) => {
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
          d="M18 2a1 1 0 0 1 1 1v.171a3.008 3.008 0 0 1 1.83 1.83L21 5a1 1 0 0 1 0 2h-.171a3.008 3.008 0 0 1-1.828 1.829L19 11h2a1 1 0 0 1 0 2h-2v2.171a3.008 3.008 0 0 1 1.83 1.83L21 17a1 1 0 0 1 0 2h-.171a3.008 3.008 0 0 1-1.828 1.829L19 21a1 1 0 0 1-2 0v-.17A3.008 3.008 0 0 1 15.171 19H13v2a1 1 0 0 1-2 0v-2H8.829a3.008 3.008 0 0 1-1.828 1.829L7 21a1 1 0 0 1-2 0v-.17A3.008 3.008 0 0 1 3.171 19H3a1 1 0 0 1 0-2h.17A3.008 3.008 0 0 1 5 15.17v-.34A3.008 3.008 0 0 1 3.171 13H3a1 1 0 0 1 0-2h.17A3.008 3.008 0 0 1 5 9.17V7H3a1 1 0 1 1 0-2h2V3a1 1 0 1 1 2 0v2h4V3a1 1 0 0 1 2 0v2h2.17A3.008 3.008 0 0 1 17 3.17V3a1 1 0 0 1 1-1m-7 11H8.829a3.008 3.008 0 0 1-1.828 1.829v.342A3.008 3.008 0 0 1 8.829 17H11zm6 0h-4v4h2.17A3.008 3.008 0 0 1 17 15.17zm-6-6H7v2.171a3.008 3.008 0 0 1 1.83 1.83L11 11zm4.171 0H13v4h4V8.83A3.008 3.008 0 0 1 15.171 7"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconChartGridDotsFilled))
export { Memo as IconChartGridDotsFilled }
