import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export function useInterpreteById(id) {
  return useQuery({
    queryKey: ['interprete', id],
    queryFn: async () => {
      const response = await axios.get(
        `http://localhost:8080/interpretes/${id}`
      )
      return response.data
    },
    enabled: !!id
  })
}
