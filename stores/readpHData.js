import { getDatabase, ref, onValue } from "firebase/database";
import app from "./firebaseConfig";
import { useEffect, useState } from "react";

export default function usepHData() {
  const [pHData, setPHData] = useState([]);

  useEffect(() => {
    const db = getDatabase(app); //database
    const pHRef = ref(db, "Sensor/"); //reference or yung path ng data sa database

    onValue(pHRef, (snapshot) => {
      const pHLevelValues = [];

      snapshot.forEach((sensorSnapshot) => {
        //foreach para maread lahat ng phLevel kasi may unique id each
        const rawpHLevelValues = sensorSnapshot.child("pH_Level/").val(); // child para dumiretso sa pH_level path
        //val() method para kunin values sa ph_level path
        const formattedDate = new Date(
          rawpHLevelValues.Timestamp
        ).toLocaleString(); // Format the date

        pHLevelValues.push({
          // push sa array yung json data galing database
          x: formattedDate, // timestamp
          y: rawpHLevelValues.ph_Level_Values, //phlevel values
        });
      });

      setPHData(pHLevelValues); // dito na magagamit yung usestate
    });
  }, []);

  return pHData; //return phdata para sa kabila
}
