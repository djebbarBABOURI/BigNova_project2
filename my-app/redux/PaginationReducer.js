import { createSlice } from "@reduxjs/toolkit";

// Définir un état initial avec des valeurs par défaut
const initialState = {
    page: 1,
    limit: 10,
};

initialState.page = parseInt(localStorage.getItem("page") || initialState.page);
initialState.limit = parseInt(localStorage.getItem("limit") || initialState.limit);
const paginationSlice = createSlice({
    name: "paginate",
    initialState,
    reducers: {
        editPagination: (state, action) => {
            const { page, limit } = action.payload;

            // Sauvegarder dans le localStorage uniquement côté client
            if (typeof window !== "undefined") {
                if (page) localStorage.setItem("page", page);
                if (limit) localStorage.setItem("limit", limit);
            }

            state.page = page || state.page;
            state.limit = limit || state.limit;
        },
    },
});

export const { editPagination } = paginationSlice.actions;
export default paginationSlice.reducer;
