/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMicrophone_2Off = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16.908 12.917a5 5 0 1 0-5.827-5.819m-.965 3.027-6.529 7.46a2 2 0 1 0 2.827 2.83l7.461-6.529M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconMicrophone_2Off))
export { Memo as IconMicrophone_2Off }
