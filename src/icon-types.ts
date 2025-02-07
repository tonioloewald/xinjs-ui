import { ElementCreator } from 'xinjs'

export interface IconSpec {
  w?: number
  h?: number
  p: string[]
  c?: string[]
}

export type IconData = { [key: string]: string | IconSpec }

export type SVGIconMap = { [key: string]: ElementCreator<SVGElement> }
