/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandDiscordFilled = (_props: any) => {
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
          d="m14.983 3 .123.006c2.014.214 3.527.672 4.966 1.673a1 1 0 0 1 .371.488c1.876 5.315 2.373 9.987 1.451 12.28C20.891 19.452 19.288 21 17.5 21c-.732 0-1.693-.968-2.328-2.045a21.512 21.512 0 0 0 2.103-.493 1 1 0 1 0-.55-1.924c-3.32.95-6.13.95-9.45 0a1 1 0 0 0-.55 1.924c.717.204 1.416.37 2.103.494C8.193 20.031 7.232 21 6.5 21c-1.788 0-3.391-1.548-4.428-3.629-.888-2.217-.39-6.89 1.485-12.204a1 1 0 0 1 .371-.488C5.367 3.678 6.88 3.22 8.894 3.006a1 1 0 0 1 .935.435l.063.107.651 1.285.137-.016a12.97 12.97 0 0 1 2.643 0l.134.016.65-1.284a1 1 0 0 1 .754-.54zM9 10a2 2 0 0 0-1.977 1.697l-.018.154L7 12l.005.15A2 2 0 1 0 9 10m6 0a2 2 0 0 0-1.977 1.697l-.018.154L13 12l.005.15A2 2 0 1 0 15 10"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandDiscordFilled))
export { Memo as IconBrandDiscordFilled }
