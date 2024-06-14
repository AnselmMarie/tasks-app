/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconStarsFilled = (_props: any) => {
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
          d="M17.657 12.007a1.39 1.39 0 0 0-1.103.765l-.855 1.723-1.907.277c-.52.072-.96.44-1.124.944l-.038.14c-.1.465.046.954.393 1.29l1.377 1.337-.326 1.892a1.393 1.393 0 0 0 2.018 1.465l1.708-.895 1.708.896a1.388 1.388 0 0 0 1.462-.105l.112-.09a1.39 1.39 0 0 0 .442-1.272l-.325-1.891 1.38-1.339c.38-.371.516-.924.352-1.427l-.051-.134a1.39 1.39 0 0 0-1.073-.81l-1.907-.278-.853-1.722A1.393 1.393 0 0 0 17.8 12zm-11.6 0a1.39 1.39 0 0 0-1.103.765l-.855 1.723-1.907.277c-.52.072-.96.44-1.124.944l-.038.14c-.1.465.046.954.393 1.29L2.8 18.483l-.326 1.892a1.393 1.393 0 0 0 2.018 1.465l1.708-.895 1.708.896a1.388 1.388 0 0 0 1.462-.105l.112-.09a1.39 1.39 0 0 0 .442-1.272L9.6 18.483l1.38-1.339c.38-.371.516-.924.352-1.427l-.051-.134a1.39 1.39 0 0 0-1.073-.81L8.3 14.494l-.853-1.722A1.393 1.393 0 0 0 6.2 12zm5.8-10a1.39 1.39 0 0 0-1.103.765l-.855 1.723-1.907.277c-.52.072-.96.44-1.124.944l-.038.14c-.1.465.046.954.393 1.29L8.6 8.483l-.326 1.892a1.393 1.393 0 0 0 2.018 1.465L12 10.946l1.709.896a1.388 1.388 0 0 0 1.462-.105l.112-.09a1.39 1.39 0 0 0 .442-1.272L15.4 8.483l1.38-1.339c.38-.371.516-.924.352-1.427l-.051-.134a1.39 1.39 0 0 0-1.073-.81L14.1 4.494l-.853-1.722A1.393 1.393 0 0 0 12 2z"
        />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconStarsFilled))
export { Memo as IconStarsFilled }
