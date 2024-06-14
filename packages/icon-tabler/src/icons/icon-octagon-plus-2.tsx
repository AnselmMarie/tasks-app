/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconOctagonPlus_2 = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m13.023 21.74-.221.095c-.512.22-1.092.22-1.604 0l-5.575-2.389a2.036 2.036 0 0 1-1.07-1.07l-2.388-5.574a2.036 2.036 0 0 1 0-1.604l2.389-5.575c.206-.48.589-.863 1.07-1.07l5.574-2.388a2.036 2.036 0 0 1 1.604 0l5.575 2.389c.48.206.863.589 1.07 1.07l2.388 5.574c.22.512.22 1.092 0 1.604l-.081.19M16 19h6m-3-3v6"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconOctagonPlus_2))
export { Memo as IconOctagonPlus_2 }
