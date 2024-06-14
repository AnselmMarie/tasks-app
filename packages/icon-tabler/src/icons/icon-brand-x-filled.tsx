/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandXFilled = (_props: any) => {
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
          d="M8.267 3a1 1 0 0 1 .73.317l.076.092 4.274 5.828 5.946-5.944a1 1 0 0 1 1.497 1.32l-.083.094-6.163 6.162 6.262 8.54a1 1 0 0 1-.697 1.585L20 21h-4.267a1 1 0 0 1-.73-.317l-.076-.092-4.276-5.829-5.944 5.945a1 1 0 0 1-1.497-1.32l.083-.094 6.161-6.163-6.26-8.539a1 1 0 0 1 .697-1.585L4 3z"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandXFilled))
export { Memo as IconBrandXFilled }
