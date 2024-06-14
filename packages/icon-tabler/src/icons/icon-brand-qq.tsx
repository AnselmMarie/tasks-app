/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandQq = (_props: any) => {
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
        <Path d="M6 9.748a14.716 14.716 0 0 0 11.995-.052C18.27.46 6.891-1.56 6 9.748M18 10c.984 2.762 1.949 4.765 2 7.153.014.688-.664 1.346-1.184.303C18.47 16.76 17.864 16.275 17 16m0 0c.031 1.831.147 3.102-1 4m-8 0c-1.099-.87-.914-2.24-1-4m-1-6c-.783 2.338-1.742 4.12-1.968 6.43-.217 2.227.716 1.644 1.16.917C5.488 16.86 6.09 16.413 7 16m8.898-3-.476-2M8 20l-1.5 1c-.5.5-.5 1 .5 1h10c1 0 1-.5.5-1L16 20" />
        <Path d="M12.75 7a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-3.5 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandQq))
export { Memo as IconBrandQq }
