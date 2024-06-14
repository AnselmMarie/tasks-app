/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconWindmill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 12c2.76 0 5-2.01 5-4.5S14.76 3 12 3zm0 0c0 2.76 2.01 5 4.5 5s4.5-2.24 4.5-5zm0 0c-2.76 0-5 2.01-5 4.5S9.24 21 12 21zm0 0c0-2.76-2.01-5-4.5-5S3 9.24 3 12z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconWindmill))
export { Memo as IconWindmill }
