/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconOctahedronPlus = (_props: any) => {
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
        <Path d="m21.498 12.911.206-.208a.984.984 0 0 0 0-1.407l-8.845-8.948a1.233 1.233 0 0 0-1.718 0l-8.845 8.949a.984.984 0 0 0 0 1.407l8.845 8.949a1.234 1.234 0 0 0 1.718-.001l.08-.081" />
        <Path d="M2 12c.004.086.103.178.296.246l8.845 2.632c.459.163 1.259.163 1.718 0l2.634-.784m5.41-1.61.801-.238c.195-.07.294-.156.296-.243M12 2.12v19.76M16 19h6m-3-3v6" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconOctahedronPlus))
export { Memo as IconOctahedronPlus }
