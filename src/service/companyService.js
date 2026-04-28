
// company_list
import {api} from "../axios";

const companyService = {
    getAllCompanies: async () => {
        const response = await api.get("/company_list");
        console.log(response.data);
        return response.data
    },
}   

export const {
    getAllCompanies,
} = companyService;

getAllCompanies();  