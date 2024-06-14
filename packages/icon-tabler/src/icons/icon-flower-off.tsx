/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFlowerOff = (_props: any) => {
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
        <Path d="M9.875 9.882a3 3 0 0 0 4.247 4.238m.581-3.423a3.012 3.012 0 0 0-1.418-1.409" />
        <Path d="M9 5a3 3 0 0 1 6 0c0 .562-.259 1.442-.776 2.64L13.5 9l1.76-1.893c.499-.6.922-1 1.27-1.205a2.968 2.968 0 0 1 4.07 1.099 3.011 3.011 0 0 1-1.09 4.098c-.374.217-.99.396-1.846.535l-1.779.244m.292.282 1.223.166c1 .145 1.698.337 2.11.576a3.011 3.011 0 0 1 1.226 3.832m-2.277 1.733a2.968 2.968 0 0 1-1.929-.369c-.348-.202-.771-.604-1.27-1.205L13.5 15l.724 1.36C14.74 17.559 15 18.439 15 19a3 3 0 0 1-6 0c0-.562.259-1.442.776-2.64L10.5 15l-1.76 1.893c-.499.601-.922 1-1.27 1.205A2.968 2.968 0 0 1 3.4 17a3.011 3.011 0 0 1 1.09-4.098c.374-.218.99-.396 1.846-.536L9 12l-2.4-.325c-1-.145-1.698-.337-2.11-.576A3.011 3.011 0 0 1 3.4 7a2.968 2.968 0 0 1 2.134-1.467M3 3l18 18" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconFlowerOff))
export { Memo as IconFlowerOff }
