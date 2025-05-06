import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { ProductType } from "../components/Products/ProductType";
import { LoginType } from "../components/Login/LoginType";

const xtoken = localStorage.getItem("t");

export const backendApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/api/" }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "auth/",
        method: "POST",
        body: credentials,
      }),
      transformResponse: (response: { data: LoginType }) => {
        return response.data;
      },
    }),
    fetchProducts: builder.query({
      query: () => {
        return { url: "product/", headers: { xtoken } };
      },
      providesTags: ["Products"],
      transformResponse: (response: { data: ProductType[] }) => {
        return response.data;
      },
    }),
  }),
});

export const { useLoginMutation, useFetchProductsQuery } = backendApi;
