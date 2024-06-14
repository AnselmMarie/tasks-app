/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandVivaldi = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21.648 6.808c-2.468 4.28-4.937 8.56-7.408 12.836-.397.777-1.366 1.301-2.24 1.356-.962.102-1.7-.402-2.154-1.254-1.563-2.684-3.106-5.374-4.66-8.064-.943-1.633-1.891-3.266-2.83-4.905a2.47 2.47 0 0 1-.06-2.45A2.493 2.493 0 0 1 4.381 3.02a2.39 2.39 0 0 1 2.287 1.281c.697 1.19 2.043 3.83 2.55 4.682A3.919 3.919 0 0 0 12.5 11c2.126.133 3.974-.95 4.21-3.058 0-.164.228-3.178.846-3.962.619-.784 1.64-1.155 2.606-.893a2.484 2.484 0 0 1 1.814 2.062 2.57 2.57 0 0 1-.343 1.674"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBrandVivaldi))
export { Memo as IconBrandVivaldi }
