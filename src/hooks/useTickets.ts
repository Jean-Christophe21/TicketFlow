import { useState } from 'react';
import {
  Demande,
  StatusOfDemande,
  StoreDemande,
} from '../types/ticket.types.ts';
import {
  getUserAllDemandes,
  createDemande,
  modifyDemande,
  modifyDemandeStatus,
  getUserDemandesById,
} from '../services/tickets.service.ts';

export const useTickets = () => {
  const [tickets, setTickets] = useState<Demande[]>();
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const userId: number = 5;

  const fetchTickets = async () => {
    setLoading(true);
    try {
      const response = await getUserAllDemandes(userId);
      setTickets(response.data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  return { tickets, error, loading, fetchTickets };
};

export const useTicketById = () => {
  const [tickets, setTickets] = useState<Demande>();
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const idDemande: number = 5;

  const fetchTickets = async () => {
    setLoading(true);
    try {
      const response = await getUserDemandesById(idDemande);
      setTickets(response.data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  return { tickets, error, loading, fetchTickets };
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

export const useTicketModification = () => {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [demande, setDemande] = useState<Demande | null>(null);

  const modifyTicket = async (id: number, updatedDemande: StoreDemande) => {
    setLoading(true);
    try {
      const response = await modifyDemande(id, updatedDemande);
      setDemande(response.data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  return { demande, error, loading, modifyTicket };
};

export const useTicketStatusModification = () => {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [demande, setDemande] = useState<Demande | null>(null);

  const modifyTicketStatus = async (id: number, demandeStatus: StatusOfDemande) => {
    setLoading(true);
    try {
      const response = await modifyDemandeStatus(id, demandeStatus);
      setDemande(response.data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  return { demande, error, loading, modifyTicketStatus };
}

