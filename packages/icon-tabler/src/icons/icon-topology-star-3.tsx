/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTopologyStar_3 = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 19a2 2 0 1 0-4 0 2 2 0 0 0 4 0m8-14a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-8 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-4 7a2 2 0 1 0-4 0 2 2 0 0 0 4 0m12 7a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-4-7a2 2 0 1 0-4 0 2 2 0 0 0 4 0m8 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0M6 12h4m4 0h4m-3-5-2 3M9 7l2 3m0 4-2 3m4-3 2 3"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTopologyStar_3))
export { Memo as IconTopologyStar_3 }
