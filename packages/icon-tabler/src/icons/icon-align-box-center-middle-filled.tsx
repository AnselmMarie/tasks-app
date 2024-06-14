/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAlignBoxCenterMiddleFilled = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <G
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <Path d="M0 0h24v24H0z" />
        <Path
          fill="currentColor"
          d="M19 2a3 3 0 0 1 2.995 2.824L22 5v14a3 3 0 0 1-2.824 2.995L19 22H5a3 3 0 0 1-2.993-2.802L2 19V5a3 3 0 0 1 2.824-2.995L5 2zm-6 12h-2l-.117.007a1 1 0 0 0 0 1.986L11 16h2l.117-.007a1 1 0 0 0 0-1.986zm2-3H9l-.117.007a1 1 0 0 0 0 1.986L9 13h6l.117-.007a1 1 0 0 0 0-1.986zm-1-3h-4l-.117.007a1 1 0 0 0 0 1.986L10 10h4l.117-.007a1 1 0 0 0 0-1.986z"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconAlignBoxCenterMiddleFilled))
export { Memo as IconAlignBoxCenterMiddleFilled }
