/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconWorldCancel = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <G
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <Path d="M21 12a9 9 0 1 0-8.985 9M3.6 9h16.8M3.6 15h9.9" />
        <Path d="M11.5 3a17 17 0 0 0 0 18m1-18a16.991 16.991 0 0 1 2.53 10.275M16 19a3 3 0 1 0 6 0 3 3 0 1 0-6 0m1 2 4-4" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconWorldCancel))
export { Memo as IconWorldCancel }
