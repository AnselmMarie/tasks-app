/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandSharik = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.281 16.606A8.968 8.968 0 0 1 5.644 5.629a9.033 9.033 0 0 1 11.011-1.346C15.071 8.975 14.24 11.243 12 13c-1.584 1.242-3.836 2.24-7.719 3.606M20.616 9.3c2.113 7.59-4.892 13.361-11.302 11.264 1.931-3.1 3.235-4.606 4.686-6.065 1.705-1.715 3.591-3.23 6.616-5.199"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBrandSharik))
export { Memo as IconBrandSharik }
