/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSpiralOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 12.057a1.9 1.9 0 0 0 .614.743c.682.459 1.509.374 2.164-.02m1.103-2.92a3.298 3.298 0 0 0-1.749-2.059 3.6 3.6 0 0 0-.507-.195M8.24 8.24a4.154 4.154 0 0 0-1.347 1.646c-1.095 2.432.29 5.248 2.71 6.246 1.955.806 4.097.35 5.65-.884m1.745-2.268.043-.103c1.36-3.343-.557-7.134-3.896-8.41-1.593-.61-3.27-.599-4.79-.113M5.776 5.762A7.574 7.574 0 0 0 3.508 8.89c-1.63 4.253.823 9.024 5.082 10.576 3.211 1.17 6.676.342 9.124-1.738m1.869-2.149A9.354 9.354 0 0 0 21 11.063M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSpiralOff))
export { Memo as IconSpiralOff }
