/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChessKnight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m8 16-1.447.724a1 1 0 0 0-.553.894V20h12v-2.382a1 1 0 0 0-.553-.894L16 16zM9 3l1 3-3.491 2.148A1 1 0 0 0 7.033 10H10l-2.073 6h7.961L16 11c0-3-1.09-5.983-4-7-1.94-.678-2.94-1.011-3-1"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconChessKnight))
export { Memo as IconChessKnight }
