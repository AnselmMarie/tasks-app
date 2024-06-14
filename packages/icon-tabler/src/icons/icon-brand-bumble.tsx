/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandBumble = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 12h10M9 8h6m-5 8h4m2.268-13H7.732a1.46 1.46 0 0 0-1.268.748l-4.268 7.509a1.507 1.507 0 0 0 0 1.486l4.268 7.509c.26.462.744.747 1.268.748h8.536a1.46 1.46 0 0 0 1.268-.748l4.268-7.509a1.507 1.507 0 0 0 0-1.486l-4.268-7.509A1.46 1.46 0 0 0 16.268 3"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBrandBumble))
export { Memo as IconBrandBumble }
