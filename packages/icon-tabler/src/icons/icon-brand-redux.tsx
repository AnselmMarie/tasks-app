/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandRedux = (_props: any) => {
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
        <Path d="M16.54 7c-.805-2.365-2.536-4-4.54-4-2.774 0-5.023 2.632-5.023 6.496 0 1.956 1.582 4.727 2.512 6" />
        <Path d="M4.711 11.979C3.055 13.856 2.497 16.164 3.5 17.89c1.387 2.39 5.138 2.831 8.501.9 1.703-.979 2.875-3.362 3.516-4.798" />
        <Path d="M15.014 19.99c2.511 0 4.523-.438 5.487-2.1 1.387-2.39-.215-5.893-3.579-7.824-1.702-.979-4.357-1.235-5.927-1.07" />
        <Path d="M10.493 9.862c.48.276 1.095.112 1.372-.366a1 1 0 0 0-.367-1.365 1.007 1.007 0 0 0-1.373.366 1 1 0 0 0 .368 1.365M8.5 15.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0m6-1.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandRedux))
export { Memo as IconBrandRedux }
