# seating plan

randomizes the students' seats in their respective batches and presents it in a nice UI.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FSST-OSS%2Fseating%2Ftree%2Fmain%2Fclient&env=VITE_apiKey,VITE_authDomain,VITE_projectId,VITE_storageBucket,VITE_messagingSenderId,VITE_appId&project-name=sst-seating&repository-name=sst-seating)

## Developing locally

- clone the project

```sh
git clone git@github.com:probablyArth/sst-seating.git
```

- cd into the project

```sh
cd sst-seating
```

### setting up firebase

```
cd scripts
cp .env.example .env
```

- create a new project in firebase
- create a webapp and firestore
- populate the `.env` file with the respective credentials.
- run `yarn` to install the dependencies.
- run `node script.js` to populate the firestore database.

### setting up client

- populate the `.env` file with the same credentials.

```
cd client
cp .env.example.env
```

- install the depencies and run the project.

```
yarn
yarn dev
```

## contributors

- [Parth Arora](https://github.com/partharora1610)
- [Arth Thapa](https://github.com/probablyarth)
- [Abhinav Gupta](https://github.com/abhinavgupta-de)
