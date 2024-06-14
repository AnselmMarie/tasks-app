/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBoxAlignTopLeftFilled = (_props: any) => {
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
          d="M10 3H5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m5 0a1 1 0 0 1 .117 1.993L14.99 5a1 1 0 0 1-.117-1.993zm5 0a1 1 0 0 1 .117 1.993L19.99 5a1 1 0 0 1-.117-1.993zm0 5a1 1 0 0 1 .117 1.993L19.99 10a1 1 0 0 1-.117-1.993zm0 6a1 1 0 0 1 .117 1.993L19.99 16a1 1 0 0 1-.117-1.993zM4 14a1 1 0 0 1 .117 1.993L3.99 16a1 1 0 0 1-.117-1.993zm16 5a1 1 0 0 1 .117 1.993L19.99 21a1 1 0 0 1-.117-1.993zm-5 0a1 1 0 0 1 .117 1.993L14.99 21a1 1 0 0 1-.117-1.993zm-6 0a1 1 0 0 1 .117 1.993L8.99 21a1 1 0 0 1-.117-1.993zm-5 0a1 1 0 0 1 .117 1.993L3.99 21a1 1 0 0 1-.117-1.993z"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBoxAlignTopLeftFilled))
export { Memo as IconBoxAlignTopLeftFilled }
