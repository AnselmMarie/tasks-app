/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconLocationCancel = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m12 18-2-4-7-3.5a.55.55 0 0 1 0-1L21 3l-3.305 9.151M16 19a3 3 0 1 0 6 0 3 3 0 1 0-6 0m1 2 4-4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconLocationCancel))
export { Memo as IconLocationCancel }
