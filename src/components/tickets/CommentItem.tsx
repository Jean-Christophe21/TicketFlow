
import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import type { CommentsInput } from "../../types/comments";

interface CommentItemProps {
    comment: CommentsInput;
}

export default function CommentItem({
    comment
}: CommentItemProps) {

    const nomComplet = `${comment.auteur.prenom} ${comment.auteur.nom}`;

    const date = new Date(comment.created_at).toLocaleString("fr-FR");

    return (
        <View style={styles.container}>

            {/* Informations sur l'auteur */}
            <View style={styles.header}>

                <View>
                    <Text style={styles.author}>
                        {nomComplet}
                    </Text>

                    <Text style={styles.role}>
                        {comment.auteur.role}
                    </Text>
                </View>

                <Text style={styles.date}>
                    {date}
                </Text>

            </View>

            {/* Message du commentaire */}
            <Text style={styles.message}>
                {comment.message}
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        padding: 15,
        borderRadius: 10,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "#E5E7EB",
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 12,
    },

    author: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#1F2937",
    },

    role: {
        fontSize: 12,
        color: "#2563EB",
        marginTop: 3,
    },

    date: {
        fontSize: 11,
        color: "#9CA3AF",
    },

    message: {
        fontSize: 14,
        color: "#374151",
        lineHeight: 21,
    },
});
