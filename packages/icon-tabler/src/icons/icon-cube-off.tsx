/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCubeOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.83 16.809c.11-.248.17-.52.17-.801V7.99a1.98 1.98 0 0 0-1-1.717l-7-4.008a2.016 2.016 0 0 0-2 0L7.988 3.99M5.441 5.448 4 6.273c-.619.355-1 1.01-1 1.718v8.018c0 .709.381 1.363 1 1.717l7 4.008a2.016 2.016 0 0 0 2 0l5.544-3.174M12 22V12m2.532-1.462L20.73 6.96m-17.46 0L12 12M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCubeOff))
export { Memo as IconCubeOff }
