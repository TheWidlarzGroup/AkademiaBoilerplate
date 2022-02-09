import { QueryClient } from 'react-query'

export const queryClient = new QueryClient({
  // Infinity is also available value for cacheTime config:  https://react-query.tanstack.com/reference/useQuery
  defaultOptions: { queries: { cacheTime: 'Infinity' as any, staleTime: 30000 } },
})
