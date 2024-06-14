/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPanoramaVerticalOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 3h10.53c.693 0 1.18.691.935 1.338-1.098 2.898-1.573 5.795-1.425 8.692m.828 4.847c.172.592.37 1.185.595 1.778A1 1 0 0 1 17.529 21h-11c-.692 0-1.208-.692-.962-1.34 1.697-4.486 1.903-8.973.619-13.46M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPanoramaVerticalOff))
export { Memo as IconPanoramaVerticalOff }
