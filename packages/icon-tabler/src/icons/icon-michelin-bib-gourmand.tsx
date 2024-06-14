/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMichelinBibGourmand = (_props: any) => {
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
        <Path d="M4.97 20c-2.395-1.947-4.763-5.245-1.005-8-.52-4 3.442-7.5 5.524-7.5.347-1 1.499-1.5 2.54-1.5 1.04 0 2.135.5 2.482 1.5 2.082 0 6.044 3.5 5.524 7.5 3.758 2.755 1.39 6.053-1.005 8" />
        <Path d="M8 11a1 2 0 1 0 2 0 1 2 0 1 0-2 0m6 0a1 2 0 1 0 2 0 1 2 0 1 0-2 0m-6 6.085c3.5 2.712 6.5 2.712 9-1.085" />
        <Path d="M13 18.5c.815-2.337 1.881-1.472 2-.55" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconMichelinBibGourmand))
export { Memo as IconMichelinBibGourmand }
