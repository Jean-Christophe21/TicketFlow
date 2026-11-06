import React, { useState } from "react";
import { View, StyleSheet, ActivityIndicator,
     Text, SafeAreaView, 
     TextInput, TouchableOpacity } from "react-native";
import useComments from "../hooks/useComments";
import CommentList from "../components/tickets/CommentList";

interface CommentFormProps {
  ticketId: number;
  onAddComment: (data: { ticketId: number; content: string }) => void;
}

function CommentForm({ ticketId, onAddComment }: CommentFormProps) {
  const [content, setContent] = useState("");

  const submitComment = () => {
    const trimmedContent = content.trim();
    if (!trimmedContent) return;

    onAddComment({ ticketId, content: trimmedContent });
    setContent("");
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={setContent}
        placeholder="Votre commentaire..."
        multiline
      />
      <TouchableOpacity style={styles.submitButton} onPress={submitComment}>
        <Text style={styles.submitButtonText}>Envoyer</Text>
      </TouchableOpacity>
    </View>
  );
}

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
      {/* En-tête ou détails du ticket*/}
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
        onAddComment={(data) =>
          addComment(data as unknown as Parameters<typeof addComment>[0])
        }
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
  formContainer: {
    padding: 12,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },
  input: {
    minHeight: 44,
    maxHeight: 100,
    padding: 10,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 6,
    marginBottom: 8,
  },
  submitButton: {
    alignSelf: "flex-end",
    backgroundColor: "#2563EB",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  submitButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});