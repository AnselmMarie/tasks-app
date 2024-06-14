/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSunHigh = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.828 14.828a4 4 0 1 0-5.656-5.656 4 4 0 0 0 5.656 5.656m-8.485 2.829-1.414 1.414M6.343 6.343 4.929 4.929m12.728 1.414 1.414-1.414m-1.414 12.728 1.414 1.414M4 12H2m10-8V2m8 10h2m-10 8v2"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSunHigh))
export { Memo as IconSunHigh }
