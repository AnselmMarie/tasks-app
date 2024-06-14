/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAvocado = (_props: any) => {
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
        <Path d="M17.8 14.04a3.905 3.905 0 0 1 1.337-2.075C20.332 10.98 20.953 9.68 21 8.063c-.047-1.43-.54-2.626-1.477-3.586-.96-.938-2.156-1.43-3.585-1.477-1.618.047-2.918.668-3.903 1.863-.562.68-1.254 1.125-2.074 1.336-.938.188-1.828.48-2.672.88-.844.398-1.559.878-2.144 1.44C3.715 10.02 3 11.743 3 13.688c0 1.946.715 3.668 2.145 5.168C6.645 20.285 8.367 21 10.313 21c1.945 0 3.667-.715 5.167-2.145.563-.585 1.055-1.3 1.477-2.144.398-.844.68-1.723.844-2.637v-.035z" />
        <Path d="M10.87 10.036c-.942.112-1.794.538-2.556 1.278-.74.762-1.166 1.614-1.278 2.556-.135.92.112 1.704.74 2.354.65.628 1.435.875 2.354.74.942-.112 1.794-.538 2.556-1.278.74-.762 1.166-1.614 1.278-2.556.135-.92-.112-1.704-.74-2.354-.65-.628-1.435-.875-2.354-.74" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconAvocado))
export { Memo as IconAvocado }
