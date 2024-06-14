/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandCoinbase = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12.95 22c-4.503 0-8.445-3.04-9.61-7.413-1.165-4.373.737-8.988 4.638-11.25a9.906 9.906 0 0 1 12.008 1.598l-3.335 3.367a5.185 5.185 0 0 0-7.354.013 5.252 5.252 0 0 0 0 7.393 5.185 5.185 0 0 0 7.354.013L20 19.088A9.887 9.887 0 0 1 12.95 22"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBrandCoinbase))
export { Memo as IconBrandCoinbase }
