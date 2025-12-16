import {useMutation, useQuery ,useQueryClient} from "@tanstack/react-query";
import axios, {AxiosPromise} from "axios";
import CadastroInterprete from "../components/CadastroInterprete";
import { use } from "react";
import { data } from "react-router-dom";

const API_URL = "https://librali-backend.onrender.com";

export function useInterpreteMutate(id) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data) => {
      const response = await axios.patch(`${API_URL}/${id}`, data)
      return response.data
    },
    onSuccess: () => {
      // atualiza a lista de intérpretes
      queryClient.invalidateQueries(["interpretes"])
      queryClient.invalidateQueries(['interprete', id])
    }
  })
}

