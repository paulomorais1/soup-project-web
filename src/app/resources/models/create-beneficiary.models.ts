export class IAddress {
  public street: string | undefined;
  public city: string | undefined;
  public zipCode: string | undefined;
  public district: string | undefined;
}

export type IHousingCondition = 'CASA PRÓPRIA' | 'ALUGADA' | 'OUTROS';

export class IHome {
  constructor(

    public housingCondition: IHousingCondition | undefined,
    public value?: number | undefined,
    )
    {}
  }
 
export class IFamilyScholarship {
  public familyStatus: string | undefined;
  public familyValue?: number | undefined;
}
export class IReceivePension {
  public statusPension: string | undefined;
  public valueReceive?: number | undefined;
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
  public statusHasincome: string | undefined;
  public valueHasincome?: number | undefined;
}
export class ISpecialNeeds {
  public statusSpecialNeeds: string | undefined;
  public whatDisability: string | undefined;
}
export class IResidentHasIllness {
  public statusIllness: string | undefined;
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
