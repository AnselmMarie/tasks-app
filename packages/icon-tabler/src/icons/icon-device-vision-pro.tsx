/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDeviceVisionPro = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 7c1.143 0 2.235.035 3.275.104 1.017.068 1.95.207 2.798.42.813.203 1.52.505 2.119.909a3.903 3.903 0 0 1 1.328 1.531c.326.657.48 1.48.48 2.466 0 1.006-.189 1.91-.574 2.707-.375.779-.886 1.396-1.537 1.848a3.696 3.696 0 0 1-2.16.66c-.509 0-.97-.068-1.382-.21a5.84 5.84 0 0 1-1.17-.548 18.45 18.45 0 0 1-1.045-.695 9.104 9.104 0 0 0-1.001-.63 2.376 2.376 0 0 0-1.13-.301c-.373 0-.75.097-1.132.3-.316.17-.65.38-1 .63-.322.23-.67.462-1.047.695a5.78 5.78 0 0 1-1.168.548c-.413.142-.872.21-1.378.21a3.706 3.706 0 0 1-2.165-.659c-.651-.452-1.162-1.07-1.537-1.848-.385-.798-.574-1.7-.574-2.709-.004-.98.15-1.802.477-2.46a3.897 3.897 0 0 1 1.33-1.531c.6-.403 1.307-.704 2.12-.907a16.088 16.088 0 0 1 2.8-.423C9.767 7.036 10.857 7 12 7"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconDeviceVisionPro))
export { Memo as IconDeviceVisionPro }
