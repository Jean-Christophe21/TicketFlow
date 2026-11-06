import { useState } from 'react';
import {
  Demande,
  StatusOfDemande,
  StoreDemande,
  TechnicianId,
} from '../types/ticket.types.ts';
import {
  modifyDemande,
  modifyDemandeStatus,
  getUserDemandesById,
  assignTechnicianToDemand,
} from '../services/tickets.service.ts';

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

  const modifyTicketStatus = async (
    id: number,
    demandeStatus: StatusOfDemande,
  ) => {
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
};

export const useAssignTechnician = () => {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [demande, setDemande] = useState<Demande | null>(null);

  const assignTechnician = async (
    demandeId: number,
    technicianId: TechnicianId,
  ) => {
    setLoading(true);
    try {
      const response = await assignTechnicianToDemand(demandeId, technicianId);
      setDemande(response.data[0]); // Assuming the response contains an array of Demande
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  return { demande, error, loading, assignTechnician };
};
