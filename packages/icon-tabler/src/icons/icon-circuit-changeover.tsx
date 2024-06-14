/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCircuitChangeover = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 12h2m16-5h2M4 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0m12-5a2 2 0 1 0 4 0 2 2 0 1 0-4 0m4 10h2m-6 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-8.5-6.5L16 7"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCircuitChangeover))
export { Memo as IconCircuitChangeover }