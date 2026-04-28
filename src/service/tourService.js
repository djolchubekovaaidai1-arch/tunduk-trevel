
import {api} from "../axios";

const tourService = {
    getAllTours: async () => { 
        const response = await api.get("/tour_list");
        console.log(response.data);
        return response.data
    },
}

export const {
    getAllTours,
} = tourService;

getAllTours();