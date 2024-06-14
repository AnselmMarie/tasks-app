/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGhost_2Filled = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <G
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <Path d="M0 0h24v24H0z" />
        <Path
          fill="currentColor"
          d="m12 1.999.041.002.208.003a8 8 0 0 1 7.747 7.747l.003.248.177.006a3 3 0 0 1 2.819 2.819L23 13a3 3 0 0 1-3 3l-.001 1.696 1.833 2.75a1 1 0 0 1-.72 1.548L21 22H11c-3.445.002-6.327-2.49-6.901-5.824l-.028-.178-.071.001a3 3 0 0 1-2.995-2.824L1 13a3 3 0 0 1 3-3l.004-.25A8 8 0 0 1 12 2zM12 12a2 2 0 0 0-2 2 1 1 0 0 0 1 1h2a1 1 0 0 0 1-1 2 2 0 0 0-2-2m-1.99-4-.127.007A1 1 0 0 0 10 10l.127-.007A1 1 0 0 0 10.01 8m4 0-.127.007A1 1 0 0 0 14 10l.127-.007A1 1 0 0 0 14.01 8"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconGhost_2Filled))
export { Memo as IconGhost_2Filled }
