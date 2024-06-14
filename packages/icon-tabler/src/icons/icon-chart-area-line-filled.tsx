/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChartAreaLineFilled = (_props: any) => {
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
          d="M15.22 9.375a1 1 0 0 1 1.393-.165l.094.083 4 4a1 1 0 0 1 .284.576L21 14v5a1 1 0 0 1-.883.993L20 20H3.978l-.11-.009-.11-.02-.107-.034-.105-.046-.1-.059-.094-.07-.06-.055-.072-.082-.064-.089-.054-.096-.016-.035-.04-.103-.027-.106-.015-.108-.004-.11.009-.11.019-.105c.01-.04.022-.077.035-.112l.046-.105.059-.1 4-6a1 1 0 0 1 1.165-.39l.114.05 3.277 1.638z"
        />
        <Path
          fill="currentColor"
          d="M15.232 3.36a1 1 0 0 1 1.382-.15l.093.083 4 4a1 1 0 0 1-1.32 1.497l-.094-.083-3.226-3.225-4.299 5.158a1 1 0 0 1-1.1.303l-.115-.049-3.254-1.626L4.8 12.6a1 1 0 0 1-1.295.269L3.4 12.8a1 1 0 0 1-.269-1.295L3.2 11.4l3-4a1 1 0 0 1 1.137-.341l.11.047 3.291 1.645z"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconChartAreaLineFilled))
export { Memo as IconChartAreaLineFilled }
