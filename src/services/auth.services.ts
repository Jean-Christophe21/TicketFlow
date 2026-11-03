import  api from "./api/http"
import { ENDPOINTS } from "./api/endpoints";
import { LoginInput, LoginResponse } from "../types";



 export async function  login(request:LoginInput): Promise <LoginResponse>{
  const result = await api.post<LoginResponse> (ENDPOINTS.login,request);
    console.log('resultat', result);
  return result.data;
  
 }
  

