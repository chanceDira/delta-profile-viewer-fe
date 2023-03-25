import algoliasearch from 'algoliasearch'

export const CLIENT = algoliasearch(process.env.NEXT_PUBLIC_APPLICATION_ID as string, process.env.NEXT_PUBLIC_API_KEY as string)

