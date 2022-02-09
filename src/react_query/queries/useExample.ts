import { QueryFunctionContext, useQuery } from 'react-query'
import axios from 'axios'
import { API } from '../API'
import { QUERY_KEYS } from './QUERY_KEYS'

const getOrder = async ({ queryKey }: QueryFunctionContext<[V.Placeholder, QUERY_KEYS]>) => {
  const { data } = await axios.get<V.Placeholder>(API.GET.placeholder(queryKey[0]))

  return data
}

export const useExample = (id: V.Placeholder) => {
  return useQuery<V.Placeholder, unknown, unknown, [V.Placeholder, QUERY_KEYS]>(
    [id, QUERY_KEYS.PLACEHOLDER],
    {
      queryFn: getOrder,
    }
  )
}
