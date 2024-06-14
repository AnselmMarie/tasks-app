/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const Icon_3dCubeSphereOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m6 17.6-2-1.1V14m0-4V7.5l2-1.1m4-2.3L12 3l2 1.1m4 2.3 2 1.1V10m0 4v2m-6 3.9L12 21l-2-1.1m8-11.3 2-1.1M12 12v2.5m0 4V21m0-9-2-1.12M6 8.6 4 7.5M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(Icon_3dCubeSphereOff))
export { Memo as Icon_3dCubeSphereOff }
