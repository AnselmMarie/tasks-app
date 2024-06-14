/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPasswordFingerprint = (_props: any) => {
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
        <Path d="M17 8c.788 1 1 2 1 3v1m-9-1c0-1.578 1.343-3 3-3s3 1.422 3 3v2m-3-2v2" />
        <Path d="M6 12v-1.397c-.006-1.999 1.136-3.849 2.993-4.85A6.385 6.385 0 0 1 15 5.748M12 17v4m-2-1 4-2m-4 0 4 2m-9-3v4m-2-1 4-2m-4 0 4 2m12-3v4m-2-1 4-2m-4 0 4 2" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconPasswordFingerprint))
export { Memo as IconPasswordFingerprint }
