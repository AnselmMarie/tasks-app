/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandPatreon = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20 8.408c-.003-2.299-1.746-4.182-3.79-4.862-2.54-.844-5.888-.722-8.312.453-2.939 1.425-3.862 4.545-3.896 7.656-.028 2.559.22 9.297 3.92 9.345 2.75.036 3.159-3.603 4.43-5.356.906-1.247 2.071-1.599 3.506-1.963 2.465-.627 4.146-2.626 4.142-5.273"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBrandPatreon))
export { Memo as IconBrandPatreon }
