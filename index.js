var readlineSync = require("readline-sync");
var chalk = require('chalk');
function main() {
    do {
        console.log("-------------------------");
        var options = [
            "Exit the Program",
            "Matrix Addition",
            "Matrix Subtraction",
            "Matrix transpose"
        ];

        console.clear();
        options.forEach((elem, index) => {
            console.log(chalk.blue(`${index}. ${elem}`));
        });
        var flag = 1;
        var correct_val = ['y', 'Y', 'n', 'N'];

        var input;
        input = readlineSync.questionInt(chalk.green("Enter Your Option :"));

        switch (input) {

            case 0:
                console.log(chalk.yellow('Bye. Bye. Adios'));
                process.exit(0);
            case 1:
                addition();
                break;
            case 2:
                substraction();
                break;
            case 3:
                diagonal();
                break;
            case 4:
                transpose();
                break;
            default:
                flag = 0;
                console.log(chalk.red("Bad Input"));



        }


        // if not bad input 
        if (flag != 0) {
            var take = readlineSync.question(chalk.green("Would You Like To Continue? (y or n)"));

            while (correct_val.includes(take) === false) {
                console.log(chalk.red('wrong input should be y or n '));
                take = readlineSync.question(chalk.green("Would You Like To Continue? (y or n)"));

                if (take === true) {
                    break;
                }

            }

        }
        else {
            console.log(chalk.red("Bad Input"));
            // bad input ask again 
            take = 'y';
        }





    } while (take === 'y' || take === 'Y');
}

main();


function createMatrix() {
    var array = [];
    var rows = readlineSync.questionInt(chalk.green("How many rows do you want your matrix to have "));
    var columns = readlineSync.questionInt(chalk.green("How many columns do you want your matrix to have "));


    for (var i = 0; i < rows; i++) {
        array.push([]);
    }
    console.log(array);

    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
            array[i][j] = readlineSync.questionInt(`value in ${i} and ${j} `);

        }

    }
    console.log(array);

    return array;
}
/*
console.log('Matrix 1')
var matrix1 = createMatrix();
console.log('Matrix 2')
var matrix2 = createMatrix();
*/
function addition() {
    /*
    var resultMatrix = []
    for (i = 0; i < matrix1.length; i++) {
        for (j = 0; j < matrix1[i].length; j++)
            resultMatrix = matrix1[i][j] + matrix2[i][j];
    }*/
    console.log(chalk.magenta("addition"));
}

function substraction() {
    //createMatrix();
    console.log(chalk.magenta("subtraction"));

}

function diagonal() {
    //createMatrix();
    console.log(chalk.magenta("diagonal"));

}

function transpose() {
    //createMatrix();
    console.log(chalk.magenta("transpose"));

}






