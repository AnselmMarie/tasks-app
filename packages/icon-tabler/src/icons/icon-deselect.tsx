/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDeselect = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8h3a1 1 0 0 1 1 1v3m0 4H9a1 1 0 0 1-1-1V8m4 12v.01m4-.01v.01M8 20v.01M4 20v.01M4 16v.01M4 12v.01M4 8v.01M8 4v.01M12 4v.01M16 4v.01M20 4v.01M20 8v.01M20 12v.01M20 16v.01M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconDeselect))
export { Memo as IconDeselect }
