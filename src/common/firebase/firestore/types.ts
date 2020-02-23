import { StringMap } from "../../types"

export type QueryOperand =
  | "<"
  | "<="
  | "=="
  | ">="
  | ">"
  | "array-contains"
  | "is-nan"
  | "is-null"
  | "starts-with"
  | "in"
  | "array-contains-any"

export interface QueryCondition {
  field: string
  operand: QueryOperand
  value: any
}

export type QueryOrderByDirection = "asc" | "desc"

export interface QueryOrderBy {
  field: string
  direction: QueryOrderByDirection
}

export interface Query {
  conditions?: QueryCondition[]
  orderBy?: QueryOrderBy[]
  offset?: number
  limit?: number
}

export interface FetchedDocumentInfo {
  id: string
  path: string
  collection: string
  createTime: Date
  updateTime: Date
}

export type FetchedDocument = {
  ___doc___: FetchedDocumentInfo
}

export interface DocumentHookQuery {
  path: string
  conditions?: QueryCondition[]
  orderBy?: QueryOrderBy[]
}

export type PathOrQuery = string | DocumentHookQuery

export interface Paths extends StringMap<string> {}

export interface PathsOrQueries extends StringMap<PathOrQuery> {}
