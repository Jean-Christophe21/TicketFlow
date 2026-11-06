import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { TicketItem } from '../components/tickets/TicketItem';
import { TicketFilters } from '../components/tickets/TicketFilters';
import { SearchTickets } from '../components/tickets/searchTickets';
import { useSearchTickets, useTickets } from '../hooks/useTickets.ts';
import {
  demandeStatus,
  TicketFilter,
} from '../types/ticket.types.ts';

export const TicketsContent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<TicketFilter>('tous');

  const { tickets } = useTickets();
  const searchResults = useSearchTickets(tickets, searchQuery);

  const listTickets =
    activeFilter === 'tous'
      ? searchResults
      : searchResults.filter(ticket => ticket.status === activeFilter);

  const ticketCounts = {
    Tous: searchResults.length,
    Ouverts: searchResults.filter(
      ticket => ticket.status === demandeStatus.open,
    ).length,
    Resolus: searchResults.filter(
      ticket => ticket.status === demandeStatus.resolved,
    ).length,
    EnAttente: searchResults.filter(
      ticket => ticket.status === demandeStatus.pending,
    ).length,
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filtersData = [
    {
      label: 'Tous',
      count: ticketCounts.Tous,
      isActive: activeFilter === 'tous',
      onPress: () => setActiveFilter('tous'),
    },
    {
      label: 'Ouverts',
      count: ticketCounts.Ouverts,
      isActive: activeFilter === demandeStatus.open,
      onPress: () => setActiveFilter(demandeStatus.open),
    },
    {
      label: 'Resolus',
      count: ticketCounts.Resolus,
      isActive: activeFilter === demandeStatus.resolved,
      onPress: () => setActiveFilter(demandeStatus.resolved),
    },
    {
      label: 'En attente',
      count: ticketCounts.EnAttente,
      isActive: activeFilter === demandeStatus.pending,
      onPress: () => setActiveFilter(demandeStatus.pending),
    },
  ];

  return (
    <View style={styles.contentContainer}>
      <View style={styles.fixedHeader}>
        <SearchTickets
          searchQuery={searchQuery}
          onSearchChange={handleSearch}
        />

        <TicketFilters filters={filtersData} />
      </View>

      <FlatList
        style={styles.ticketList}
        contentContainerStyle={styles.ticketListContent}
        data={listTickets}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <TicketItem
            id={String(item.id)}
            title={item.title}
            status={item.status}
            timeAgo={(
              Date.now() - new Date(item.created_at).getTime()
            ).toString()}
            onPress={() => console.log(`Clic sur le ticket ${item.id}`)}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    minHeight: 0,
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 16,
    paddingTop: 50,
  },

  fixedHeader: {
    flexGrow: 0,
    flexShrink: 0,
  },

  ticketList: {
    flex: 1,
    minHeight: 0,
  },

  ticketListContent: {
    paddingTop: 0,
    paddingBottom: 16,
  },
});
