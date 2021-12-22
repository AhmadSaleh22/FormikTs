export interface IFormValidation {
    jobTitle: string
    jobField: string
    jobLocation: string
    startDate: Date | string,
    endDate?: Date | string,
    currentlyWork?: boolean,
    jobDescription: string
    companyName: string
    companyAddress: string
    companyIndustry: string
    companySize: number,
    companySector: string
    supervisorName: string
    numOfSupervised: number,
    reasonOfLeaving: string
    startSalary: number,
    endSalary: number,
    currency: string,
  }