/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandOauth = (_props: any) => {
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
        <Path d="M2 12a10 10 0 1 0 20 0 10 10 0 1 0-20 0" />
        <Path d="M12.556 6c.65 0 1.235.373 1.508.947l2.839 7.848a1.646 1.646 0 0 1-1.01 2.108 1.673 1.673 0 0 1-2.068-.851L13.365 15h-2.73l-.398.905A1.67 1.67 0 0 1 8.26 16.95l-.153-.047a1.647 1.647 0 0 1-1.056-1.956l2.824-7.852a1.664 1.664 0 0 1 1.409-1.087z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandOauth))
export { Memo as IconBrandOauth }
