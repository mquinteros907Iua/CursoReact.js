import { useState, useEffect } from "react"

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        error: null
    })

    const { data, isLoading, error } = state

    useEffect(() => {
        const getFetch = async () => {
            if (!url) return
            try {
                const res = await fetch(url)
                const data = await res.json()
                console.log(data)
                setState({
                    data,
                    isLoading: false,
                    error: null
                })
            } catch (error) {
                setState({
                    data: null,
                    error: error,
                    isLoading: false
                })
            }
        }

        getFetch()
    }, [url])

    return {
        data,
        isLoading,
        error
    }
}