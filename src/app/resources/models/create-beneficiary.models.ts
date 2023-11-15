export class IAddress {
  public street: string | undefined;
  public city: string | undefined;
  public zipCode: string | undefined;
}

export type IHousingCondition = 'CASA PRÓPRIA' | 'ALUGADA' | 'OUTROS';

export class IHome {
  public housingCondition: IHousingCondition | undefined;
  public value?: number | undefined;
}
export class IFamilyScholarship {
  public status: string | undefined;
  public value?: number | undefined;
}
export class IReceivePension {
  public status: string | undefined;
  public value?: number | undefined;
}

export class ICompositionFamily {
  public name: string | undefined;
  public surname: string | undefined;
  public kinship: string | undefined;
  public age: number | undefined;
  public profession: string | undefined;
  public hasincome: IHasincome | undefined;
  public specialNeeds: ISpecialNeeds | undefined;
}
export class IHasincome {
  public status: string | undefined;
  public value?: number | undefined;
}
export class ISpecialNeeds {
  public status: string | undefined;
  public whatDisability: string | undefined;
}
export class IResidentHasIllness {
  public status: string | undefined;
  public which: string | undefined;
}
export interface IBeneficiary {
  id: string | undefined;
  name: string | undefined;
  surname: string | undefined;
  phoneNumber: string | undefined;
  familyReceivepension: string | undefined
  valuePension: number | undefined;
  rg: string | undefined;
  cpf: string | undefined;
  dateOfBirth: string | undefined;
  address: IAddress | undefined;
  home: IHome | undefined;
  professionFamilyresponsible: string | undefined;
  familyScholarship: IFamilyScholarship | undefined;
  receivePension: IReceivePension | undefined;
  compositionFamily: ICompositionFamily | undefined;
  basicBasketDeliveryDate: string | undefined;
  residentHasIllness: IResidentHasIllness | undefined;
  additionalDetails: string | undefined;
  interviewer: string | undefined;
}
