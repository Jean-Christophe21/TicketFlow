import React, { useState } from "react";
import { 
  View, 
  TextInput, 
  Pressable, 
  Text, 
  StyleSheet, 
  ActivityIndicator 
} from "react-native";

interface CommentFormProps {
  ticketId: number;
  onAddComment: (data: { ticket_id: number; message: string }) => Promise<boolean>;
}

export default function CommentForm({ ticketId, onAddComment }: CommentFormProps) {
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!message.trim()) return;

    try {
      setIsSubmitting(true);
      // Appel de la fonction pour poster le commentaire
      const success = await onAddComment({
        ticket_id: ticketId,
        message: message.trim(),
      });

      if (success) {
        setMessage(""); 
      }
    } catch (error) {
      console.error("Erreur lors de la soumission :", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Écrire un commentaire..."
        placeholderTextColor="#9CA3AF"
        multiline
        value={message}
        onChangeText={setMessage}
      />
      
      <Pressable 
        style={[styles.button, (!message.trim() || isSubmitting) && styles.buttonDisabled]} 
        onPress={handleSubmit}
        disabled={!message.trim() || isSubmitting}
      >
        {isSubmitting ? (
          <ActivityIndicator size="small" color="#FFFFFF" />
        ) : (
          <Text style={styles.buttonText}>Envoyer</Text>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },
  input: {
    backgroundColor: "#F9FAFB",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: "#1F2937",
    maxHeight: 100,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#2563EB",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonDisabled: {
    backgroundColor: "#93C5FD",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
});