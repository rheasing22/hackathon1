var readlineSync = require("readline-sync");
var chalk = require('chalk');


/*
  function that displays the menu
*/
function displayMenu() {
    var options = [
        'Exit the program',
        'Matrix Addition',
        'Matrix Subtraction',
        'Extract Matrix Diagonal',
        'Matrix Transpose'
    ];

    options.forEach((elem, index) => {
        console.log(chalk.blue(`${index}. ${elem}`));
    });


}

/*
checks if the var to exit the 
do while loop is 'y' 'n' 'Y' or 'N' only 

*/
function isAnsValid(ans) {
    if (ans == 'y' || ans == 'Y') {
        return true;
    }
    else if (ans == 'n' || ans == 'N') {
        return false;
    }
    else {
        console.log(chalk.red.bold(`Wrong input:${ans}`));
        console.log(chalk.red.bold(`enter either y or n`));
        return true;
    }
}

function main() {
    console.clear(); // clear the menu the first time we run npm start

    do {

        var loop = false; // this var lets us stay or exit the do-while
        displayMenu();
        var choice = readlineSync.questionInt(chalk.green('Enter option: '));


        switch (choice) {
            case 0: console.log(chalk.magenta('Exiting'));
                process.exit(0);
            case 1:
                console.log('addition');
                break;
            case 2:
                console.log('sub');
                break;
            case 3:
                console.log('diagonal');
                break;
            case 4:
                console.log('transpose');
                break;
            default:
                loop = true; // rerun menu 
                console.clear();
                console.log(chalk.red.bold(`Wrong input:${choice}`));
                console.log(chalk.red.bold(`enter numbers between 0-4`));


        }
        if (loop == true) {
            continue; // this is to skip "do you want to continue?"" stmt
        }
        var ans = readlineSync.question(chalk.yellow("Do you want to continue ? (y/n): "));
        console.clear();
        loop = isAnsValid(ans);

    } while (loop);
}

main();