/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandGoogleMaps = (_props: any) => {
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
        <Path d="M9.5 9.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0m-3.072 2.994 7.314-9.252m-3.74 4.693L7.065 5.39m10.628 1.203-8.336 9.979" />
        <Path d="M17.591 6.376c.472.907.715 1.914.709 2.935a7.263 7.263 0 0 1-.72 3.18 19.085 19.085 0 0 1-2.089 3c-.784.933-1.49 1.93-2.11 2.98-.314.62-.568 1.27-.757 1.938-.121.36-.277.591-.622.591-.315 0-.463-.136-.626-.593a10.595 10.595 0 0 0-.779-1.978 18.18 18.18 0 0 0-1.423-2.091c-.877-1.184-2.179-2.535-2.853-4.071A7.077 7.077 0 0 1 5.7 9.3a6.226 6.226 0 0 1 1.476-4.055A6.25 6.25 0 0 1 11.987 3a6.462 6.462 0 0 1 1.918.284 6.255 6.255 0 0 1 3.686 3.092" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandGoogleMaps))
export { Memo as IconBrandGoogleMaps }
