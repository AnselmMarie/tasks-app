/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSquareRoundedPlus_2 = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12.54 20.996C12.364 21 12.184 21 12 21c-7.2 0-9-1.8-9-9s1.8-9 9-9 9 1.8 9 9c0 .185-.001.366-.004.544M16 19h6m-3-3v6"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSquareRoundedPlus_2))
export { Memo as IconSquareRoundedPlus_2 }
