import { TextInput, View, StyleSheet } from 'react-native';

interface SearchTicketsProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const SearchTickets = ({ searchQuery, onSearchChange, }: SearchTicketsProps) => {

  return (
    <View style={styles.contentContainer}>
      {/* Barre de recherche */}
      <View style={styles.searchBar}>
        <TextInput
          placeholder="Rechercher un ticket..."
          placeholderTextColor="#9CA3AF"
          value={searchQuery}
          onChangeText={onSearchChange}
          style={styles.searchInput}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 0,
    flexShrink: 0,
    paddingTop: 0,
  },
  searchBar: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  searchInput: {
    fontSize: 15,
    color: '#1F2937',
  },
});
