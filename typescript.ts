// // console.log('Hello World')

// let firstName: string = 'Fanessa';
// let age: number = 49
// let good: boolean =true 
// let fruits: string[] = 
// [
//     'apple',
//     'pear',
//     'pineapple'
// ]

// // console.log
// (`
// First Name: ${firstName}
// Your Age: ${age}
// You have many fruits: ${fruits}
// `)

// enum taxForm{ 
//     standard = 1040,
//     chiildcredit ="1065",
//     Scorp ='1121',
//     CCorp = "1120s",
// }
//     // console.log 
//     (` you need form ${taxForm.CCorp}`) 

//     function getFruit(index:number) :string {
//          return fruits [index]


//         function debug(message: string) : void{
//             // console.log(message)

//             debug('OMG Np return')
//         }


//     }
    // console.log (`you choose an ${getFruit(0)}`)

    interface teacher {
        name:string ,
        years:number,
        subject:string[],
        age:number
    }

    let damian: teacher = {
        name: "damian",
        years: 20,
        subject: ['javascript', 'typescript'],
        age: 49
    }

    console.log(damian)