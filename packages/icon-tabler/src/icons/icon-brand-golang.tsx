/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandGolang = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15.695 14.305c1.061 1.06 2.953.888 4.226-.384 1.272-1.273 1.444-3.165.384-4.226-1.061-1.06-2.953-.888-4.226.384-1.272 1.273-1.444 3.165-.384 4.226M12.68 9.233c-1.084-.497-2.545-.191-3.591.846-1.284 1.273-1.457 3.165-.388 4.226 1.07 1.06 2.978.888 4.261-.384A3.669 3.669 0 0 0 14 12h-2.427M5.5 15H4m2-6H4m1 3H2"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBrandGolang))
export { Memo as IconBrandGolang }
