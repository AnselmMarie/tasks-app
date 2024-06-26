/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconScubaMaskOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 7h5a1 1 0 0 1 1 1v4.5c0 .154-.014.304-.04.45m-2 2.007c-.15.028-.305.043-.463.043h-.5a2 2 0 0 1-2-2 2 2 0 1 0-4 0 2 2 0 0 1-2 2h-.5a2.5 2.5 0 0 1-2.5-2.5V8a1 1 0 0 1 1-1h3M10 17a2 2 0 0 0 2 2h3.5a5.475 5.475 0 0 0 2.765-.744m2-2c.47-.81.739-1.752.739-2.756V4M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconScubaMaskOff))
export { Memo as IconScubaMaskOff }
