/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHorseshoe = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 17c.5-1.242 2-2 2-5s-1-9-9-9-9 6-9 9 1.495 3.749 2 5l-2 1 2 3 2.406-1.147c1.25-.714 1.778-2.08 1.203-3.363C7.531 14.083 7 8 12 8s4.469 6.083 3.39 8.49c-.574 1.284-.045 2.649 1.204 3.363L19 21l2-3z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconHorseshoe))
export { Memo as IconHorseshoe }
