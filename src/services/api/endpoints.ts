// Authentification
export const ENDPOINTS = {

  // Authentification 
  login: "/login",
  register: "/register",
  postcomment: "/comment",
  getcomment: (ticketId: number) =>
    `/tickets/${ticketId}/commentaires`,




}