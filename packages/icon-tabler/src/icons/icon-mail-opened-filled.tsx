/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMailOpenedFilled = (_props: any) => {
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
          d="m14.872 14.287 6.522 6.52a2.996 2.996 0 0 1-2.218 1.188L19 22H5a2.995 2.995 0 0 1-2.394-1.191l6.521-6.522 2.318 1.545.116.066a1 1 0 0 0 .878 0l.116-.066zM2 9.535l5.429 3.62L2 18.585zm20 0v9.05l-5.43-5.43zm-9.56-7.433.115.066 8.444 5.629-8.999 6-9-6 8.445-5.63a1 1 0 0 1 .994-.065z"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconMailOpenedFilled))
export { Memo as IconMailOpenedFilled }
