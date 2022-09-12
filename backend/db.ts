import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import config from './config';

// @ts-ignore
const app = initializeApp(config)
const db = getFirestore(app);

export default db;
