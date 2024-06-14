/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandGoogleDrive = (_props: any) => {
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
        <Path d="M12 10 6 20l-3-5L9 5z" />
        <Path d="M9 15h12l-3 5H6m9-5L9 5h6l6 10z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandGoogleDrive))
export { Memo as IconBrandGoogleDrive }
