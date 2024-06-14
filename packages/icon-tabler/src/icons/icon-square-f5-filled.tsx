/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSquareF5Filled = (_props: any) => {
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
          d="M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005.195v12.666c0 1.96-1.537 3.56-3.472 3.662l-.195.005H5.667a3.667 3.667 0 0 1-3.662-3.472L2 18.333V5.667c0-1.96 1.537-3.56 3.472-3.662L5.667 2zM16 8h-3l-.117.007a1 1 0 0 0-.857.764l-.02.112L12 9v3l.007.117a1 1 0 0 0 .764.857l.112.02L13 13h2v1h-1.033l-.025-.087-.049-.113a1 1 0 0 0-1.893.45c0 .867.63 1.587 1.458 1.726l.148.018.144.006H15l.157-.006a2 2 0 0 0 1.819-1.683l.019-.162L17 14v-1l-.006-.157a2 2 0 0 0-1.683-1.819l-.162-.019L15 11h-1v-1h2l.117-.007a1 1 0 0 0 .857-.764l.02-.112L17 9l-.007-.117a1 1 0 0 0-.764-.857l-.112-.02zm-6 0H8l-.117.007a1 1 0 0 0-.876.876L7 9v6l.007.117a1 1 0 0 0 .876.876L8 16l.117-.007a1 1 0 0 0 .876-.876L9 15v-2h1l.117-.007a1 1 0 0 0 0-1.986L10 11H9v-1h1l.117-.007a1 1 0 0 0 0-1.986z"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconSquareF5Filled))
export { Memo as IconSquareF5Filled }
