/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRuler_2Off = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12.03 7.97 17 3l4 4-5 5m-2 2-7 7-4-4 7-7m6-3-1.5-1.5M10 13l-1.5-1.5M7 16l-1.5-1.5M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconRuler_2Off))
export { Memo as IconRuler_2Off }
