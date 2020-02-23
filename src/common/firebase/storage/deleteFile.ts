import "firebase/storage"

import firebase from "firebase/app"

/**
 * Delete the file at the given path.
 */
export async function deleteFile(path: string) {
  const ref = firebase.storage().ref(path)
  await ref.delete()
}
