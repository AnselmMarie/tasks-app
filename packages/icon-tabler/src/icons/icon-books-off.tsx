/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBooksOff = (_props: any) => {
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
        <Path d="M9 9v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5m3-1a1 1 0 0 1 1 1m0 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4m0 4v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V9M5 8h3m1 8h4" />
        <Path d="M14.254 10.244 13.036 5.82a1.02 1.02 0 0 1 .634-1.219l.133-.041 2.184-.53c.562-.135 1.133.19 1.282.732l3.236 11.75m-.92 3.077-1.572.38c-.562.136-1.133-.19-1.282-.731l-.952-3.458M14 9l4-1m1.207 7.199.716-.18M3 3l18 18" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBooksOff))
export { Memo as IconBooksOff }
