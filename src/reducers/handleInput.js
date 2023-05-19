const initState = {
  email: "", //lưu vào đay lưu cái gì vào ông
  password: "",
  firstName: "",
  lastName: "",
  CreateEmail: "",
  phoneNumber: "",
  gender: "",
  dataEditUser: [],
  editFirstname: "",
  editLastname: "",
  editEmail: "",
  editPhone: "",
  editGender: "",
};
const handleEmailuser = (state = initState, action) => {
  let data;
  switch (action.type) {
    case "email":
      data = {
        ...state,
        email: action.payload,
      };
      break;
    case "password":
      data = {
        ...state,
        password: action.payload,
      };
      break;
    case "createFirstName":
      data = {
        ...state,
        firstName: action.payload,
      };
      break;
    case "createLastName":
      data = {
        ...state,
        lastName: action.payload,
      };
      break;
    case "createEmail":
      data = {
        ...state,
        CreateEmail: action.payload,
      };
      break;
    case "createPhoneNumber":
      data = {
        ...state,
        phoneNumber: action.payload,
      };
      break;
    case "createGender":
      data = {
        ...state,
        gender: action.payload,
      };
      break;
    case "getidEditdata":
      data = {
        ...state,
        editFirstname: action.payload.firstName,
        editLastname: action.payload.lastName,
        editEmail: action.payload.email,
        editPhone: action.payload.phoneNumber,
        editGender: action.payload.gender,
        dataEditUser: action.payload
      };
      
      
      break;
    case "editFirstname":
      data = {
        ...state,
        editFirstname: action.payload,
      };
      break;
    case "editLastname":
      data = {
        ...state,
        editLastname: action.payload,
      };
      break;
    case "editEmail":
      data = {
        ...state,
        editEmail: action.payload,
      };
      break;
    case "editPhone":
      data = {
        ...state,
        editPhone: action.payload,
      };
      break;
    case "editGender":
      data = {
        ...state,
        editGender: action.payload,
      };
      break;
    default:
      return state ?? initState;
  }
  return data;
};
export default handleEmailuser;
