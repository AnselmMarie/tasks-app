/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandCtemplar = (_props: any) => {
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
        <Path d="M6.04 14.831 10.5 10.5m2.055 10.32c4.55-3.456 7.582-8.639 8.426-14.405a1.668 1.668 0 0 0-.934-1.767A19.647 19.647 0 0 0 12 3a19.647 19.647 0 0 0-8.047 1.647 1.668 1.668 0 0 0-.934 1.767c.844 5.766 3.875 10.95 8.426 14.406a.948.948 0 0 0 1.11 0" />
        <Path d="M20 5c-2 0-4.37 3.304-8 6.644C8.37 8.304 6 5 4 5m13.738 10L13.5 10.5" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandCtemplar))
export { Memo as IconBrandCtemplar }
