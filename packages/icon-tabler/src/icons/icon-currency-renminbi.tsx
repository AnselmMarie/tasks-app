/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCurrencyRenminbi = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 9v8a2 2 0 1 0 4 0m0-8H5m14-4H5m4 4v4c0 2.5-.667 4-2 6"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCurrencyRenminbi))
export { Memo as IconCurrencyRenminbi }
