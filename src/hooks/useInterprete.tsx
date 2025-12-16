import axios from 'axios';
import { func } from "effect/FastCheck";
import { useQuery } from "@tanstack/react-query";
import { getInterpretes } from "../Services/interpretesService";


const API_URL = "https://librali-backend.onrender.com";

const fetchData = async () => {
  const response = await axios.get(`${API_URL}/interprete`);
  return response;
}

export function useInterprete() {
    const query = useQuery({
        queryKey: ['interprete'],
        queryFn: fetchData,
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}


export function useInterpretes() {
  return useQuery({
    queryKey: ["interpretes"],
    queryFn: getInterpretes,
  });
}
