/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconWhirl = (_props: any) => {
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
        <Path d="M14 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0" />
        <Path d="M12 21c-3.314 0-6-2.462-6-5.5S8.686 10 12 10" />
        <Path d="M21 12c0 3.314-2.462 6-5.5 6S10 15.314 10 12" />
        <Path d="M12 14c3.314 0 6-2.462 6-5.5S15.314 3 12 3" />
        <Path d="M14 12c0-3.314-2.462-6-5.5-6S3 8.686 3 12" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconWhirl))
export { Memo as IconWhirl }
