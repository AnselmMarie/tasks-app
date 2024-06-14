/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconKeyframesFilled = (_props: any) => {
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
          d="M8 4a2.599 2.599 0 0 0-2 .957l-4.355 5.24a2.847 2.847 0 0 0-.007 3.598l4.368 5.256C6.505 19.651 7.23 20 8 20a2.599 2.599 0 0 0 2-.957l4.355-5.24a2.847 2.847 0 0 0 .007-3.598L9.994 4.949A2.593 2.593 0 0 0 8 4m8.382.214a1 1 0 0 1 1.32.074l.084.094 4.576 5.823c.808.993.848 2.396.13 3.419l-.12.158-4.586 5.836a1 1 0 0 1-1.644-1.132l.072-.104 4.596-5.85a.845.845 0 0 0 .06-.978l-.07-.1-4.586-5.836a1 1 0 0 1 .168-1.404"
        />
        <Path
          fill="currentColor"
          d="M12.382 4.214a1 1 0 0 1 1.32.074l.084.094 4.576 5.823c.808.993.848 2.396.13 3.419l-.12.158-4.586 5.836a1 1 0 0 1-1.644-1.132l.072-.104 4.596-5.85a.845.845 0 0 0 .06-.978l-.07-.1-4.586-5.836a1 1 0 0 1 .168-1.404"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconKeyframesFilled))
export { Memo as IconKeyframesFilled }
