export interface ICompany {
  name: string;
  country: string;
  taxId: string;
}
export enum EnumContractStatus {
  ACTIVE ='active',
  SIGNATURE_PENDING = 'signature_pending',
}

export interface IContract {
  id: string;
  contractor: IContractor;
  status: EnumContractStatus;
  country: string;
  company: ICompany;
}
export interface IContractor {
  id: string;
  name: string;
  contract: IContract
}
