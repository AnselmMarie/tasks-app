/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPaw = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.7 13.5c-1.1-2-1.441-2.5-2.7-2.5-1.259 0-1.736.755-2.836 2.747-.942 1.703-2.846 1.845-3.321 3.291-.097.265-.145.677-.143.962 0 1.176.787 2 1.8 2 1.259 0 3-1 4.5-1s3.241 1 4.5 1c1.013 0 1.8-.823 1.8-2 0-.285-.049-.697-.146-.962-.475-1.451-2.512-1.835-3.454-3.538m5.488-5.418A1.039 1.039 0 0 0 19.782 8h-.015c-.735.012-1.56.75-1.993 1.866-.519 1.335-.28 2.7.538 3.052.129.055.267.082.406.082.739 0 1.575-.742 2.011-1.866.516-1.335.273-2.7-.54-3.052zM9.474 9c.055 0 .109 0 .163-.011.944-.128 1.533-1.346 1.32-2.722C10.754 4.97 9.91 4 9.025 4c-.055 0-.109 0-.163.011-.944.128-1.533 1.346-1.32 2.722C7.746 8.026 8.59 9 9.475 9zm6.982-2.267c.214-1.376-.375-2.594-1.32-2.722A1.164 1.164 0 0 0 14.974 4c-.885 0-1.728.97-1.93 2.267-.214 1.376.375 2.594 1.32 2.722.054.007.108.011.162.011.885 0 1.73-.974 1.93-2.267M5.69 12.918c.816-.352 1.054-1.719.536-3.052C5.79 8.742 4.955 8 4.217 8c-.14 0-.277.027-.407.082-.816.352-1.054 1.719-.536 3.052C3.71 12.258 4.545 13 5.283 13c.14 0 .277-.027.407-.082"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPaw))
export { Memo as IconPaw }
