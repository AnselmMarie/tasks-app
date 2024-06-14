/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandOnedrive = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18.456 10.45a6.45 6.45 0 0 0-12-2.151 4.857 4.857 0 0 0-4.44 5.241 4.856 4.856 0 0 0 5.236 4.444h10.751a3.771 3.771 0 0 0 3.99-3.54 3.772 3.772 0 0 0-3.538-3.992z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBrandOnedrive))
export { Memo as IconBrandOnedrive }
