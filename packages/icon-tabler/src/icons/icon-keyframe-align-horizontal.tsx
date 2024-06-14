/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconKeyframeAlignHorizontal = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12.816 16.58c-.207.267-.504.42-.816.42-.312 0-.61-.153-.816-.42l-2.908-3.748a1.39 1.39 0 0 1 0-1.664l2.908-3.748c.207-.267.504-.42.816-.42.312 0 .61.153.816.42l2.908 3.748a1.39 1.39 0 0 1 0 1.664zM3 12h2m14 0h2"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconKeyframeAlignHorizontal))
export { Memo as IconKeyframeAlignHorizontal }
