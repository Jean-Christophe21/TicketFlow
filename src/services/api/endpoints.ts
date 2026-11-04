// Authentification
export const ENDPOINTS = {

  // Authentification 
  login: "/login",
  register: "/register",
  postcomment: "/commentaires",
  getcomment: (ticketId: number) =>
    `/tickets/${ticketId}/commentaires`,




}