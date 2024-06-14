/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAlertHexagonFilled = (_props: any) => {
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
          d="M10.425 1.414a3.33 3.33 0 0 1 3.026-.097l.19.097 6.775 3.995.096.063.092.077.107.075a3.224 3.224 0 0 1 1.266 2.188l.018.202.005.204v7.284c0 1.106-.57 2.129-1.454 2.693l-.17.1-6.803 4.302c-.918.504-2.019.535-3.004.068l-.196-.1-6.695-4.237a3.225 3.225 0 0 1-1.671-2.619L2 15.502V8.217c0-1.106.57-2.128 1.476-2.705zM12.01 15l-.127.007a1 1 0 0 0 0 1.986L12 17l.127-.007a1 1 0 0 0 0-1.986zM12 7a1 1 0 0 0-.993.883L11 8v4l.007.117a1 1 0 0 0 1.986 0L13 12V8l-.007-.117A1 1 0 0 0 12 7"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconAlertHexagonFilled))
export { Memo as IconAlertHexagonFilled }
