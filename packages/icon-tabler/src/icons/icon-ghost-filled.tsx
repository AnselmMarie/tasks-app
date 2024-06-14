/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGhostFilled = (_props: any) => {
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
          d="M12 3a8 8 0 0 1 7.996 7.75L20 11l-.001 6.954.01.103a2.78 2.78 0 0 1-1.468 2.618l-.163.08c-1.053.475-2.283.248-3.129-.593l-.137-.146a.65.65 0 0 0-1.024 0 2.65 2.65 0 0 1-4.176 0 .65.65 0 0 0-.512-.25c-.2 0-.389.092-.55.296a2.78 2.78 0 0 1-4.859-2.005l.008-.091L4 11l.004-.25A8 8 0 0 1 12 3m2.82 10.429a1 1 0 0 0-1.391-.25 2.5 2.5 0 0 1-2.858 0 1 1 0 0 0-1.142 1.642 4.5 4.5 0 0 0 5.142 0 1 1 0 0 0 .25-1.392zM10.01 9l-.127.007A1 1 0 0 0 10 11l.127-.007A1 1 0 0 0 10.01 9m4 0-.127.007A1 1 0 0 0 14 11l.127-.007A1 1 0 0 0 14.01 9"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconGhostFilled))
export { Memo as IconGhostFilled }
