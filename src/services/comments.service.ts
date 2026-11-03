import  api from "./api/http"
import { ENDPOINTS } from "./api/endpoints";
import { LoginInput, LoginResponse } from "../types";
import { CommentsInput, CommentsResponse } from "../types/comments";



 export async function  comment(request:CommentsInput): Promise <CommentsResponse>{
  const result = await api.post<CommentsResponse> (ENDPOINTS.comment,request);
    console.log('resultat', result);
  return result.data;
  
 }
  

