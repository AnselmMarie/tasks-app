/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBellRinging_2Filled = (_props: any) => {
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
          d="M9.63 17.531c.612.611.211 1.658-.652 1.706a3.992 3.992 0 0 1-3.05-1.166 3.992 3.992 0 0 1-1.165-3.049c.046-.826 1.005-1.228 1.624-.726l.082.074zM20.071 3.929c.96.96 1.134 2.41.52 3.547l-.09.153-.024.036a8.013 8.013 0 0 1-1.446 7.137l-.183.223-.191.218-2.073 2.072-.08.112a3 3 0 0 0-.499 2.113l.035.201.045.185c.264.952-.853 1.645-1.585 1.051l-.086-.078L3.101 9.586c-.727-.727-.017-1.945.973-1.671a3 3 0 0 0 2.5-.418l.116-.086 2.101-2.1a8 8 0 0 1 7.265-1.86l.278.071.037-.023a3.003 3.003 0 0 1 3.432.192l.14.117z"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBellRinging_2Filled))
export { Memo as IconBellRinging_2Filled }
