/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGenderGenderfluid = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 15.464a4 4 0 1 0 4-6.928 4 4 0 0 0-4 6.928M15.464 14l3-5.196M5.536 15.195l3-5.196M12 12h.01M9 9 3 3m2.5 5.5 3-3M21 21l-6-6m2 5 3-3M3 7V3h4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGenderGenderfluid))
export { Memo as IconGenderGenderfluid }
