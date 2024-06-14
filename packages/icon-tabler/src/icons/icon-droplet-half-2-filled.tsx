/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDropletHalf_2Filled = (_props: any) => {
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
          d="m13.905 2.923.098.135 4.92 7.306a7.566 7.566 0 0 1 1.043 3.167l.024.326c.007.047.01.094.01.143l-.002.06c.056 2.3-.944 4.582-2.87 6.14-2.969 2.402-7.286 2.402-10.255 0-1.904-1.54-2.904-3.787-2.865-6.071a1.052 1.052 0 0 1 .013-.333 7.66 7.66 0 0 1 .913-3.176l.172-.302 4.893-7.26c.185-.275.426-.509.709-.686 1.055-.66 2.446-.413 3.197.55zm-2.06 1.107-.077.038-.041.03-.037.036-.033.042-4.863 7.214A5.607 5.607 0 0 0 6.143 13h11.723a5.444 5.444 0 0 0-.49-1.313l-.141-.251-4.891-7.261a.428.428 0 0 0-.5-.145z"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconDropletHalf_2Filled))
export { Memo as IconDropletHalf_2Filled }
