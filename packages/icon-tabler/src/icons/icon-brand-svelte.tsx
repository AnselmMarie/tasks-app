/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandSvelte = (_props: any) => {
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
        <Path d="m15 8-5 3 .821-.495c1.86-1.15 4.412-.49 5.574 1.352a3.91 3.91 0 0 1-1.264 5.42l-5.053 3.126c-1.86 1.151-4.312.591-5.474-1.251a3.91 3.91 0 0 1 1.263-5.42l.26-.16" />
        <Path d="m8 17 5-3-.822.496c-1.86 1.151-4.411.491-5.574-1.351a3.91 3.91 0 0 1 1.264-5.42l5.054-3.127c1.86-1.15 4.311-.59 5.474 1.252a3.91 3.91 0 0 1-1.264 5.42l-.26.16" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandSvelte))
export { Memo as IconBrandSvelte }
