/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGitCherryPick = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0m3-9v6m0 6v6m6-14h2.5l1.5 5-1.5 5H13m4-5h3"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGitCherryPick))
export { Memo as IconGitCherryPick }
