/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandYarn = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.845 19.308c-1.268.814-2.41 1.254-3.845 1.692-.176.21-.645.544-.912.588A42.469 42.469 0 0 1 8.59 22c-.812.006-1.31-.214-1.447-.554-.115-.279.336-2.054.298-1.964-.157.392-.575 1.287-.997 1.72-.579.6-1.674.4-2.322.051-.71-.386-.07-1.28-.346-1.267C3.5 20 3 18.5 3 17.75c0-.828.622-1.674 1.235-2.211a6.811 6.811 0 0 1 .46-3.143 7.414 7.414 0 0 1 2.208-2.615S5.55 8.247 6.054 6.869c.328-.902.46-.895.567-.935.38-.12.727-.33 1.013-.612.78-.88 1.96-1.438 3.116-1.322 0 0 .781-2.43 1.533-1.936.415.653.671 1.218.967 1.936 0 0 1.15-.7 1.25-.5.514 1.398.487 3.204.211 4.67-.324 1.408-.84 2.691-1.711 3.83-.094.16.98.705 1.722 2.812.686 1.928.278 2.438.278 2.688s.716.144 2.296-.855A5.848 5.848 0 0 1 20.28 15.5c.735-.066.988-.035 1.22 1 .232 1.035-.346 1.406-.744 1.506 0 0-2.09.675-2.911 1.302"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBrandYarn))
export { Memo as IconBrandYarn }
