import { KpiData } from "@/types/types";
import { apiClient } from "./PatientService";

const KpiVariableOptions: string[] = [
    "PPC",
    "PICm",
    "LICOX",
    "Pupilles",
    "PVCm",
    "PAm",
    "ETCO2",
    "PaCO2",
    "Glycemie",
    "INR",
    "Plaquettes",
    "Temperature",
    "TeteLit",
]
      
const findAll = async (noadmsip: number) => {
    const response = await apiClient.get<KpiData[]>(`/patients/${noadmsip}/kpis`)
    return response.data
}
  
const findByVariable = async (noadmsip: number, kpi: string) => {
    const filteredKpiOptions = KpiVariableOptions.filter((k) => k === kpi);
    if (!filteredKpiOptions) return;

    const response = await apiClient.get<KpiData[]>(`/patients/${noadmsip}/kpis/${kpi}`)
    return response.data
}

const findAllByTimeFrame = async (noadmsip: number, timeFrame: number) => {
    const response = await apiClient.get<KpiData[]>(`/patients/${noadmsip}/kpis/timeFrame/${timeFrame}`)
    return response.data
}
  
const KpiService = {
    findAll,
    findByVariable,
    findAllByTimeFrame,
}
  
export default KpiService
  