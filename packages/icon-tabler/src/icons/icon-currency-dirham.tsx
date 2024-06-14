/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCurrencyDirham = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.5 19H5m3.599-2.521A1.5 1.5 0 1 0 7.5 19M7 4v9m8 0h1.888a1.5 1.5 0 0 0 1.296-2.256L16 7m-5 6.01V13"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCurrencyDirham))
export { Memo as IconCurrencyDirham }
