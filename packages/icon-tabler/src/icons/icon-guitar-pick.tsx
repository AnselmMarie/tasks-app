/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGuitarPick = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 18.5C18 16 20 12 20 8c0-2.946-2.084-4.157-4.204-4.654C14.932 3.116 13.666 3 12 3c-1.667 0-2.932.115-3.796.346C6.084 3.843 4 5.054 4 8c0 3.312 2 8 4 10.5.297.37.618.731.963 1.081l.354.347a3.9 3.9 0 0 0 5.364 0A14.05 14.05 0 0 0 16 18.5"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGuitarPick))
export { Memo as IconGuitarPick }
