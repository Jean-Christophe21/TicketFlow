export type Role = "utilisateur" | "agent";

export interface Auteur {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    role: Role;
    created_at: string;
    updated_at: string;
}

export interface CommentsInput {
    id: number;
    ticket_id: number;
    utilisateur_id: number;
    message: string;
    created_at: string;
    updated_at: string;
    auteur: Auteur;
}

export interface CommentsResponse {
    success: boolean;
    data: CommentsInput[];
}