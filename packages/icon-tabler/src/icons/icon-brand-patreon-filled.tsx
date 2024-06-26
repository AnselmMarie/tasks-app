/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandPatreonFilled = (_props: any) => {
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
          d="M7.462 3.1c2.615-1.268 6.226-1.446 9.063-.503 2.568.853 4.471 3.175 4.475 5.81.004 3.061-1.942 5.492-4.896 6.243-1.693.43-2.338.75-2.942 1.582-.238.328-.45.745-.796 1.533l-.22.5C11 20.866 9.99 22.027 7.91 22c-2.232-.03-3.603-1.742-4.313-4.48-.458-1.768-.617-3.808-.594-5.876.044-3.993 1.42-7.072 4.46-8.545z"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandPatreonFilled))
export { Memo as IconBrandPatreonFilled }
