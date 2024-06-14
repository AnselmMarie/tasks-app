/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChartDonutFilled = (_props: any) => {
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
          d="M9.883 2.207a1.9 1.9 0 0 1 2.087 1.522l.025.167L12 4v4a1 1 0 0 1-.641.933l-.107.035a3.1 3.1 0 1 0 3.73 3.953l.05-.173a1 1 0 0 1 .855-.742L16 12h3.8a2 2 0 0 1 2 2 1 1 0 0 1-.026.226A10 10 0 1 1 9.504 2.293l.27-.067z"
        />
        <Path
          fill="currentColor"
          d="M14.775 2.526a.996.996 0 0 1 .22-.026l.122.007.112.02.103.03a10 10 0 0 1 6.003 5.817l.108.294a1 1 0 0 1-.824 1.325L20.5 10H16a1 1 0 0 1-.76-.35 8 8 0 0 0-.89-.89 1 1 0 0 1-.342-.636L14 8V3.505l.006-.118c.005-.042.012-.08.02-.116l.03-.103a.998.998 0 0 1 .168-.299l.071-.08c.03-.028.058-.052.087-.075l.09-.063.088-.05.103-.043z"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconChartDonutFilled))
export { Memo as IconChartDonutFilled }
