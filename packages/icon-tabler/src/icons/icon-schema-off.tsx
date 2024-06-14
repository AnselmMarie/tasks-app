/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSchemaOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 2h4v4M6 6H5V5m10 6v-1h5v4h-2M5 18h5v4H5zm0-8h5v4H5zm5 2h2M7.5 7.5V10m0 4v4M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSchemaOff))
export { Memo as IconSchemaOff }
