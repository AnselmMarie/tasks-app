/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBoxSeam = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m12 3 8 4.5v9L12 21l-8-4.5v-9zm0 9 8-4.5M8.2 9.8l7.6-4.6M12 12v9m0-9L4 7.5"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBoxSeam))
export { Memo as IconBoxSeam }
