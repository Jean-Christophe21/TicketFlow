// Authentification
export const ENDPOINTS = {
  // Authentification
  login: '/login',
  register: '/register',
  tickets: '/demandes',
  user: '/user',
  postcomment: "/commentaires",
  getcomment: (ticketId: number) =>
    `/tickets/${ticketId}/commentaires`,
}
