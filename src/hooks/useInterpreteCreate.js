import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

const API_URL = "https://librali-backend.onrender.com/interpretes"

export function useInterpreteCreate() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data) => {
      const response = await axios.post(API_URL, data)
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['interpretes'])
    }
  })
}
