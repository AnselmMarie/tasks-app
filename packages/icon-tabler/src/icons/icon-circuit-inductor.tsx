/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCircuitInductor = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 14h3v-2a2 2 0 1 1 4 0v2-1.5a2.5 2.5 0 1 1 5 0V14v-1.5a2.5 2.5 0 1 1 5 0V14h3"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCircuitInductor))
export { Memo as IconCircuitInductor }
