/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandSamsungpass = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <G
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <Path d="M4 12a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm3-2V8.138C7 5.3 9.239 3 12 3s5 2.3 5 5.138V10" />
        <Path d="M10.485 17.577c.337.29.7.423 1.515.423h.413c.323 0 .633-.133.862-.368a1.27 1.27 0 0 0 .356-.886c0-.332-.128-.65-.356-.886a1.203 1.203 0 0 0-.862-.368h-.826a1.2 1.2 0 0 1-.861-.367 1.27 1.27 0 0 1-.356-.886c0-.332.128-.651.356-.886a1.2 1.2 0 0 1 .861-.368H12c.816 0 1.178.133 1.515.423" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandSamsungpass))
export { Memo as IconBrandSamsungpass }
