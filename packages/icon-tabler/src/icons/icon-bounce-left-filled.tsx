/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBounceLeftFilled = (_props: any) => {
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
          d="M8.486 11.143a1 1 0 0 1 1.371.343c1.045 1.74 1.83 3.443 2.392 5.237l.172.581.092-.13c2.093-2.921 4.48-3.653 7.565-2.7l.238.077a1 1 0 1 1-.632 1.898c-2.932-.978-4.73-.122-6.79 3.998-.433.866-1.721.673-1.88-.283-.46-2.76-1.369-5.145-2.871-7.65a1 1 0 0 1 .343-1.371M6 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBounceLeftFilled))
export { Memo as IconBounceLeftFilled }
