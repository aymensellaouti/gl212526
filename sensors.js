/**
 * le tableau des appareil connecté de la ville
 */
const sensors = [
  { id: "TEMP_01", type: "temperature", value: 22.5, status: "active" },
  { id: "POLL_01", type: "pollution", value: 85, status: "active" },
  { id: "HUM_01", type: "humidity", value: 45, status: "inactive" },
  { id: "TEMP_02", type: "temperature", value: 31.0, status: "active" },
  { id: "POLL_02", type: "pollution", value: 42, status: "active" },
  { id: "TEMP_03", type: "temperature", value: -5.0, status: "faulty" },
];
//Calculer la température moyenne de tous les capteurs de type 
// "temperature" (uniquement ceux qui ne sont pas "faulty").
const notFaultyTemperature = sensors.filter(
  (sensor) => sensor.status != "faulty" && sensor.type == "temperature",
);
const avgNotFaultyTemperature = notFaultyTemperature.reduce(
    (acc, sensor) => acc + sensor.value, 0
) / notFaultyTemperature.length;

console.log(avgNotFaultyTemperature);
