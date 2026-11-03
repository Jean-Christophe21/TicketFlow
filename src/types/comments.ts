
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

export interface Comments {
    id: number;
    ticket_id: number;
    utilisateur_id: number;
    message: string;
    created_at: string;
    updated_at: string;
    auteur: Auteur;
}