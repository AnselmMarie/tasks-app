/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAwardFilled = (_props: any) => {
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
          d="m19.496 13.983 1.966 3.406a1.001 1.001 0 0 1-.705 1.488l-.113.011-.112-.001-2.933-.19-1.303 2.636a1.001 1.001 0 0 1-1.608.26l-.082-.094-.072-.11-1.968-3.407a8.994 8.994 0 0 0 6.93-3.999m-8.066 3.999L9.464 21.39a1.001 1.001 0 0 1-1.622.157l-.076-.1-.064-.114-1.304-2.635-2.931.19a1.001 1.001 0 0 1-1.022-1.29l.04-.107.05-.1 1.968-3.409a8.994 8.994 0 0 0 6.927 4.001zM12 2l.24.004A7 7 0 0 1 19 9l-.003.193-.007.192-.018.245-.026.242-.024.178a6.985 6.985 0 0 1-.317 1.268l-.116.308-.153.348a7.001 7.001 0 0 1-12.688-.028l-.13-.297-.052-.133-.08-.217-.095-.294a6.96 6.96 0 0 1-.093-.344l-.06-.271-.049-.271-.02-.139-.039-.323-.024-.365L5 9a7 7 0 0 1 6.76-6.996z"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconAwardFilled))
export { Memo as IconAwardFilled }
