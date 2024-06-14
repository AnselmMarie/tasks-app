/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandTether = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.08 20.188c-1.15 1.083-3.02 1.083-4.17 0L2.98 13.64c-.96-.906-1.27-2.624-.69-3.831l2.4-5.018C5.16 3.8 6.41 3 7.47 3h9.06c1.06 0 2.31.802 2.78 1.79l2.4 5.019c.58 1.207.26 2.925-.69 3.83-3.453 3.293-3.466 3.279-6.94 6.549M12 15V8M8 8h8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBrandTether))
export { Memo as IconBrandTether }
