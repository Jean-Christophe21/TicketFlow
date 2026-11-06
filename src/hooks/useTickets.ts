import { useEffect, useState } from 'react';
import {
  Demande,
  StoreDemande,
} from '../types/ticket.types.ts';
import {
  getUserAllDemandes,
  createDemande,
} from '../services/tickets.service.ts';

export const useTickets = () => {
  const [tickets, setTickets] = useState<Demande[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const userId: number = 8;

  const fetchTickets = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getUserAllDemandes(userId);
      console.log("response.data in useTickets:", response.data);
      setTickets(response.data.data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  console.log("tickets in useTickets:", tickets);

  return { tickets, error, loading };
};


export const useSearchTickets = (
  tickets: Demande[],
  searchQuery: string,
): Demande[] => {
  const normalizedQuery = searchQuery.trim().toLowerCase();

  if (normalizedQuery === "") {
    return tickets;
  }

  console.log('tickets lists from search :', tickets);

  return tickets.filter((ticket) => {
    const title = (ticket.title ?? '').toLowerCase();
    const description = (ticket.description ?? '').toLowerCase();

    return (
      title.includes(normalizedQuery) ||
      description.includes(normalizedQuery)
    );
  });
};

export const useCreateTicket = () => {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [demande, setDemande] = useState<StoreDemande | null>(null);

  const createTicket = async (newDemande: StoreDemande) => {
    setLoading(true);
    setError(null);
    try {
      const response = await createDemande(newDemande);
      setDemande(response.data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  return { demande, error, loading, createTicket };
};
