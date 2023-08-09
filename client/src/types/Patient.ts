export default interface IPatient {
    noadmsip: number;
    firstname: string;
    lastname: string;
    dateofbirth: string;
    gender:'M' | 'F';
    lifetimenumber: number;
    weight: number;
    idealweight: number;
    height: number;
    primarydiagnosis: string;
    lastloadingtime?: number;
}