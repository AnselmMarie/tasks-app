/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCoinEuroFilled = (_props: any) => {
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
          d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34M12 6C9.948 6 8.232 7.449 7.451 9.5H7a1 1 0 0 0-.117 1.993l.134.007a7.298 7.298 0 0 0 0 1H7a1 1 0 0 0 0 2h.452C8.232 16.553 9.948 18 12 18c1.141 0 2.217-.457 3.084-1.27a1 1 0 0 0-1.368-1.46c-.509.478-1.102.73-1.716.73-.922 0-1.776-.578-2.335-1.499L11 14.5a1 1 0 0 0 0-2H9.023a5.342 5.342 0 0 1 0-1H11a1 1 0 0 0 0-2H9.664C10.224 8.579 11.078 8 12 8c.615 0 1.208.252 1.717.73a1 1 0 0 0 1.368-1.46C14.218 6.458 13.142 6 12 6"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconCoinEuroFilled))
export { Memo as IconCoinEuroFilled }
