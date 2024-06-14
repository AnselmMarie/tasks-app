/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPlantOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 17v2a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-4h8m-3.1-7.092a6 6 0 0 0-4.79-4.806M3 3v2a6 6 0 0 0 6 6h2m1.531-2.472A6 6 0 0 1 18 5h3v1a6 6 0 0 1-5.037 5.923M12 15v-3M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPlantOff))
export { Memo as IconPlantOff }
