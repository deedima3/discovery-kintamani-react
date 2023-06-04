import axios from "axios";
import { GraphQLClient } from "graphql-request";
import { QueryClient } from "@tanstack/react-query";

export const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_GRAPHCMS_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export const queryClient = new QueryClient();

export const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL!, {
    headers: {
        authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
});