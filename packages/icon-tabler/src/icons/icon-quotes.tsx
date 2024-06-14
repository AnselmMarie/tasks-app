/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconQuotes = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 12c-1.333-1.854-1.333-4.146 0-6m4 6c-1.333-1.854-1.333-4.146 0-6m8 12c1.333-1.854 1.333-4.146 0-6m4 6c1.333-1.854 1.333-4.146 0-6"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconQuotes))
export { Memo as IconQuotes }
