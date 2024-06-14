/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNetworkOff = (_props: any) => {
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
        <Path d="M6.528 6.536a6 6 0 0 0 7.942 7.933m2.247-1.76A6 6 0 0 0 8.29 4.284" />
        <Path d="M12 3c1.333.333 2 2.333 2 6 0 .337-.006.66-.017.968m-.55 3.473c-.333.884-.81 1.403-1.433 1.559m0-12c-.936.234-1.544 1.29-1.822 3.167m-.16 3.838C10.134 13.034 10.794 14.7 12 15M6 9h3m4 0h5M3 20h7m4 0h7m-11 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0m2-5v3M3 3l18 18" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconNetworkOff))
export { Memo as IconNetworkOff }
