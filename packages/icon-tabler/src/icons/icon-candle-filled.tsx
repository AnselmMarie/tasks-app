/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCandleFilled = (_props: any) => {
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
          d="M14 10h-4a2 2 0 0 0-2 2v9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-9a2 2 0 0 0-2-2m-2.746-7.666-1.55 1.737C8.662 5.348 8.806 7.168 10 8.237a3 3 0 0 0 4.196-4.28l-1.452-1.624a1 1 0 0 0-1.491.001z"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconCandleFilled))
export { Memo as IconCandleFilled }
