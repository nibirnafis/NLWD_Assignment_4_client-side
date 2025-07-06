import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const baseApi = createApi({
    reducerPath: "baseApi",
    // baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000"}),
    baseQuery: fetchBaseQuery({baseUrl: "https://nlwd-assignment-4.onrender.com"}),
    endpoints: (build) => ({
        getBooks: build.query({
            query: () => "/books",
        }),
        getBook: build.query({
            query: (id) => `/books/${id}`,
        }),
        addBook: build.mutation({
            query: (newBook) => ({
                url: "/create-book",
                method: "POST",
                body: newBook,
            }),
        }),
        editBook: build.mutation({
            query: ({id, editedBook}) => ({
                url: `/edit-book/${id}`,
                method: "PUT",
                body: editedBook,
            }),
        }),
        deleteBook: build.mutation({
            query: (id) => ({
                url: `/delete-book/${id}`,
                method: "DELETE"
            }),
        }),
        borrowBook: build.mutation({
            query: ({bookId, info}) => ({
                url: `/borrow/${bookId}`,
                method: "POST",
                body: info,
            }),
        }),
        getBorrowSummary: build.query({
            query: () => "/borrow-summary",
        }),
    })
})


export const { useGetBooksQuery, useGetBookQuery, useAddBookMutation, useEditBookMutation, useDeleteBookMutation, useBorrowBookMutation, useGetBorrowSummaryQuery } = baseApi