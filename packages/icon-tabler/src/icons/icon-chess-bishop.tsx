/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChessBishop = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m8 16-1.447.724a1 1 0 0 0-.553.894V20h12v-2.382a1 1 0 0 0-.553-.894L16 16zm3-12a1 1 0 1 0 2 0 1 1 0 1 0-2 0M9.5 16C7.833 16 7 14.331 7 13c0-3.667 1.667-6 5-7 3.333 1 5 3.427 5 7 0 1.284-.775 2.881-2.325 3H14.5zM15 8l-3 3m0-6v1"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconChessBishop))
export { Memo as IconChessBishop }
