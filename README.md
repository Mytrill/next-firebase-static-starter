# next-firebase-static-starter

**This project is a work in progress!**

At the moment, this project includes common code we tend to use over and over again, including:

- the overall structure to bootstrap a static project on firebase with nextjs:
  this project is not dynamically rendered using server functions, just exported and hosted on static hosting
- configuration for
  - nextjs
  - tailwindcss + postcss
- a few random useful react hooks
- custom firebase hooks for firestore, storage and authentication
- custom hooks to handle form state management (compatible with the firebase hooks) built on top of `formik`
- custom components built on top of `tailwindcss`
- and more

## Setting up CORS for firebase storage

This may be needed if you download files from firebase storage in the browser.

Create a file named `cors.json`:

```json
[
  {
    "origin": ["*"],
    "method": ["GET"],
    "maxAgeSeconds": 3600
  }
]
```

Then run:

```sh
gsutil cors set cors.json gs://<PROJECT ID>.appspot.com

# e.g.
gsutil cors set cors.json gs://we-make-stories-prod.appspot.com

```
