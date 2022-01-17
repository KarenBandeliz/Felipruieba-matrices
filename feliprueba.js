var carreritas =["Lucía", "Roberto", "María", "Jesus", "Andrea", "José"];
console.log(carreritas);
carreritas.splice (4, 1);
carreritas.splice (2, 0, "Andrea");
console.log(carreritas);
carreritas.pop();
console.log(carreritas);
carreritas.splice(1 ,0, "Cristobal", "Fernanda", "Armando");
console.log(carreritas);
carreritas.unshift("Federico");
console.log(carreritas)