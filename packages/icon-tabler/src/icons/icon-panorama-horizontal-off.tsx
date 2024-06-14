/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPanoramaHorizontalOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.95 6.952c2.901.15 5.803-.323 8.705-1.42A1 1 0 0 1 21 6.466V17m-3.212.806c-4.483-1.281-8.966-1.074-13.449.622A.993.993 0 0 1 3 17.493V6.466a1 1 0 0 1 1.338-.935c.588.221 1.176.418 1.764.59M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPanoramaHorizontalOff))
export { Memo as IconPanoramaHorizontalOff }
