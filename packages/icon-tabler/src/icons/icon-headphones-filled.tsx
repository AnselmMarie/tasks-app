/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHeadphonesFilled = (_props: any) => {
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
          d="M21 18a3 3 0 0 1-2.824 2.995L18 21h-1a3 3 0 0 1-2.995-2.824L14 18v-3a3 3 0 0 1 2.824-2.995L17 12h1c.351 0 .688.06 1 .171V12a7 7 0 0 0-13.996-.24L5 12v.17c.25-.088.516-.144.791-.163L6 12h1a3 3 0 0 1 2.995 2.824L10 15v3a3 3 0 0 1-2.824 2.995L7 21H6a3 3 0 0 1-2.995-2.824L3 18v-6a9 9 0 0 1 17.996-.265L21 12z"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconHeadphonesFilled))
export { Memo as IconHeadphonesFilled }
