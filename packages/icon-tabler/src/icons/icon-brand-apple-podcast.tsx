/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandApplePodcast = (_props: any) => {
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
        <Path d="M18.364 18.364a9 9 0 1 0-12.728 0" />
        <Path d="M11.766 22h.468a2 2 0 0 0 1.985-1.752l.5-4A2 2 0 0 0 12.734 14h-1.468a2 2 0 0 0-1.985 2.248l.5 4A2 2 0 0 0 11.766 22M10 9a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandApplePodcast))
export { Memo as IconBrandApplePodcast }
