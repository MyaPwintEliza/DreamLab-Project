
import { fetchArticleAuthors, createArticleAuthor, updateArticleAuthor, deleteArticleAuthor, fetchBookAuthors, createBookAuthor, updateBookAuthor, deleteBookAuthor } from "../services/api/AuthorsApi"
import { useQuery, useMutation } from "@tanstack/react-query"

export const useArticleAuthorsData = () => {
    return useQuery(['articleauthors'], fetchArticleAuthors);
}

export const useCreateArticleAuthor = () => {
    return useMutation(createArticleAuthor);
}

export const useUpdateArticleAuthor = () => {
    return useMutation(updateArticleAuthor);
}

export const useDeleteArticleAuthor = () => {
    return useMutation(deleteArticleAuthor)
}
// Book
export const useBookAuthorsData = () => {
    return useQuery(['bookauthors'], fetchBookAuthors);
}

export const useCreateBookAuthor = () => {
    return useMutation(createBookAuthor);
}

export const useUpdateBookAuthor = () => {
    return useMutation(updateBookAuthor);
}

export const useDeleteBookAuthor = () => {
    return useMutation(deleteBookAuthor)
}