/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandPlanetscale = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.993 11.63a9 9 0 0 1-9.362 9.362zM12 3a9.001 9.001 0 0 1 8.166 5.211L8.211 20.166A9 9 0 0 1 12 3m0 9-6 6"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBrandPlanetscale))
export { Memo as IconBrandPlanetscale }
