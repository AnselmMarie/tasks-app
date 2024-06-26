/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHexagonFilled = (_props: any) => {
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
          d="M10.425 1.414 3.65 5.41A3.21 3.21 0 0 0 2 8.217v7.285a3.226 3.226 0 0 0 1.678 2.826l6.695 4.237c1.034.57 2.22.57 3.2.032l6.804-4.302c.98-.537 1.623-1.618 1.623-2.793V8.218l-.005-.204a3.223 3.223 0 0 0-1.284-2.39l-.107-.075-.007-.007a1.074 1.074 0 0 0-.181-.133L13.64 1.414a3.33 3.33 0 0 0-3.216 0z"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconHexagonFilled))
export { Memo as IconHexagonFilled }
