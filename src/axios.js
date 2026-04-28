import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_SUPABASE_URL + "/rest/v1",
    headers: {
        apikey: import.meta.env.VITE_SUPABASE_KEY,
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_KEY}`,
    },

});