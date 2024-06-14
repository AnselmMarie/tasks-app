/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconKeyframeFilled = (_props: any) => {
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
          d="M12 4a2.599 2.599 0 0 0-2 .957l-4.355 5.24a2.847 2.847 0 0 0-.007 3.598l4.368 5.256c.499.6 1.225.949 1.994.949a2.599 2.599 0 0 0 2-.957l4.355-5.24a2.847 2.847 0 0 0 .007-3.598l-4.368-5.256A2.593 2.593 0 0 0 12 4"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconKeyframeFilled))
export { Memo as IconKeyframeFilled }
