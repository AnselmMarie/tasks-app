/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMessageCircle_2Filled = (_props: any) => {
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
          d="M5.821 4.91c3.898-2.765 9.469-2.539 13.073.536 3.667 3.127 4.168 8.238 1.152 11.897-2.842 3.447-7.965 4.583-12.231 2.805l-.232-.101-4.375.931-.075.013-.11.009-.113-.004-.044-.005-.11-.02-.105-.034-.1-.044-.076-.042-.108-.077-.081-.074-.073-.083-.053-.075-.065-.115-.042-.106-.031-.113-.013-.075-.009-.11.004-.113.005-.044.02-.11.022-.072 1.15-3.451-.022-.036C.969 12.45 1.97 7.805 5.59 5.079l.23-.168z"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconMessageCircle_2Filled))
export { Memo as IconMessageCircle_2Filled }
