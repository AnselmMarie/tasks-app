/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandBaidu = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 9.5a1 1.5 0 1 0 2 0 1 1.5 0 1 0-2 0m10.463 2.096c1.282 1.774 3.476 3.416 3.476 3.416s1.921 1.574.593 3.636C17.204 20.711 13.64 19.8 13.64 19.8s-1.416-.44-3.06-.088c-1.644.356-3.06.22-3.06.22s-2.055-.22-2.47-2.304c-.416-2.084 1.918-3.638 2.102-3.858.182-.222 1.409-.966 2.284-2.394.875-1.428 3.337-2.287 5.027.221zM8 4.5a1 1.5 0 1 0 2 0 1 1.5 0 1 0-2 0m6 0a1 1.5 0 1 0 2 0 1 1.5 0 1 0-2 0m4 5a1 1.5 0 1 0 2 0 1 1.5 0 1 0-2 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBrandBaidu))
export { Memo as IconBrandBaidu }
