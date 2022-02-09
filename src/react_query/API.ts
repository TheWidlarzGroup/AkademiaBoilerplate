const GET = {
  placeholder: (placeholder: V.Placeholder) => `PLACEHOLDER/${placeholder}`,
} as const

const PUT = {} as const

const POST = {
  placeholder: '/placeholder',
} as const

export const API = {
  GET,
  PUT,
  POST,
} as const
