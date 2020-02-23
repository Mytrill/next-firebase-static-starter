import { FetchedDocument } from "./types"
import { convertRestToDocument, fetchFirestoreJSON, getUrl } from "./utils"

export interface FetchDocumentOptions {
  throwErrorOnNotFound?: boolean
}

export async function fetchDocument<T>(path: string, options: FetchDocumentOptions = {}): Promise<FetchedDocument & T> {
  try {
    const doc = await fetchFirestoreJSON(getUrl(path))
    const result = convertRestToDocument<T>(doc)
    return result
  } catch (err) {
    if (err.code === 404 && !options.throwErrorOnNotFound) {
      return undefined
    }
    throw err
  }
}
