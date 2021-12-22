import { object, string, SchemaOf, boolean, date, number, ref } from "yup";
import { IFormValidation } from "../@types/validation";

export const formSchema = (): SchemaOf<IFormValidation> => {
    object().shape({
        jobTitle: 
          string(
              //"This Field Should Be String"
          )
          .oneOf(['ReactJs'],'Pleace Select ReactJs')
          .required("This Field Is Required"),
    
        jobField: string(
            //"This Field Should Be Text"
            ).oneOf(['TypeScript'],'Pleace Select TypeScript').required("This Field Is Requird"),
    
        jobLocation: string(
            //"This Field Should Be Text"
            ).oneOf(['Front_End_developer'],'Pleace Select Front_End_developer').required("This Field Is Requird"),
    
        startDate: date().required('This Field Is Requird'),
    
        endDate: date().when('currentlyWork',{
          is:"Currently Work There",
          then:date(),
          otherwise: date().min(ref('startDate', 
          //'end data must be more than start date'
          )).required('This Field Is Required')
        }),
    
        currentlyWork: boolean(),
    
        jobDescription: string(
            //"This Field Should Be Text"
            ).required("This Field Is Requird"),
    
        companyName: 
          string(
              //"This Field Should Be Text"
              )
          .required("This Field Is Required"),
    
        companyAddress: string(
            //"This Field Should Be Text"
            ).required("This Field Is Required"),
    
        companyIndustry: string(
            //"This Field Should Be Text"
            ).required("This Field Is Required"),
    
        companySize: 
          number(
              //"This Field Should Be Number"
              )
          .positive()
          .integer("It should be integer number")
          .required("This Field Is Required"),
    
        companySector: string(
            //"This Field Should Be Text"
            ).required("This Field Is Required"),
    
        supervisorName: string(
            //"This Field Should Be Text"
            ).required("This Field Is Required"),
    
        numOfSupervised: 
          number(
              //"This Field Should Be Number"
              )
          .positive()
          .integer("It should be integer number")
          .required("This Field Is Required"),
    
          reasonOfLeaving: string(
              //"This Field Should Be Text"
              ).required("This Field Is Required"),
    
        startSalary: 
          number(
              //"This Field Should Be Number"
              )
          .positive()
          .integer("It should be integer number")
          .required("This Field Is Required"),
    
        endSalary: 
          number(
              //"This Field Should Be Number"
              )
          .positive()
          .integer("It should be integer number")
          .required("This Field Is Required"),
        
        currency: string().required("This Field Is Required"),
      });
 }