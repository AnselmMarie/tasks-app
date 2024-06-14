/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAdjustmentsQuestion = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0m2-6v4m0 4v8m7.577-5.23a2 2 0 1 0 .117 2.295M12 4v10m7 8v.01M19 19a2.003 2.003 0 0 0 .914-3.782 1.98 1.98 0 0 0-2.414.483M12 18v2m4-13a2 2 0 1 0 4 0 2 2 0 0 0-4 0m2-3v1m0 4v2"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconAdjustmentsQuestion))
export { Memo as IconAdjustmentsQuestion }
