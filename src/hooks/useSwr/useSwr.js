"use client"
import useSWR from 'swr'

export const useSwr = (path) => {
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, isLoading, error } = useSWR(path, fetcher)
    return {
        data,
        isLoading,
        error
    }
}
