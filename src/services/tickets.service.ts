import httpService from './api/http.ts';
import {
  AssignResponse,
  DemandeResponse,
  DemandesResponse,
  ModificationDemande,
  StatusOfDemande,
  StoreDemande,
  TechnicianId,
} from '../types/ticket.types.ts';
import { ENDPOINTS } from './api/endpoints.ts';

export async function getUserAllDemandes(
  employeId: number,
): Promise<DemandesResponse> {
  return await httpService.get(
    `${ENDPOINTS.user}/${employeId}${ENDPOINTS.tickets}`,
  );
}

export async function getUserDemandesById(
  id: number,
): Promise<DemandeResponse> {
  return await httpService.get(`/${ENDPOINTS.tickets}/${id}`);
}

export async function createDemande(demande: StoreDemande) {
  return await httpService.post('/${ENDPOINTS.tickets}/', demande);
}

export async function modifyDemande(id: number, demande: ModificationDemande) {
  return await httpService.put(`/${ENDPOINTS.tickets}/${id}`, demande);
}

export async function modifyDemandeStatus(
  id: number,
  demandeStatus: StatusOfDemande,
) {
  return await httpService.put(
    `/${ENDPOINTS.tickets}/${id}/status`,
    demandeStatus,
  );
}

export async function assignTechnicianToDemand(
  demandeId: number,
  technician: TechnicianId,
): Promise<AssignResponse> {
  return await httpService.put(
    `/${ENDPOINTS.tickets}/${demandeId}/assign`,
    technician,
  );
}
