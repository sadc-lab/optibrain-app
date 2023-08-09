/* CRUD functions 

* CREATE: create (we won't use it in this appliation)
* RETRIEVE: findAll, findById
* UPDATE: update
* DELETE: deleteById, deleteAll
* FINDER: findByNoadmsip or findById

*/

/* RESTful API naming convention 

HTTP GET api/patients	--> Get all patients
HTTP POST  api/patients	   --> Create new patient

HTTP GET api/patients/{id}    //Get patient for given Id (noadmsip)
HTTP PUT api/patients/{id}       //Update patient for given Id
HTTP DELETE api/patients/{id}   //Delete patient for given Id

*/

import axios, { AxiosResponse } from "axios";
import IPatient from "@/types/Patient";

export const apiClient = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-type": "application/json"
  }
});

const findAll = async () => {
  const response = await apiClient.get<IPatient[]>("/patients")
  return response.data
}

const findByNoadmsip = async (noadmsip: number) => {
  const response = await apiClient.get<IPatient>(`/patients/${noadmsip}`)
  return response
}

const deleteByNoamsip = async (noadmsip: number) => {
  const response = await apiClient.delete<any>(`/patients/${noadmsip}`)
  return response
};

const deleteAll = async () => {
  const response = await apiClient.delete<any>(`/patients`);
  return response
};


const PatientService = {
  findAll,
  findByNoadmsip,
  deleteByNoamsip,
  deleteAll,
};

export default PatientService;