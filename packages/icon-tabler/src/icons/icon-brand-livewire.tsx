/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Defs, Path, G, Use } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandLivewire = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Defs>
        <Path
          id="prefix__a"
          d="M20.982 18.777C20.61 19.325 20.33 20 19.576 20c-1.269 0-1.337-1.913-2.607-1.913-1.27 0-1.2 1.913-2.47 1.913-1.268 0-1.337-1.913-2.607-1.913-1.269 0-1.2 1.913-2.47 1.913-1.268 0-1.337-1.913-2.607-1.913-1.27 0-1.2 1.913-2.47 1.913-.398 0-.679-.189-.915-.448A10.414 10.414 0 0 1 2 14.262C2 8.593 6.477 4 12 4c5.524 0 10 4.594 10 10.261 0 1.62-.366 3.152-1.018 4.516"
        />
      </Defs>
      <G
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <Use href="#prefix__a" />
        <Use href="#prefix__a" />
        <Path d="M11.5 16c3.167 0 4.5-1.748 4.5-4.231C16 9.285 13.986 7 11.5 7 9.015 7 7 9.286 7 11.769S8.333 16 11.5 16" />
        <Path d="M10 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandLivewire))
export { Memo as IconBrandLivewire }
