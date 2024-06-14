/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandBunpo = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3.9 7.205a17.764 17.764 0 0 0 4.008 2.753 7.917 7.917 0 0 0 4.57.567c1.5-.33 2.907-1 4.121-1.956a12.107 12.107 0 0 0 2.892-2.903c.603-.94.745-1.766.484-2.231-.261-.465-.927-.568-1.72-.257a7.564 7.564 0 0 0-2.608 2.034 18.425 18.425 0 0 0-2.588 3.884 34.927 34.927 0 0 0-2.093 5.073 12.908 12.908 0 0 0-.677 3.515c-.07.752.07 1.51.405 2.184.323.562 1.06 1.132 2.343 1.132 3.474 0 5.093-3.53 5.463-5.62.24-1.365-.085-3.197-1.182-4.01"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBrandBunpo))
export { Memo as IconBrandBunpo }
