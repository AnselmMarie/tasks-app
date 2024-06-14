/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandTopbuzz = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.417 8.655a.524.524 0 0 1-.405-.622l.986-4.617a.524.524 0 0 1 .626-.404l14.958 3.162c.285.06.467.339.406.622l-.987 4.618a.524.524 0 0 1-.625.404l-4.345-.92c-.198-.04-.315.024-.353.197l-2.028 9.49a.527.527 0 0 1-.625.404l-4.642-.982a.527.527 0 0 1-.406-.622l2.028-9.493c.037-.17-.031-.274-.204-.31z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBrandTopbuzz))
export { Memo as IconBrandTopbuzz }
