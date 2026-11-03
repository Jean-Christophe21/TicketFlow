export   interface LoginInput {
    email :string,
 }

  
export   interface LoginResponse  {
     success: boolean,
     access_token: string,
     token_type: string,
     user: {
        id: number,
        nom: string,
        prenom: string,
        email: string,
        role: string,
        created_at: string,
        updated_at: string
    }
}