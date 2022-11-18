import { useEffect, useState } from "react";
import getFirestoreApp from "../firebase/config";
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";

export const usePaises = () => {
  const [paises, setPaises] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const dbQuery = collection(db, "paises");
    getDocs(dbQuery)
      .then((resp) => setPaises(resp.docs.map((pais) => ({ id: pais.id, ...pais.data() }))))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return { paises, loading };
};
