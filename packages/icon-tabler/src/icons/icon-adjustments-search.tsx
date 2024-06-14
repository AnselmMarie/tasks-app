/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAdjustmentsSearch = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0m2-6v4m0 4v8m6-6a2 2 0 0 0-1.042 3.707M12 4v10m4-7a2 2 0 1 0 4 0 2 2 0 0 0-4 0m2-3v1m0 4v2m-3 7a3 3 0 1 0 6 0 3 3 0 1 0-6 0m5.2 2.2L22 22"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconAdjustmentsSearch))
export { Memo as IconAdjustmentsSearch }
