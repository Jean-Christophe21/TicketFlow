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
  const [tickets, setTickets] = useState<Demande[]>();
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const userId: number = 2;

  const fetchTickets = async () => {
    setLoading(true);
    try {
      const response = await getUserAllDemandes(userId);
      setTickets(response.data);
      console.log("tickets in usetickets:", response.data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  return { tickets, error, loading };
};


export const useCreateTicket = () => {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [demande, setDemande] = useState<StoreDemande | null>(null);

  const createTicket = async (newDemande: StoreDemande) => {
    setLoading(true);
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
