import {GET_PASSED_USER_INFO_FROM_API ,} from "../../const"

const initState = {
    basic: {
      Citizenship: "",
      OjCondition: "",
      PersonalN: "",
      Position: "",
      branch: "",
      corpMail: "",
      dateOfBirth: "",
      fullName: "",
      homes: "",
      insideN: "",
      mobile: "",
      personalMail: "",
      placeOfBirth: "",
      status: "",
      places:"",
    },
    identity: {
      documentN: "",
      documentType: "",
      issuingAgency: "",
      releaseDater: "",
      validFor: "",
    },
    actualAddress: {
      address: "",
      city: "",
    },
    legalAddress: {
      address: "",
      city: "",
    },
    corporatePhones: [],
    companyNumber: {
      changeDate: "",
      limit: "",
      number: "",
      serviceGroup: "",
      corporateNumberOfRelatives: [],
    },
};

export default function dashboardReducer(state = initState, action) {

    switch (action.type) {
      case GET_PASSED_USER_INFO_FROM_API:
        const {
          basic,
          identity,
          actualAddress,
          LegalAddress,
          CORPORATE_PHONES,
          companyNumber,
        } = action.person[0];
        return {
          ...state,
          basic: {
            Citizenship: basic.Citizenship,
            OjCondition: basic.OjCondition,
            PersonalN: basic.PersonalN,
            Position: basic.Position,
            branch: basic.branch,
            corpMail: basic.corpMail,
            dateOfBirth: basic.dateOfBirth,
            fullName: basic.fullName,
            homes: basic.homes,
            insideN: basic.insideN,
            mobile: basic.mobile,
            personalMail: basic.personalMail,
            placeOfBirth: basic.placeOfBirth,
            status: basic.status,
            places:basic.places,
        },
        identity: {
          documentN: identity.documentN,
          documentType: identity.documentType,
          issuingAgency: identity.issuingAgency,
          releaseDater: identity.releaseDater,
          validFor: identity.validFor,
        },
        actualAddress: {
          address: actualAddress.address,
          city: actualAddress.city,
        },
        legalAddress: {
          address: LegalAddress.address,
          city: LegalAddress.city,
        },
        corporatePhones: [...CORPORATE_PHONES],
        companyNumber: {
          changeDate: companyNumber.changeDate,
          limit: companyNumber.limit,
          number: companyNumber.number,
          serviceGroup: companyNumber.serviceGroup,
          corporateNumberOfRelatives: [
            ...companyNumber.corporateNumberOfRelatives,
          ],
        },
    };
      default:
        return state;
    }
  };