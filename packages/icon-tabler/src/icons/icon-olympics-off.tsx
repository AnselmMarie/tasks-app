/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconOlympicsOff = (_props: any) => {
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
        <Path d="M6 6a3 3 0 1 0 3 3m6 0a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
        <Path d="M9 9a3 3 0 0 0 3 3m2.566-1.445a3 3 0 0 0-4.135-4.113M6 15a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
        <Path d="M12.878 12.88a3 3 0 0 0 4.239 4.247m.586-3.431a3.012 3.012 0 0 0-1.43-1.414M3 3l18 18" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconOlympicsOff))
export { Memo as IconOlympicsOff }
