/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSchoolBell = (_props: any) => {
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
        <Path d="M4 17a3 3 0 0 0 3 3m7.805-13.63 2.783-2.784a2 2 0 1 1 2.829 2.828L17.633 9.2" />
        <Path d="M16.505 7.495a5.105 5.105 0 0 1 .176 7.035l-.176.184-1.867 1.867a3.48 3.48 0 0 0-1.013 2.234l-.008.23v.934c0 .327-.13.64-.36.871a.51.51 0 0 1-.652.06l-.07-.06-9.385-9.384a.51.51 0 0 1 0-.722c.198-.198.456-.322.732-.353l.139-.008h.933c.848 0 1.663-.309 2.297-.864l.168-.157 1.867-1.867.16-.153a5.105 5.105 0 0 1 7.059.153" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconSchoolBell))
export { Memo as IconSchoolBell }
