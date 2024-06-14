/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBriefcaseOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <G
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <Path d="M11 7h8a2 2 0 0 1 2 2v8m-1.166 2.818A1.993 1.993 0 0 1 19 20H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2m1.185-2.842A2 2 0 0 1 10 3h4a2 2 0 0 1 2 2v2m-4 5v.01" />
        <Path d="M3 13a20 20 0 0 0 11.905 1.928m3.263-.763A20 20 0 0 0 21 13M3 3l18 18" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBriefcaseOff))
export { Memo as IconBriefcaseOff }
