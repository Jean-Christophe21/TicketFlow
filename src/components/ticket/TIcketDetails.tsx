import React from "react";
import { View, StyleSheet, ActivityIndicator, Text, SafeAreaView } from "react-native";
import useComments from "../../hooks/useComments";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

interface TicketDetailsPageProps {
  route: {
    params: {
      ticketId: number; // ID du ticket passé en paramètre de navigation
    };
  };
}

export default function TicketDetailsPage({ route }: TicketDetailsPageProps) {
  const { ticketId } = route.params;
  
  // Utilisation de notre hook personnalisé
  const { comments, loading, error, addComment } = useComments(ticketId);

  return (
    <SafeAreaView style={styles.container}>
      {/* En-tête ou détails du ticket (si nécessaire) */}
      <View style={styles.header}>
        <Text style={styles.title}>Détails du Ticket #{ticketId}</Text>
      </View>

      {/* Affichage d'un loader global au premier chargement */}
      {loading && comments.length === 0 ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#2563EB" />
        </View>
      ) : error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : (
        /* Liste des commentaires */
        <CommentList comments={comments} />
      )}

      {/* Formulaire d'ajout en bas de page */}
      <CommentForm
        ticketId={ticketId}
        onAddComment={(data) => addComment(data as Parameters<typeof addComment>[0])}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },
  header: {
    padding: 16,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1F2937",
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  errorText: {
    color: "#EF4444",
    fontSize: 14,
    textAlign: "center",
  },
});