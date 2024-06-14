/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconShieldCheckeredFilled = (_props: any) => {
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
          d="M11.013 12v9.754A13 13 0 0 1 2.28 12zm9.284 3.794a13 13 0 0 1-7.283 5.951L13.013 12h8.708a12.96 12.96 0 0 1-1.424 3.794M11.014 2.526 11.013 10H2.027c-.068-1.432.101-2.88.514-4.282a1 1 0 0 1 1.005-.717 11 11 0 0 0 7.192-2.256zM13.013 10V2.547l-.09-.073a11 11 0 0 0 7.189 2.537l.342-.01a1 1 0 0 1 1.005.717c.413 1.403.582 2.85.514 4.282z"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconShieldCheckeredFilled))
export { Memo as IconShieldCheckeredFilled }
