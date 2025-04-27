import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { ProductType } from "../components/Products/ProductType";

const xtoken = "abc";

export const backendApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/api/" }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    fetchProducts: builder.query({
      query: () => {
        return { url: "product/", headers: { xtoken } };
      },
      providesTags: ["Products"],
      transformResponse: (response: ProductType[]) => {
        return response;
      },
    }),
  }),
});

export const { useFetchProductsQuery } = backendApi;
