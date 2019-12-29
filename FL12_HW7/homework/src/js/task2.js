if (!confirm('Do you want to play a game?')) {
    alert('You did not become a billionaire, but can.');
} else {
    let firstLoopExit = 1;

    while (firstLoopExit) {
        const lowPrize = 25, mediumPrize = 50, bigPrize = 100;
        let secondLoopExit = 1;
        let maxRangeValue = 8; 
        let minRangeValue = 0;
        const prizes = [lowPrize, mediumPrize, bigPrize];
        let lvlCounter = 1;
        let prize = 0;
        const rangeValueIncrement = 4;
        let playAgain = false;
        let continueGame = false;

        while (secondLoopExit) {
            let randomNumber = Math.round(Math.random() * maxRangeValue);
            let i = 2;
            
            for (; i >= 0; i--) {
                let pocketNumber = +prompt(
`Choose a roulette pocket number from ${minRangeValue} to ${maxRangeValue} 
Attempts left: ${i + 1}
Total prize: ${prize}$
Possible prize on current attempt: ${prizes[i] * lvlCounter}`, 
                    ''
                );

                if (pocketNumber === randomNumber) {
                    prize += prizes[i] * lvlCounter;
                    break;
                }
            } 
            
            if (i < 0) {
                alert(`Thank you for your participation. Your prize is: ${prize}`);

                playAgain = confirm('Do you want to play again?');

                secondLoopExit = 0;
            }

            continueGame = confirm(
`Congratulation, you won!   Your prize is ${prize}
Do you want to continue?`,
                 ''
            );

            if (!continueGame) {
                alert(
`Thank you for your participation.
Your prize is ${prize}`
                );

                playAgain = confirm('Do you want to play again?');

                secondLoopExit = 0;
            } else {
                maxRangeValue += rangeValueIncrement;
                lvlCounter++;
            }
        }

        if (!playAgain) {
            firstLoopExit = 0;
        }
    } 
}