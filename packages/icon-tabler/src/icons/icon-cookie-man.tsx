/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCookieMan = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 2a5 5 0 0 1 2.845 9.112l.147.369 1.755-.803c.969-.443 2.12-.032 2.571.918a1.88 1.88 0 0 1-.787 2.447l-.148.076L16 15.208v2.02l1.426 1.425.114.125a1.96 1.96 0 0 1-2.762 2.762l-.125-.114-2.079-2.08-.114-.124a1.957 1.957 0 0 1-.161-.22H11.7c-.047.075-.101.15-.16.22l-.115.125-2.08 2.079a1.96 1.96 0 0 1-2.886-2.648l.114-.125L8 17.227v-2.019l-2.383-1.09-.148-.075a1.88 1.88 0 0 1-.787-2.447c.429-.902 1.489-1.318 2.424-.978l.147.06 1.755.803.147-.369a5 5 0 0 1-2.15-3.895V7a5 5 0 0 1 5-5zm0 14h.01M12 13h.01M10 7h.01M14 7h.01M12 9h.01"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCookieMan))
export { Memo as IconCookieMan }
