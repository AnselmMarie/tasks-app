/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandFirefox = (_props: any) => {
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
        <Path d="M4.028 7.82a9 9 0 1 0 12.823-3.4C15.215 3.4 13.787 3.4 12 3.4h-1.647" />
        <Path d="M4.914 9.485c-1.756-1.569-.805-5.38.109-6.17.086.896.585 1.208 1.111 1.685.88-.275 1.313-.282 1.867 0 .82-.91 1.694-2.354 2.628-2.093C9.547 4.648 10.559 6.64 12 7.08c-.17.975-1.484 1.913-2.76 2.686-1.296.938-.722 1.85 0 2.234.949.506 3.611-1 4.545.354-1.698.102-1.536 3.107-3.983 2.727 2.523.957 4.345.462 5.458-.34 1.965-1.52 2.879-3.542 2.879-5.557-.014-1.398.194-2.695-1.26-4.75" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandFirefox))
export { Memo as IconBrandFirefox }
