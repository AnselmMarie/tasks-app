/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSend_2 = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.698 4.034 21 12 4.698 19.966a.503.503 0 0 1-.546-.124.555.555 0 0 1-.12-.568L6.5 12 4.032 4.726a.555.555 0 0 1 .12-.568.503.503 0 0 1 .546-.124M6.5 12H21"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSend_2))
export { Memo as IconSend_2 }
