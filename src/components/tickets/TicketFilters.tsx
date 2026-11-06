import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

interface FilterOption {
  label: string;
  count: number;
  isActive: boolean;
  onPress: () => void;
}

interface TicketFiltersProps {
  filters: FilterOption[];
}

export const TicketFilters = ({ filters }: TicketFiltersProps) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {filters.map((filter, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.pill,
            filter.isActive ? styles.activePill : styles.inactivePill,
          ]}
          onPress={filter.onPress}
        >
          <Text
            style={[
              styles.pillText,
              filter.isActive ? styles.activeText : styles.inactiveText,
            ]}
          >
            {filter.label} ({filter.count})
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
    flexShrink: 0,
    marginTop: 8,
    marginBottom: 8,
  },

  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 0,
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 10,
  },

  filtersContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  pill: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 8,
  },

  activePill: {
    backgroundColor: '#4F46E5',
  },

  inactivePill: {
    backgroundColor: '#F3F4F6',
  },

  pillText: {
    fontSize: 14,
    fontWeight: '600',
  },

  activeText: {
    color: '#FFFFFF',
  },

  inactiveText: {
    color: '#4B5563',
  },
});