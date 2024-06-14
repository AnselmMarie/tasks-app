/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandStorj = (_props: any) => {
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
        <Path d="M3 17a1 1 0 1 0 2 0 1 1 0 1 0-2 0M3 7a1 1 0 1 0 2 0 1 1 0 1 0-2 0m16 10a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0-10a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-8-4a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 18a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
        <Path d="m12 21-8-4V7l8-4 8 4v10z" />
        <Path d="M9.1 15a2.1 2.1 0 0 1-.648-4.098C8.734 9.254 9.771 8 11.5 8c1.694 0 2.906 1.203 3.23 2.8h.17a2.1 2.1 0 0 1 .202 4.19L14.9 15zM4 7l4.323 2.702m8.09 5.056L20 17M4 17l3.529-2.206m7.08-4.424L20 7m-8-4v5m0 7v6" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandStorj))
export { Memo as IconBrandStorj }
