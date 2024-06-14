/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBucketDroplet = (_props: any) => {
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
        <Path d="m5 16 1.465 1.638a2 2 0 1 1-3.015.099zm8.737-6.263c2.299-2.3 3.23-5.095 2.081-6.245-1.15-1.15-3.945-.217-6.244 2.082-2.3 2.299-3.231 5.095-2.082 6.244 1.15 1.15 3.946.218 6.245-2.081" />
        <Path d="M7.492 11.818c.362.362.768.676 1.208.934l6.895 4.047c1.078.557 2.255-.075 3.692-1.512 1.437-1.437 2.07-2.614 1.512-3.692-.372-.718-1.72-3.017-4.047-6.895a6.015 6.015 0 0 0-.934-1.208" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBucketDroplet))
export { Memo as IconBucketDroplet }
