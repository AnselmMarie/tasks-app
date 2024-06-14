/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDroplets = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.072 20.3a2.999 2.999 0 0 0 3.856 0 3.002 3.002 0 0 0 .67-3.798l-2.095-3.227a.6.6 0 0 0-1.005 0L3.4 16.502a3.003 3.003 0 0 0 .671 3.798zm12 0a2.999 2.999 0 0 0 3.856 0 3.002 3.002 0 0 0 .67-3.798l-2.095-3.227a.6.6 0 0 0-1.005 0L15.4 16.502a3.003 3.003 0 0 0 .671 3.798zm-6-10a2.999 2.999 0 0 0 3.856 0 3.002 3.002 0 0 0 .67-3.798l-2.095-3.227a.6.6 0 0 0-1.005 0L9.4 6.502a3.003 3.003 0 0 0 .671 3.798z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconDroplets))
export { Memo as IconDroplets }
