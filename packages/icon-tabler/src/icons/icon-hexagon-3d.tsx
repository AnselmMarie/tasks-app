/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHexagon_3d = (_props: any) => {
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
        <Path d="M19 6.844a2.007 2.007 0 0 1 1 1.752v6.555c0 .728-.394 1.399-1.03 1.753l-6 3.844a2 2 0 0 1-1.942 0l-6-3.844a2.007 2.007 0 0 1-1.029-1.752V8.596c0-.729.394-1.4 1.029-1.753l6-3.583a2.05 2.05 0 0 1 2 0l6 3.584h-.03zM12 16.5V21M4.5 7.5 8 10m8 0 4-2.5" />
        <Path d="M12 7.5V12l-4 2m4-2 4 2" />
        <Path d="m12 16.5 4-2.5v-4l-4-2.5L8 10v4z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconHexagon_3d))
export { Memo as IconHexagon_3d }
