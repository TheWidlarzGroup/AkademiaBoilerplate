import { useMutation } from 'react-query'
import axios, { AxiosError } from 'axios'
import { API } from '../API'
import { queryClient } from '../queryClient'
import { QUERY_KEYS } from '../queries/QUERY_KEYS'

export type AvatarUpdatePayload = {
  data: { id: string; path: string }
}

type AvatarUpdateError = {
  message: string
}

const postAvatarUpdate = async (payload: V.Placeholder) => {
  return await axios.post<V.Placeholder, AvatarUpdatePayload>(API.POST.placeholder, payload, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}

export const usePlaceholderUpdate = () => {
  return useMutation<AvatarUpdatePayload, AxiosError<AvatarUpdateError>, V.Placeholder>(
    postAvatarUpdate,
    {
      onSuccess: (payload) => {
        queryClient.setQueryData<V.Placeholder>([QUERY_KEYS.PLACEHOLDER], (data) => {
          return { ...data!, avatar: payload.data.path, avatarId: payload.data.id }
        })
      },
      onError: (err) => {
        switch (err.response?.status) {
          case 413:
            console.log('handle error')
            break
          case 400:
            console.log('handle error')
            break
          default:
            console.log('handle error')
            break
        }
      },
    }
  )
}
