/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconApiAppOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 15H5.5a2.5 2.5 0 1 1 0-5H6m9 5v3.5a2.5 2.5 0 1 1-5 0V18m3-9h5.5a2.5 2.5 0 1 1 0 5H18m-9-2V9m.042-3.957A2.5 2.5 0 0 1 14 5.5V6M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconApiAppOff))
export { Memo as IconApiAppOff }
