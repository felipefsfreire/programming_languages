
const {gets, print} = require('./a6_ex_import_export')

const total_number = gets()
let max_value = 0

for (let i = 0; i < total_number; i++) {
    const number = gets();
    if (number > max_value){
        max_value = number
    }
}

print(max_value)