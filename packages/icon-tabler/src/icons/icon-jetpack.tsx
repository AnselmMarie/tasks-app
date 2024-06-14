/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconJetpack = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6a3 3 0 1 0-6 0v7h6zm4 7h6V6a3 3 0 0 0-6 0zm-9 3c0 2.333.667 4 2 5 1.333-1 2-2.667 2-5m6 0c0 2.333.667 4 2 5 1.333-1 2-2.667 2-5m-9-8h4m-4 3h4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconJetpack))
export { Memo as IconJetpack }
