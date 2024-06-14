/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconLocationBolt = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.05 20.1 10 14l-7-3.5a.55.55 0 0 1 0-1L21 3l-3.312 9.173M19 16l-2 3h4l-2 3"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconLocationBolt))
export { Memo as IconLocationBolt }
