/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAtomOff = (_props: any) => {
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
        <Path d="M12 12v.01M9.172 9.172c-3.906 3.905-5.805 8.337-4.243 9.9 1.562 1.561 6-.338 9.9-4.244m1.884-2.113c2.587-3.277 3.642-6.502 2.358-7.786-1.284-1.284-4.508-.23-7.784 2.357" />
        <Path d="M4.929 4.929c-1.562 1.562.337 6 4.243 9.9 3.905 3.905 8.337 5.804 9.9 4.242M19 15c-.767-1.794-2.215-3.872-4.172-5.828C12.884 7.227 10.787 5.77 9 5M3 3l18 18" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconAtomOff))
export { Memo as IconAtomOff }
