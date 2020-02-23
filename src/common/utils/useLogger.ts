import { useState } from "react"
import { createContainer } from "unstated-next"

export interface LoggerHook {
  loading: boolean
  setLoading(loading: boolean): void
}

function _useLogger() {
  const [loading, setLoading] = useState(false)

  // TODO add notifications + logging of a promise + custom logging of notifications

  return {
    loading,
    setLoading,
  }
}

const Logger = createContainer<LoggerHook>(_useLogger)

export const useLogger = Logger.useContainer

export const LoggerProvider = Logger.Provider
