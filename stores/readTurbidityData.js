import { getDatabase, ref, onValue } from "firebase/database";
import app from "./firebaseConfig";
import { useEffect, useState } from "react";

export default function useTurbidityData() {
  const [turbidityData, setTurbidityData] = useState([]);

  useEffect(() => {
    const db = getDatabase(app); //database
    const turbidityRef = ref(db, "Sensor/"); //reference or yung path ng data sa database

    onValue(turbidityRef, (snapshot) => {
      const turbidityLevelValues = [];

      snapshot.forEach((sensorSnapshot) => {
        //foreach para maread lahat ng turbidityLevel kasi may unique id each
        const rawturbidityLevelValues = sensorSnapshot
          .child("Turbidity_Level/")
          .val(); // child para dumiretso sa Turbidity_level path
        //val() method para kunin values sa Turbidity_level path
        const formattedDate = new Date(
          rawturbidityLevelValues.Timestamp
        ).toLocaleString(); // Format the date

        turbidityLevelValues.push({
          // push sa array yung json data galing database
          x: formattedDate, // timestamp
          y: rawturbidityLevelValues.Turbidity_Level_Values, //Turbiditylevel values
        });
      });

      setTurbidityData(turbidityLevelValues); // dito na magagamit yung usestate
    });
  }, []);

  return turbidityData; //return phdata para sa kabila
}
