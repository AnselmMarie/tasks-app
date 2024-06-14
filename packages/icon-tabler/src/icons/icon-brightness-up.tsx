/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrightnessUp = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0m3-7V3m5 4 1.4-1.4M19 12h2m-4 5 1.4 1.4M12 19v2m-5-4-1.4 1.4M6 12H4m3-5L5.6 5.6"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBrightnessUp))
export { Memo as IconBrightnessUp }
