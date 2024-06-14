/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconWavesElectricity = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 12c.576-.643 1.512-1.017 2.5-1 .988-.017 1.924.357 2.5 1 .576.643 1.512 1.017 2.5 1 .988.017 1.924-.357 2.5-1M3 16c.576-.643 1.512-1.017 2.5-1 .988-.017 1.924.357 2.5 1 .576.643 1.512 1.017 2.5 1 .988.017 1.924-.357 2.5-1M3 8c.576-.643 1.512-1.017 2.5-1 .988-.017 1.924.357 2.5 1 .576.643 1.512 1.017 2.5 1 .988.017 1.924-.357 2.5-1m7-1-3 5h4l-3 5"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconWavesElectricity))
export { Memo as IconWavesElectricity }
