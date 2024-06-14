/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAffiliateFilled = (_props: any) => {
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
          d="M18.5 3a2.5 2.5 0 1 1-.912 4.828l-4.556 4.555a5.475 5.475 0 0 1 .936 3.714l2.624.787a2.5 2.5 0 1 1-.575 1.916l-2.623-.788a5.5 5.5 0 0 1-10.39-2.29L3 15.5l.004-.221a5.5 5.5 0 0 1 2.984-4.673L5.2 7.982a2.498 2.498 0 0 1-2.194-2.304L3 5.5l.005-.164a2.5 2.5 0 1 1 4.111 2.071l.787 2.625a5.475 5.475 0 0 1 3.714.936l4.555-4.556a2.487 2.487 0 0 1-.167-.748L16 5.5l.005-.164A2.5 2.5 0 0 1 18.5 3"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconAffiliateFilled))
export { Memo as IconAffiliateFilled }
