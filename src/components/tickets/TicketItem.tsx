import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface TicketItemProps {
  id: string;
  title: string;
  status: 'ouvert' | 'en_cours' | 'resolu' | 'en_attente';
  timeAgo: string;
  onPress?: () => void;
}

export const TicketItem = ({ id, title, status, timeAgo, onPress }: TicketItemProps) => {


  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Ouvert':
        return { bg: '#E0E7FF', text: '#3730A3' };
      case 'en_cours':
        return { bg: '#FEF3C7', text: '#D97706' };
      case 'resolu':
        return { bg: '#D1FAE5', text: '#065F46' };
      case 'en_attente':
        return { bg: '#FEE2E2', text: '#991B1B' };
      default:
        return { bg: '#F3F4F6', text: '#374151' };
    }
  };

  const badgeStyle = getStatusStyle(status);

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.headerRow}>
        <Text style={styles.ticketId}>{id}</Text>
        <View style={[styles.badge, { backgroundColor: badgeStyle.bg }]}>
          <Text style={[styles.badgeText, { color: badgeStyle.text }]}>
            {status}
          </Text>
        </View>
      </View>

      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>

      <View style={styles.footerRow}>
        <Text style={styles.timeAgo}>{timeAgo}</Text>
        <Text style={styles.arrow}>›</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  ticketId: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1F2937',
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
  },
  title: {
    fontSize: 15,
    color: '#4B5563',
    marginBottom: 10,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeAgo: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  arrow: {
    fontSize: 18,
    color: '#9CA3AF',
    fontWeight: '600',
  },
});
