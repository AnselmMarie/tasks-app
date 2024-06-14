/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandSlack = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 12V6a2 2 0 0 1 4 0v6m0-2a2 2 0 1 1 2 2h-6m0 0h6a2 2 0 0 1 0 4h-6m2 0a2 2 0 1 1-2 2v-6m0 0v6a2 2 0 0 1-4 0v-6m0 2a2 2 0 1 1-2-2h6m0 0H6a2 2 0 0 1 0-4h6m-2 0a2 2 0 1 1 2-2v6"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBrandSlack))
export { Memo as IconBrandSlack }
