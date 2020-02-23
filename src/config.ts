import { StringMap } from "./common/types"

/*
 * This file contains configuration that is shared between the client (nextjs' app) and the server (firebase functions).
 *
 *
 * /!\/!\/!\ DO NOT PUT SENSITIVE INFORMATION IN HERE, THIS GETS BUNDLED WITH THE CLIENT /!\/!\/!\
 * /!\/!\/!\ DO NOT PUT SENSITIVE INFORMATION IN HERE, THIS GETS BUNDLED WITH THE CLIENT /!\/!\/!\
 * /!\/!\/!\ DO NOT PUT SENSITIVE INFORMATION IN HERE, THIS GETS BUNDLED WITH THE CLIENT /!\/!\/!\
 * /!\/!\/!\ DO NOT PUT SENSITIVE INFORMATION IN HERE, THIS GETS BUNDLED WITH THE CLIENT /!\/!\/!\
 * /!\/!\/!\ DO NOT PUT SENSITIVE INFORMATION IN HERE, THIS GETS BUNDLED WITH THE CLIENT /!\/!\/!\
 *
 */

export interface EnvConfig {
  ENV: "development" | "production"
  FIREBASE_CONFIG: {
    apiKey: string
    authDomain: string
    databaseURL: string
    storageBucket: string
    projectId: string
    appId?: string
  }
}

const ENVIRONMENTS: StringMap<EnvConfig> = {
  // TODO fill these in
  development: {
    ENV: "development",
    FIREBASE_CONFIG: {
      apiKey: "TODO",
      projectId: "<development-projectId>",
      authDomain: "<development-projectId>.firebaseapp.com",
      databaseURL: "<development-projectId>.firebaseio.com",
      storageBucket: "gs://<development-projectId>.appspot.com",
    },
  },
  production: {
    ENV: "production",
    FIREBASE_CONFIG: {
      apiKey: "TODO",
      projectId: "<production-projectId>",
      authDomain: "<production-projectId>.firebaseapp.com",
      databaseURL: "<production-projectId>.firebaseio.com",
      storageBucket: "gs://<production-projectId>.appspot.com",
    },
  },
}

// could be imported by the client or the server
const envName = process.env.ENV || process.env.NODE_ENV || "development"

// eslint-disable-next-line no-console
console.info(`Using configuration for environment: ${envName}`)

/** Environment specific variables, used by Nextjs's app and server functions. */
export const env: EnvConfig = ENVIRONMENTS[envName.toLowerCase()]
