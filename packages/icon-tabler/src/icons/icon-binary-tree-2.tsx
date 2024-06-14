/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBinaryTree_2 = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-7 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0m14 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-7 4a2 2 0 1 0-4 0 2 2 0 0 0 4 0M12 8v8m-5.684-3.504 4.368-4.992m7 4.992-4.366-4.99"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBinaryTree_2))
export { Memo as IconBinaryTree_2 }
