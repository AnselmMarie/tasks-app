/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconLayoutNavbarExpandFilled = (_props: any) => {
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
          d="M18 3a3 3 0 0 1 2.995 2.824L21 6v12a3 3 0 0 1-2.824 2.995L18 21H6a3 3 0 0 1-2.995-2.824L3 18V6a3 3 0 0 1 2.824-2.995L6 3zm1 6H5v9a1 1 0 0 0 .883.993L6 19h12a1 1 0 0 0 .993-.883L19 18zm-8.387 3.21.094.083L12 13.585l1.293-1.292a1 1 0 0 1 1.32-.083l.094.083a1 1 0 0 1 .083 1.32l-.083.094-2 2a1 1 0 0 1-1.32.083l-.094-.083-2-2a1 1 0 0 1 1.32-1.497"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconLayoutNavbarExpandFilled))
export { Memo as IconLayoutNavbarExpandFilled }
