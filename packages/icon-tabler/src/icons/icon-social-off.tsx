/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSocialOff = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0M3 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0m14.57-1.398a2 2 0 0 0 2.83 2.827m-9.287-9.296a3 3 0 1 0 3.765 3.715M12 7v1m-5.3 9.8 2.8-2m7.8 2-2.8-2M3 3l18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSocialOff))
export { Memo as IconSocialOff }
