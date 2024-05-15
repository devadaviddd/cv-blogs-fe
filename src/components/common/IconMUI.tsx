import * as Icons from '@mui/icons-material'

export type IconNames = keyof typeof Icons
export interface IconProps {
  iconName: IconNames
}

export default function IconMUI(props: IconProps) {
  const Icon = Icons[props.iconName]
  return <Icon/>
}