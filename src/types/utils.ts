import type { FC } from 'react'

export const exhaustiveTypeCheck = (x: never, strict = false) => {
  if (strict) {
    throw new Error(`Unhandled case for: ${x}`)
  } else {
    console.log(`Unhandled case for: ${x}`)
  }
}

export type InferReactProps<T> = T extends FC<infer Props> ? Props : unknown
