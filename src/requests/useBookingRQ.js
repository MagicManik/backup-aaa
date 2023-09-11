import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { apiHeaders } from "../lib/apiHeaders"

export const useBookingRQ = (endpoind) => {
  return useMutation( {
    mutationFn: (data) => 
    axios
    .post(`https://sandbox-api.myvoiaj.com${endpoind}`, data, {
        headers: apiHeaders
    })
    .then((response) => response.data),

    onSuccess: ()=> {
        console.log("success")
    },
    
    onError: ()=> {
        console.log("error")
    }
  })
}