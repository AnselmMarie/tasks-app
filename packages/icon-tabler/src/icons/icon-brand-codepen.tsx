/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandCodepen = (_props: any) => {
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
        <Path d="m3 15 9 6 9-6-9-6z" />
        <Path d="m3 9 9 6 9-6-9-6zm0 0v6m18-6v6M12 3v6m0 6v6" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandCodepen))
export { Memo as IconBrandCodepen }
