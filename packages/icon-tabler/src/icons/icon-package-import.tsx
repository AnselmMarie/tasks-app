/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPackageImport = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m12 21-8-4.5v-9L12 3l8 4.5V12m-8 0 8-4.5M12 12v9m0-9L4 7.5M22 18h-7m3-3-3 3 3 3"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPackageImport))
export { Memo as IconPackageImport }
