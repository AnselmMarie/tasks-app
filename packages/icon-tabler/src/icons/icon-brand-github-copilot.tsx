/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandGithubCopilot = (_props: any) => {
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
        <Path d="M4 18v-5.5c0-.667.167-1.333.5-2" />
        <Path d="M12 7.5c0-1-.01-4.07-4-3.5-3.5.5-4 2.5-4 3.5 0 1.5 0 4 3 4 4 0 5-2.5 5-4M4 12c-1.333.667-2 1.333-2 2 0 1 0 3 1.5 4 3 2 6.5 3 8.5 3s5.499-1 8.5-3c1.5-1 1.5-3 1.5-4 0-.667-.667-1.333-2-2" />
        <Path d="M20 18v-5.5c0-.667-.167-1.333-.5-2" />
        <Path d="M12 7.5v-.297l.01-.269.027-.298.013-.105.033-.215c.014-.073.029-.146.046-.22l.06-.223c.336-1.118 1.262-2.237 3.808-1.873 2.838.405 3.703 1.797 3.93 2.842l.036.204c0 .033.01.066.013.098l.016.185v.661l-.015.394-.02.271c-.122 1.366-.655 2.845-2.962 2.845-3.256 0-4.524-1.656-4.883-3.081l-.053-.242a3.865 3.865 0 0 1-.036-.235l-.021-.227a3.518 3.518 0 0 1-.007-.215zM10 15v2m4-2v2" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBrandGithubCopilot))
export { Memo as IconBrandGithubCopilot }
