import { env } from "config"
import app from "firebase/app"

export interface FirebaseConfig {
  apiKey: string
  authDomain: string
  databaseURL: string
  storageBucket: string
  projectId: string
}

export function initialize(project: FirebaseConfig = env.FIREBASE_CONFIG) {
  const initialized = app.apps.find(app => app.name === project.projectId)
  if (!initialized) {
    try {
      return app.initializeApp(project, project.projectId)
    } catch (err) {
      console.error("Error while initializing firebase app: " + project.projectId, err)
    }
  }
  return initialized
}
