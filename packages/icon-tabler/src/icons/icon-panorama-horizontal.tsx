/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPanoramaHorizontal = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.338 5.53c5.106 1.932 10.211 1.932 15.317 0A1 1 0 0 1 21 6.464v11c0 .692-.692 1.2-1.34.962-5.107-1.932-10.214-1.932-15.321 0A.993.993 0 0 1 3 17.491V6.464a1 1 0 0 1 1.338-.935z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPanoramaHorizontal))
export { Memo as IconPanoramaHorizontal }
