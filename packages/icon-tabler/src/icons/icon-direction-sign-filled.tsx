/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDirectionSignFilled = (_props: any) => {
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
          d="M10.52 2.614a2.095 2.095 0 0 1 2.835-.117l.126.117 7.905 7.905c.777.777.816 2.013.117 2.836l-.117.126-7.905 7.905a2.094 2.094 0 0 1-2.836.117l-.126-.117-7.907-7.906a2.096 2.096 0 0 1-.115-2.835l.117-.126 7.905-7.905zm5.969 9.535.01-.116-.003-.12-.016-.114-.03-.11-.044-.112-.052-.098-.076-.105-.07-.081-3.5-3.5-.095-.083a1 1 0 0 0-1.226 0l-.094.083-.083.094a1 1 0 0 0 0 1.226l.083.094L13.085 11H8l-.117.007a1 1 0 0 0 0 1.986L8 13h5.085l-1.792 1.793-.083.094a1 1 0 0 0 1.403 1.403l.094-.083 3.5-3.5.097-.112.05-.074.037-.067.05-.112.023-.076z"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconDirectionSignFilled))
export { Memo as IconDirectionSignFilled }
