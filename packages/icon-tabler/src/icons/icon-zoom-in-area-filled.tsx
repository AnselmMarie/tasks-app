/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconZoomInAreaFilled = (_props: any) => {
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
          d="M15 9a6 6 0 0 1 4.891 9.476l2.816 2.817a1 1 0 0 1-1.32 1.497l-.094-.083-2.817-2.816a6 6 0 0 1-9.472-4.666L9 15l.004-.225A6 6 0 0 1 15 9m0 3a1 1 0 0 0-.993.883L14 13v1h-1l-.117.007a1 1 0 0 0 0 1.986L13 16h1v1l.007.117a1 1 0 0 0 1.986 0L16 17v-1h1l.117-.007a1 1 0 0 0 0-1.986L17 14h-1v-1l-.007-.117A1 1 0 0 0 15 12M3 14a1 1 0 0 1 .993.883L4 15v1a1 1 0 0 0 .883.993L5 17h1a1 1 0 0 1 .117 1.993L6 19H5a3 3 0 0 1-2.995-2.824L2 16v-1a1 1 0 0 1 1-1m0-5a1 1 0 0 1 .993.883L4 10v1a1 1 0 0 1-1.993.117L2 11v-1a1 1 0 0 1 1-1m3-7a1 1 0 0 1 .117 1.993L6 4H5a1 1 0 0 0-.993.883L4 5v1a1 1 0 0 1-1.993.117L2 6V5a3 3 0 0 1 2.824-2.995L5 2zm5 0a1 1 0 0 1 .117 1.993L11 4h-1a1 1 0 0 1-.117-1.993L10 2zm5 0a3 3 0 0 1 2.995 2.824L19 5v1a1 1 0 0 1-1.993.117L17 6V5a1 1 0 0 0-.883-.993L16 4h-1a1 1 0 0 1-.117-1.993L15 2z"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconZoomInAreaFilled))
export { Memo as IconZoomInAreaFilled }
