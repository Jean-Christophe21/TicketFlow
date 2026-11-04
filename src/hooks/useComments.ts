
import { useState, useEffect, useCallback } from "react";
import type { CommentsResponse, CommentsInput } from "../types/comments";
import { getcomment, postcomment } from "../services/comments.service";

export default function useComments(ticketId: number) {
    const [comments, setComments] = useState<CommentsInput[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    // Récupérer les commentaires du ticket
    const fetchComments = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await getcomment(ticketId);

            setComments(response.data);
        } catch (error) {
            console.error("Erreur lors du chargement des commentaires :", error);
            setError("Impossible de charger les commentaires.");
        } finally {
            setLoading(false);
        }
    }, [ticketId]);

    // Charger les commentaires au montage et lorsque le ticket change
    useEffect(() => {
        fetchComments();
    }, [fetchComments]);

    // Ajouter un commentaire ...
    const addComment = async (data: CommentsInput) => {
        try {
            setError(null);

            await postcomment(data);

            // Actualiser la liste après l'ajout
            await fetchComments();

            return true;
        } catch (error) {
            console.error("Erreur lors de l'ajout du commentaire :", error);
            setError("Impossible d'ajouter le commentaire.");
            return false;
        }
    };

    return {
        comments,
        loading,
        error,
        fetchComments,
        addComment,
    };
}
