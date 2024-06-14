/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMeatOff = (_props: any) => {
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
        <Path d="m13.62 8.382 1.966-1.967A2 2 0 1 1 19 5a2 2 0 1 1-1.413 3.414l-1.82 1.821m-9.863 8.361c2.733 2.734 5.9 4 7.07 2.829 1.172-1.172-.094-4.338-2.828-7.071-2.733-2.734-5.9-4-7.07-2.829-1.172 1.172.094 4.338 2.828 7.071M7.5 16l1 1" />
        <Path d="M12.975 21.425c1.582-1.582 2.679-3.407 3.242-5.2M16.6 12.6c-.16-1.238-.653-2.345-1.504-3.195-.85-.85-1.955-1.344-3.192-1.503m-3.63.382c-1.792.563-3.616 1.66-5.198 3.242M3 3l18 18" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconMeatOff))
export { Memo as IconMeatOff }
