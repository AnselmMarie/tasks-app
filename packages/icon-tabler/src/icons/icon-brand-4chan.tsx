/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrand_4chan = (_props: any) => {
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
        <Path d="M14 11s6.054-1.05 6-4.5c-.038-2.324-2.485-3.19-3.016-1.5 0 0-.502-2-2.01-2-1.508 0-2.984 3-.974 8" />
        <Path d="M13.98 11S20.055 9.95 20 6.5c-.038-2.324-2.493-3.19-3.025-1.5 0 0-.505-2-2.017-2-1.513 0-3 3-.977 8zM13 13.98l.062.309.081.35.075.29.092.328.11.358.061.188.139.392c.64 1.73 1.841 3.837 3.88 3.805 2.324-.038 3.19-2.493 1.5-3.025l.148-.045.165-.058a4.13 4.13 0 0 0 .098-.039l.222-.098c.586-.28 1.367-.832 1.367-1.777 0-1.513-3-3-8-.977zM10.02 13l-.309.062-.35.081-.29.075-.328.092-.358.11-.188.061-.392.139c-1.73.64-3.837 1.84-3.805 3.88.038 2.324 2.493 3.19 3.025 1.5l.045.148.058.165.039.098.098.222c.28.586.832 1.367 1.777 1.367 1.513 0 3-3 .977-8zm.98-2.98-.062-.309-.081-.35-.075-.29-.092-.328-.11-.358-.128-.382-.148-.399C9.646 5.917 8.46 3.97 6.5 4 4.176 4.038 3.31 6.493 5 7.025l-.148.045-.164.058a4.13 4.13 0 0 0-.1.039l-.22.098C3.78 7.545 3 8.097 3 9.042c0 1.513 3 3 8 .977z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrand_4chan))
export { Memo as IconBrand_4chan }
