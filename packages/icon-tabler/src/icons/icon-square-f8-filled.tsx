/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSquareF8Filled = (_props: any) => {
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
          d="M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005.195v12.666c0 1.96-1.537 3.56-3.472 3.662l-.195.005H5.667a3.667 3.667 0 0 1-3.662-3.472L2 18.333V5.667c0-1.96 1.537-3.56 3.472-3.662L5.667 2zM15 8h-1l-.15.005a2 2 0 0 0-1.844 1.838L12 10v1l.005.15c.018.236.077.46.17.667l.075.152.018.03-.018.032c-.133.24-.218.509-.243.795L12 13v1l.005.15a2 2 0 0 0 1.838 1.844L14 16h1l.15-.005a2 2 0 0 0 1.844-1.838L17 14v-1l-.005-.15a1.988 1.988 0 0 0-.17-.667l-.075-.152-.019-.032.02-.03a2.01 2.01 0 0 0 .242-.795L17 11v-1l-.005-.15a2 2 0 0 0-1.838-1.844zm-5 0H8l-.117.007a1 1 0 0 0-.876.876L7 9v6l.007.117a1 1 0 0 0 .876.876L8 16l.117-.007a1 1 0 0 0 .876-.876L9 15v-2h1l.117-.007a1 1 0 0 0 0-1.986L10 11H9v-1h1l.117-.007a1 1 0 0 0 0-1.986zm5 5v1h-1v-1zm0-3v1h-1v-1z"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconSquareF8Filled))
export { Memo as IconSquareF8Filled }
