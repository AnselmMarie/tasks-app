/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBallpenFilled = (_props: any) => {
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
          d="M17.828 2a3 3 0 0 1 1.977.743l.145.136 1.171 1.17a3 3 0 0 1 .136 4.1l-.136.144L19.415 10l2.292 2.293a1 1 0 0 1 .083 1.32l-.083.094-4 4a1 1 0 0 1-1.497-1.32l.083-.094L19.585 13l-1.586-1.585-7.464 7.464a3.828 3.828 0 0 1-2.474 1.114l-.233.008c-.674 0-1.33-.178-1.905-.508l-1.216 1.214a1 1 0 0 1-1.497-1.32l.083-.094 1.214-1.216a3.828 3.828 0 0 1 .454-4.442l.16-.17L15.707 2.879a3 3 0 0 1 1.923-.873zm0 2a1 1 0 0 0-.608.206l-.099.087L15.414 6 18 8.585l1.707-1.706a1 1 0 0 0 .284-.576l.01-.131a1 1 0 0 0-.207-.609l-.087-.099-1.171-1.171A1 1 0 0 0 17.828 4"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBallpenFilled))
export { Memo as IconBallpenFilled }
