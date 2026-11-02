

// arayname=[]


// arr1=[1,2,3,4,5,6]
// arr2=[43,true,"bhavya",{firstname:"bhavya",lastname:"m"}]

// console.log(arr1[1])
// console.log(arr2[3].firstname,arr2[3].lastname)


//----------------------------
//.length

// arr3=[1,3,2,4,4,4,3,2,6,7,0]
// console.log(arr3.length)

// console.log(arr3[arr3.length-1])//last  element



//-------------

//sort

// arr4=[2,7,0,3,3]
// arr5=arr4.sort()
// console.log(arr5)

//---------------------
//.split

// str="java"
// arr6=str.split("")
// console.log(arr6)

//-----------------
//push

// arr8=["eat","sleep","read"]
// arr8.push("drink")
// console.log(arr8)

//-------------
//unshift
// arr8=["eat","sleep","read"]
// arr8.unshift("drink")
// console.log(arr8)

//--------------------
//join

menu2=[

    'admin',         'pim',
    'leave',           'time']

    str2=menu2.join("")
    console.log(str2)// jobtitle = ["SDET","C0011","CTO11"]
// for(let title of jobtitle){
// console.log("loop starts here")
// console.log(title)
// console.log("loop ends here")
// }
// employees =
//  [{firstname:"bhavya",lastname:"m"},
//     {firstname:"ani",lastname:"m"},
//     {firstname:"bhuuu",lastname:"m"},
//     {firstname:"siddu",lastname:"m"}
// ]
// for(let emp of employees){
//     console.log("loop starts here")
// console.log(emp.firstname)
// console.log(emp.lastname)
// console.log("loop ends here")
// }
//-------------------------
//for each
// jobtitle = ["SDET","C0011","CTO11"]
// jobtitle.forEach((title) => {
//     console.log("loop starts here")
//     console.log(title)
//     console.log("loop ends here")
// })
// employees =
//  [{firstname:"bhavya",lastname:"m"},
//     {firstname:"ani",lastname:"m"},
//     {firstname:"bhuuu",lastname:"m"},
//     {firstname:"siddu",lastname:"m"}
// ]
// employees.forEach((emp) => {
//     console.log("loop starts here")
//     console.log(emp.firstname)
//     console.log(emp.lastname)
//     console.log("loop ends here")
// })
//---------------------
//map
// arr=[1,2,9,4,3]
// arr2=arr.map(element => element+3)
// console.log(arr2)
// arr=[1,2,9,4,3]
// arr2=arr.map(element => element/2)
// console.log(arr2)
//---------------------
//filter
// arr2 = ["bhavya", "ani", "bhuuu", "siddu"]
// arr3 = arr2.filter(element => element.includes("a"))
// console.log(arr3)
// arr5 = [1,2,3,6,7,8,,10,3,5,2,4,5,6,7,8,9]
// oddnumbers = arr5.filter(element => element%2==0)
// console.log(oddnumbers)
//--------------------------
//reduce
arr5 = [1, 2, 3, 6, 7, 8, , 10, 3, 5, 2, 4, 5, 6, 7, 8, 9]
const sum = arr5.reduce((total, element) => total + element, 0)
console.log(sum)

