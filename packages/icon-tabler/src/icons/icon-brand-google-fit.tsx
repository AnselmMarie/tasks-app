/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandGoogleFit = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 9.314 9.657 6.97a3.314 3.314 0 0 0-4.686 4.686L7.314 14 12 18.686l7.03-7.03a3.314 3.314 0 0 0-4.687-4.685L7.313 14"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBrandGoogleFit))
export { Memo as IconBrandGoogleFit }
