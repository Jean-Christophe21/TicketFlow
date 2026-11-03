import  api from "./api/http"
import { ENDPOINTS } from "./api/endpoints";
import { LoginInput, LoginResponse } from "../types";
import { CommentsInput, CommentsResponse } from "../types/comments";



 export async function postcomment(request:CommentsInput): Promise <CommentsResponse>{
  const result = await api.post<CommentsResponse> (ENDPOINTS.postcomment,request);
    console.log('resultat', result);
  return result.data;
  
 }

export async function getcomment(
    ticketId: number
): Promise<CommentsResponse> {

    const result = await api.get<CommentsResponse>(
        ENDPOINTS.getcomment(ticketId)
    );

    return result.data;
}
  

