
import React from "react";

import {
    View,
    Text,
    FlatList,
    StyleSheet
} from "react-native";

import type { CommentsInput } from "../../types/comments";

import CommentItem from "./CommentItem";

interface CommentListProps {
    comments: CommentsInput[];
}

export default function CommentList({
    comments
}: CommentListProps) {

    return (
        <FlatList
            data={comments}

            keyExtractor={(item) => item.id.toString()}

            renderItem={({ item }) => (
                <CommentItem comment={item} />
            )}

            ListEmptyComponent={
                <View style={styles.empty}>
                    <Text style={styles.emptyText}>
                        Aucun commentaire pour le moment.
                    </Text>
                </View>
            }

            contentContainerStyle={styles.list}
        />
    );
}

const styles = StyleSheet.create({

    list: {
        padding: 15,
        flexGrow: 1,
    },

    empty: {
        alignItems: "center",
        padding: 20,
    },

    emptyText: {
        color: "#9CA3AF",
        fontSize: 14,
    },

});
