const employees={
    emp1:{firstname: "Raju", lastname:"G"},
    emp2:{firstname: "shree", lastname: "charan"},
    emp3:{firstname: "kavya", lastname: "k"}
}

for(let data in employees){
    console.log(data)

    console.log("loop starts")
    console.log(employees[data].firstname)
    console.log("loop ends")
}