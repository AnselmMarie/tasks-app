/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconApertureOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3.6 15h10.55M5.641 5.631A9 9 0 1 0 18.36 18.369m1.68-2.318A9 9 0 0 0 7.966 3.953m-.571 3.581 2.416 7.438m7.221-10.336L12.18 8.162M9.846 9.857l-1.349.98m12.062 3.673-8.535-6.201m.233 12.607 2.123-6.533m.984-3.028.154-.473M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconApertureOff))
export { Memo as IconApertureOff }
