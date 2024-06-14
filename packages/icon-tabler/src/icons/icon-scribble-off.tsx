/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconScribbleOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 15c2 3 4 4 7 4 1.95 0 4.324-1.268 5.746-3.256m1.181-2.812A5.97 5.97 0 0 0 17 12c0-4-3-7-6-7-.642 0-1.239.069-1.78.201M6.728 6.716C6.258 7.333 6 8.102 6 9c0 2.5 2 5 6 5 .597 0 1.203-.055 1.808-.156m3.102-.921C19.145 11.97 21.062 10.5 22 9M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconScribbleOff))
export { Memo as IconScribbleOff }
