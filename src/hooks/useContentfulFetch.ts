import { useEffect, useState } from 'react'

const spaceId = '30xxtcjxo5gv'
const headers = {
  'Content-Type': 'application/json',
  Authorization: 'Bearer E-PwyI0Ukdl_Ju5KuvkYvM4t73a9o7kV7JqAGc5cE9k',
}

export interface ContentfulFetch {
  isLoading: boolean
  fetchData: any
  error: unknown | null
}

const useContentfulFetch = (query: string) => {
  const [isLoading, setIsLoading] = useState(false)
  const [fetchData, setFetchData] = useState<string | null>(null)
  const [error, setError] = useState<unknown | null>(null)

  useEffect(() => {
    const body = JSON.stringify({ query })
    setIsLoading(true)
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://graphql.contentful.com/content/v1/spaces/${spaceId}`,
          {
            method: 'POST',
            headers: headers,
            body: body,
          },
        )
        if (response.ok) {
          const jsonResponse = await response.json()
          setFetchData(jsonResponse)
          setIsLoading(false)
        }
      } catch (error) {
        setError(error)
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const contentfulFetch: ContentfulFetch = { isLoading, fetchData, error }
  return contentfulFetch
}

export default useContentfulFetch
