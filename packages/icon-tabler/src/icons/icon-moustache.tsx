/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMoustache = (_props: any) => {
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
        <Path d="M15 9a3 3 0 0 1 2.599 1.5h0c.933 1.333 2.133 1.556 3.126 1.556h.291l.77-.044h.213c-.963 1.926-3.163 2.925-6.6 3h-.565a3 3 0 0 1 .165-6z" />
        <Path d="M9 9a3 3 0 0 0-2.599 1.5h0c-.933 1.333-2.133 1.556-3.126 1.556h-.291l-.77-.044h-.213c.963 1.926 3.163 2.925 6.6 3h.565a3 3 0 0 0-.165-6z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconMoustache))
export { Memo as IconMoustache }
