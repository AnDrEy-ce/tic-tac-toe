let tic = [];
let toe = [];
let ticKey =[];
let toeKey = [];
let counter = 0;
let finalText = document.querySelector('.finish');
let fills = document.querySelectorAll('.fill');
document.querySelector('.game').addEventListener('click',StartgameMouse)
function StartgameMouse(event){
                                                                   // Смена игроков
                                                                  
    if((event.target.classList.contains('fill')) && (!event.target.classList.contains('used'))){
        document.querySelector('.playerTurn h2').classList.toggle('playerTwo');
        if(document.querySelector('.playerTurn h2').classList.contains('playerTwo')){
            document.querySelector('.playerTurn h2').innerText = `Player 2 turn`;
        }else{
            document.querySelector('.playerTurn h2').innerText = `Player 1 turn`;
        }
    }
                                                                                 // Выставление крестиков и ноликов
    if(event.target.classList.contains('fill')){
        let fill = event.target
        if(!fill.classList.contains('used')){
            if(document.querySelector('.playerTurn h2').classList.contains('playerTwo')){
                fill.classList.remove('used');
                tic.push(Array.from(fills).findIndex(item => item == fill));
                fill.insertAdjacentHTML('afterbegin',`<img src='img/tic.png' class='tic'>`);
                fill.classList.add('tic');
                fill.classList.add('used');
                testForTic();
            }else{
                fill.classList.remove('used');
                toe.push(Array.from(fills).findIndex(item => item == fill));
                fill.insertAdjacentHTML('afterbegin',`<img src='img/toe.png' class='toe'>`)
                fill.classList.add('toe');
                fill.classList.add('used');
                testForToe();
            }
            
        }
       
    }
    if(document.querySelectorAll('.tic').length == 10){
        finishGame();
        finalText.insertAdjacentHTML('afterbegin',`<h2 class='text'>Draw</h2><button class='restart'>Заново</button>`)
        document.querySelector('.restart').addEventListener('click',restart)
    }
}
                                                                                // Проверка для крестиков
function  testForTic(){
    let last = tic[tic.length-1];
    switch (last) {
        case 0:
            if (((fills[3].classList.contains('tic')) && (fills[6].classList.contains('tic'))) || ((fills[1].classList.contains('tic')) && (fills[2].classList.contains('tic'))) || ((fills[4].classList.contains('tic')) && (fills[8].classList.contains('tic')))){
                document.querySelector('.finish').classList.toggle('hide');
                finishGame();
                finalText.insertAdjacentHTML('afterbegin',`<h2 class='text first'>First player win</h2><button class='restart'>Заново</button>`)
                document.querySelector('.restart').addEventListener('click',restart)
                
                
            }  
            break;
        case 1:
            if (((fills[0].classList.contains('tic')) && (fills[2].classList.contains('tic'))) || ((fills[4].classList.contains('tic')) && (fills[7].classList.contains('tic')))){
                document.querySelector('.finish').classList.toggle('hide');
                finishGame();
                finalText.insertAdjacentHTML('afterbegin',`<h2 class='text first'>First player win</h2><button class='restart'>Заново</button>`)
                document.querySelector('.restart').addEventListener('click',restart)
                
                
            }  
            break;
        case 2:
            if (((fills[1].classList.contains('tic')) && (fills[0].classList.contains('tic'))) || ((fills[5].classList.contains('tic')) && (fills[8].classList.contains('tic'))) || ((fills[4].classList.contains('tic')) && (fills[6].classList.contains('tic')))){
                document.querySelector('.finish').classList.toggle('hide');
                finishGame();
                finalText.insertAdjacentHTML('afterbegin',`<h2 class='text first'>First player win</h2><button class='restart'>Заново</button>`)
                document.querySelector('.restart').addEventListener('click',restart)
                
                
            }  
            break;
        case 3:
            if (((fills[0].classList.contains('tic')) && (fills[6].classList.contains('tic'))) || ((fills[4].classList.contains('tic')) && (fills[5].classList.contains('tic')))){
                document.querySelector('.finish').classList.toggle('hide');
                finishGame();
                finalText.insertAdjacentHTML('afterbegin',`<h2 class='text first'>First player win</h2><button class='restart'>Заново</button>`)
                document.querySelector('.restart').addEventListener('click',restart)
                
                
            }  
            break;
        case 4:
            if (((fills[3].classList.contains('tic')) && (fills[5].classList.contains('tic'))) || ((fills[1].classList.contains('tic')) && (fills[7].classList.contains('tic'))) || ((fills[6].classList.contains('tic')) && (fills[2].classList.contains('tic'))) || ((fills[0].classList.contains('tic')) && (fills[8].classList.contains('tic')))){
                document.querySelector('.finish').classList.toggle('hide');
                finishGame();
                finalText.insertAdjacentHTML('afterbegin',`<h2 class='text first'>First player win</h2><button class='restart'>Заново</button>`)
                document.querySelector('.restart').addEventListener('click',restart)
                
                
            }  
            break;
        case 5:
            if (((fills[3].classList.contains('tic')) && (fills[4].classList.contains('tic'))) || ((fills[2].classList.contains('tic')) && (fills[8].classList.contains('tic')))){
                document.querySelector('.finish').classList.toggle('hide');
                finishGame();
                finalText.insertAdjacentHTML('afterbegin',`<h2 class='text first'>First player win</h2><button class='restart'>Заново</button>`)
                document.querySelector('.restart').addEventListener('click',restart)
                
                
            }  
            break;
        case 6:
            if (((fills[3].classList.contains('tic')) && (fills[0].classList.contains('tic'))) || ((fills[7].classList.contains('tic')) && (fills[8].classList.contains('tic'))) || ((fills[4].classList.contains('tic')) && (fills[2].classList.contains('tic')))){
                document.querySelector('.finish').classList.toggle('hide');
                finishGame();
                finalText.insertAdjacentHTML('afterbegin',`<h2 class='text first'>First player win</h2><button class='restart'>Заново</button>`)
                document.querySelector('.restart').addEventListener('click',restart)
                
                
            }  
            break;
        case 7:
            if (((fills[4].classList.contains('tic')) && (fills[1].classList.contains('tic'))) || ((fills[6].classList.contains('tic')) && (fills[8].classList.contains('tic')))){
                document.querySelector('.finish').classList.toggle('hide');
                finishGame();
                finalText.insertAdjacentHTML('afterbegin',`<h2 class='text first'>First player win</h2><button class='restart'>Заново</button>`)
                document.querySelector('.restart').addEventListener('click',restart)
                
                
            }  
            break;
        case 8:
            if (((fills[7].classList.contains('tic')) && (fills[6].classList.contains('tic'))) || ((fills[0].classList.contains('tic')) && (fills[4].classList.contains('tic'))) || ((fills[2].classList.contains('tic')) && (fills[5].classList.contains('tic')))){
                document.querySelector('.finish').classList.toggle('hide');
                finishGame();
                
                finalText.insertAdjacentHTML('afterbegin',`<h2 class='text first'>First player win</h2><button class='restart'>Заново</button>`)
                document.querySelector('.restart').addEventListener('click',restart)
                
            }  
            break;
    }
    
}
                                                                                    // Проверка для ноликов
function  testForToe(){
    let last = toe[toe.length-1];
    switch (last) {
        case 0:
            if (((fills[3].classList.contains('toe')) && (fills[6].classList.contains('toe'))) || ((fills[1].classList.contains('toe')) && (fills[2].classList.contains('toe'))) || ((fills[4].classList.contains('toe')) && (fills[8].classList.contains('toe')))){
                document.querySelector('.finish').classList.toggle('hide');
                finishGame();
                finalText.insertAdjacentHTML('afterbegin',`<h2 class='text second'>Second player win</h2><button class='restart'>Заново</button>`)
                document.querySelector('.restart').addEventListener('click',restart)
                
                
            }  
            break;
        case 1:
            if (((fills[0].classList.contains('toe')) && (fills[2].classList.contains('toe'))) || ((fills[4].classList.contains('toe')) && (fills[7].classList.contains('toe')))){
                document.querySelector('.finish').classList.toggle('hide');
                finishGame();
                finalText.insertAdjacentHTML('afterbegin',`<h2 class='text second'>Second player win</h2><button class='restart'>Заново</button>`)
                document.querySelector('.restart').addEventListener('click',restart)
                
                
            }  
            break;
        case 2:
            if (((fills[1].classList.contains('toe')) && (fills[0].classList.contains('toe'))) || ((fills[5].classList.contains('toe')) && (fills[8].classList.contains('toe'))) || ((fills[4].classList.contains('toe')) && (fills[6].classList.contains('toe')))){
                document.querySelector('.finish').classList.toggle('hide');
                finishGame();
                finalText.insertAdjacentHTML('afterbegin',`<h2 class='text second'>Second player win</h2><button class='restart'>Заново</button>`)
                document.querySelector('.restart').addEventListener('click',restart)
                
                
            }  
            break;
        case 3:
            if (((fills[0].classList.contains('toe')) && (fills[6].classList.contains('toe'))) || ((fills[4].classList.contains('toe')) && (fills[5].classList.contains('toe')))){
                document.querySelector('.finish').classList.toggle('hide');
                finishGame();
                finalText.insertAdjacentHTML('afterbegin',`<h2 class='text second'>Second player win</h2><button class='restart'>Заново</button>`)
                document.querySelector('.restart').addEventListener('click',restart)
                
                
            }  
            break;
        case 4:
            if (((fills[3].classList.contains('toe')) && (fills[5].classList.contains('toe'))) || ((fills[1].classList.contains('toe')) && (fills[7].classList.contains('toe'))) || ((fills[6].classList.contains('toe')) && (fills[2].classList.contains('toe'))) || ((fills[0].classList.contains('toe')) && (fills[8].classList.contains('toe')))){
                document.querySelector('.finish').classList.toggle('hide');
                finishGame();
                finalText.insertAdjacentHTML('afterbegin',`<h2 class='text second'>Second player win</h2><button class='restart'>Заново</button>`)
                document.querySelector('.restart').addEventListener('click',restart)
                
                
            }  
            break;
        case 5:
            if (((fills[3].classList.contains('toe')) && (fills[4].classList.contains('toe'))) || ((fills[2].classList.contains('toe')) && (fills[8].classList.contains('toe')))){
                document.querySelector('.finish').classList.toggle('hide');
                finishGame();
                finalText.insertAdjacentHTML('afterbegin',`<h2 class='text second'>Second player win</h2><button class='restart'>Заново</button>`)
                document.querySelector('.restart').addEventListener('click',restart)
                
                
            }  
            break;
        case 6:
            if (((fills[3].classList.contains('toe')) && (fills[0].classList.contains('toe'))) || ((fills[7].classList.contains('toe')) && (fills[8].classList.contains('toe'))) || ((fills[4].classList.contains('toe')) && (fills[2].classList.contains('toe')))){
                document.querySelector('.finish').classList.toggle('hide');
                finishGame();
                finalText.insertAdjacentHTML('afterbegin',`<h2 class='text second'>Second player win</h2><button class='restart'>Заново</button>`)
                document.querySelector('.restart').addEventListener('click',restart)
                
                
            }  
            break;
        case 7:
            if (((fills[4].classList.contains('toe')) && (fills[1].classList.contains('toe'))) || ((fills[6].classList.contains('toe')) && (fills[8].classList.contains('toe')))){
                document.querySelector('.finish').classList.toggle('hide');
                finishGame();
                finalText.insertAdjacentHTML('afterbegin',`<h2 class='text second'>Second player win</h2><button class='restart'>Заново</button>`)
                document.querySelector('.restart').addEventListener('click',restart)
                
                
            }  
            break;
        case 8:
            if (((fills[7].classList.contains('toe')) && (fills[6].classList.contains('toe'))) || ((fills[0].classList.contains('toe')) && (fills[4].classList.contains('toe'))) || ((fills[2].classList.contains('toe')) && (fills[5].classList.contains('toe')))){
                document.querySelector('.finish').classList.toggle('hide');
                finishGame();
                finalText.insertAdjacentHTML('afterbegin',`<h2 class='text second'>Second player win</h2><button class='restart'>Заново</button>`)
                document.querySelector('.restart').addEventListener('click',restart)
                

            }  
            break;
    }
}
function finishGame(event) {
    document.querySelector('.finish').classList.add('finishGame');
    document.querySelector('.finish').classList.add('border');
    document.querySelector('.playerOne').classList.add('hide');
}
function restart() {
    location.reload();
}              
                                                                        // Управление с клавы
document.addEventListener('keydown',StartgameKeyBoard)
function StartgameKeyBoard(event){
    let key = +event.key;
    switch (key) {
        case 1:
            if(!fills[key-1].classList.contains('used')){
                fills[key-1].classList.add('used');
                if(document.querySelector('.playerTurn h2').classList.contains('playerTwo')){
                    fills[key-1].insertAdjacentHTML('afterbegin',`<img src='img/toe.png' class='toe'>`)
                    fills[key-1].classList.add('toe')
                    document.querySelector('.playerTurn h2').classList.toggle('playerTwo')
                    document.querySelector('.playerTurn h2').innerText = `Player 1 turn`;
                    toeKey.push(key);
                    testForToeKey();
                   
                }else{
                    fills[key-1].insertAdjacentHTML('afterbegin',`<img src='img/tic.png' class='tic'>`)
                    fills[key-1].classList.add('tic')
                    document.querySelector('.playerTurn h2').classList.toggle('playerTwo')
                    document.querySelector('.playerTurn h2').innerText = `Player 2 turn`;
                    ticKey.push(key);
                    testForTicKey();
                   

                }
            }
            break;
        case 2:
            if(!fills[key-1].classList.contains('used')){
                fills[key-1].classList.add('used');
                if(document.querySelector('.playerTurn h2').classList.contains('playerTwo')){
                    fills[key-1].insertAdjacentHTML('afterbegin',`<img src='img/toe.png' class='toe'>`)
                    fills[key-1].classList.add('toe')
                    document.querySelector('.playerTurn h2').classList.toggle('playerTwo')
                    document.querySelector('.playerTurn h2').innerText = `Player 1 turn`;
                   toeKey.push(key);
                   testForToeKey();
                }else{
                    fills[key-1].insertAdjacentHTML('afterbegin',`<img src='img/tic.png' class='tic'>`)
                    fills[key-1].classList.add('tic')
                    document.querySelector('.playerTurn h2').classList.toggle('playerTwo')
                    document.querySelector('.playerTurn h2').innerText = `Player 2 turn`;
                    ticKey.push(key);
                    testForTicKey();
                   

                }
            }
            break;
        case 3:
            if(!fills[key-1].classList.contains('used')){
                fills[key-1].classList.add('used');
                if(document.querySelector('.playerTurn h2').classList.contains('playerTwo')){
                    fills[key-1].insertAdjacentHTML('afterbegin',`<img src='img/toe.png' class='toe'>`)
                    fills[key-1].classList.add('toe')
                    document.querySelector('.playerTurn h2').classList.toggle('playerTwo')
                    document.querySelector('.playerTurn h2').innerText = `Player 1 turn`;
                   toeKey.push(key);
                   testForToeKey();
                }else{
                    fills[key-1].insertAdjacentHTML('afterbegin',`<img src='img/tic.png' class='tic'>`)
                    fills[key-1].classList.add('tic')
                    document.querySelector('.playerTurn h2').classList.toggle('playerTwo')
                    document.querySelector('.playerTurn h2').innerText = `Player 2 turn`;
                    ticKey.push(key);
                    testForTicKey();
                   

                }
            }
            break;
        case 4:
            if(!fills[key-1].classList.contains('used')){
                fills[key-1].classList.add('used');
                if(document.querySelector('.playerTurn h2').classList.contains('playerTwo')){
                    fills[key-1].insertAdjacentHTML('afterbegin',`<img src='img/toe.png' class='toe'>`)
                    fills[key-1].classList.add('toe')
                    document.querySelector('.playerTurn h2').classList.toggle('playerTwo')
                    document.querySelector('.playerTurn h2').innerText = `Player 1 turn`;
                   toeKey.push(key);
                   testForToeKey();
                }else{
                    fills[key-1].insertAdjacentHTML('afterbegin',`<img src='img/tic.png' class='tic'>`)
                    fills[key-1].classList.add('tic')
                    document.querySelector('.playerTurn h2').classList.toggle('playerTwo')
                    document.querySelector('.playerTurn h2').innerText = `Player 2 turn`;
                    ticKey.push(key);
                    testForTicKey();
                   

                }
            }
            break;
        case 5:
            if(!fills[key-1].classList.contains('used')){
                fills[key-1].classList.add('used');
                if(document.querySelector('.playerTurn h2').classList.contains('playerTwo')){
                    fills[key-1].insertAdjacentHTML('afterbegin',`<img src='img/toe.png' class='toe'>`)
                    fills[key-1].classList.add('toe')
                    document.querySelector('.playerTurn h2').classList.toggle('playerTwo')
                    document.querySelector('.playerTurn h2').innerText = `Player 1 turn`;
                   toeKey.push(key);
                   testForToeKey();
                }else{
                    fills[key-1].insertAdjacentHTML('afterbegin',`<img src='img/tic.png' class='tic'>`)
                    fills[key-1].classList.add('tic')
                    document.querySelector('.playerTurn h2').classList.toggle('playerTwo')
                    document.querySelector('.playerTurn h2').innerText = `Player 2 turn`;
                    ticKey.push(key);
                    testForTicKey();
                   

                }
            }
            break;
        case 6:
            if(!fills[key-1].classList.contains('used')){
                fills[key-1].classList.add('used');
                if(document.querySelector('.playerTurn h2').classList.contains('playerTwo')){
                    fills[key-1].insertAdjacentHTML('afterbegin',`<img src='img/toe.png' class='toe'>`)
                    fills[key-1].classList.add('toe')
                    document.querySelector('.playerTurn h2').classList.toggle('playerTwo')
                    document.querySelector('.playerTurn h2').innerText = `Player 1 turn`;
                   toeKey.push(key);
                   testForToeKey();
                }else{
                    fills[key-1].insertAdjacentHTML('afterbegin',`<img src='img/tic.png' class='tic'>`)
                    fills[key-1].classList.add('tic')
                    document.querySelector('.playerTurn h2').classList.toggle('playerTwo')
                    document.querySelector('.playerTurn h2').innerText = `Player 2 turn`;
                    ticKey.push(key);
                    testForTicKey();
                   

                }
            }
            break;
        case 7:
            if(!fills[key-1].classList.contains('used')){
                fills[key-1].classList.add('used');
                if(document.querySelector('.playerTurn h2').classList.contains('playerTwo')){
                    fills[key-1].insertAdjacentHTML('afterbegin',`<img src='img/toe.png' class='toe'>`)
                    fills[key-1].classList.add('toe')
                    document.querySelector('.playerTurn h2').classList.toggle('playerTwo')
                    document.querySelector('.playerTurn h2').innerText = `Player 1 turn`;
                   toeKey.push(key);
                   testForToeKey();
                }else{
                    fills[key-1].insertAdjacentHTML('afterbegin',`<img src='img/tic.png' class='tic'>`)
                    fills[key-1].classList.add('tic')
                    document.querySelector('.playerTurn h2').classList.toggle('playerTwo')
                    document.querySelector('.playerTurn h2').innerText = `Player 2 turn`;
                    ticKey.push(key);
                    testForTicKey();
                   

                }
            }
            break;
        case 8:
            if(!fills[key-1].classList.contains('used')){
                fills[key-1].classList.add('used');
                if(document.querySelector('.playerTurn h2').classList.contains('playerTwo')){
                    fills[key-1].insertAdjacentHTML('afterbegin',`<img src='img/toe.png' class='toe'>`)
                    fills[key-1].classList.add('toe')
                    document.querySelector('.playerTurn h2').classList.toggle('playerTwo')
                    document.querySelector('.playerTurn h2').innerText = `Player 1 turn`;
                   toeKey.push(key);
                   testForToeKey();
                }else{
                    fills[key-1].insertAdjacentHTML('afterbegin',`<img src='img/tic.png' class='tic'>`)
                    fills[key-1].classList.add('tic')
                    document.querySelector('.playerTurn h2').classList.toggle('playerTwo')
                    document.querySelector('.playerTurn h2').innerText = `Player 2 turn`;
                    ticKey.push(key);
                    testForTicKey();
                   

                }
            }
            break;
        case 9:
            if(!fills[key-1].classList.contains('used')){
                fills[key-1].classList.add('used');
                if(document.querySelector('.playerTurn h2').classList.contains('playerTwo')){
                    fills[key-1].insertAdjacentHTML('afterbegin',`<img src='img/toe.png' class='toe'>`)
                    fills[key-1].classList.add('toe')
                    document.querySelector('.playerTurn h2').classList.toggle('playerTwo')
                    document.querySelector('.playerTurn h2').innerText = `Player 1 turn`;
                   toeKey.push(key);
                   testForToeKey();
                }else{
                    fills[key-1].insertAdjacentHTML('afterbegin',`<img src='img/tic.png' class='tic'>`)
                    fills[key-1].classList.add('tic')
                    document.querySelector('.playerTurn h2').classList.toggle('playerTwo')
                    document.querySelector('.playerTurn h2').innerText = `Player 2 turn`;
                    ticKey.push(key);
                    testForTicKey();
                   

                }
            }
            break;
    }
    if(document.querySelectorAll('.tic').length == 10){
        finishGame();
        finalText.insertAdjacentHTML('afterbegin',`<h2 class='text'>Draw</h2><button class='restart'>Заново</button>`)
        document.querySelector('.restart').addEventListener('click',restart)
    }
}
                    // Проверки для крестиокв для клавы
function testForTicKey(){
    let test = ticKey[ticKey.length-1];
    switch (test) {
    case 1:
            if (((fills[3].classList.contains('tic')) && (fills[6].classList.contains('tic'))) || ((fills[1].classList.contains('tic')) && (fills[2].classList.contains('tic'))) || ((fills[4].classList.contains('tic')) && (fills[8].classList.contains('tic')))){
                document.querySelector('.finish').classList.toggle('hide');
                finishGame();
                finalText.insertAdjacentHTML('afterbegin',`<h2 class='text first'>First player win</h2><button class='restart'>Заново</button>`)
                document.querySelector('.restart').addEventListener('click',restart)
                
                
            }  
            break;
        case 2:
            if (((fills[0].classList.contains('tic')) && (fills[2].classList.contains('tic'))) || ((fills[4].classList.contains('tic')) && (fills[7].classList.contains('tic')))){
                document.querySelector('.finish').classList.toggle('hide');
                finishGame();
                finalText.insertAdjacentHTML('afterbegin',`<h2 class='text first'>First player win</h2><button class='restart'>Заново</button>`)
                document.querySelector('.restart').addEventListener('click',restart)
                
                
            }  
            break;
        case 3:
            if (((fills[1].classList.contains('tic')) && (fills[0].classList.contains('tic'))) || ((fills[5].classList.contains('tic')) && (fills[8].classList.contains('tic'))) || ((fills[4].classList.contains('tic')) && (fills[6].classList.contains('tic')))){
                document.querySelector('.finish').classList.toggle('hide');
                finishGame();
                finalText.insertAdjacentHTML('afterbegin',`<h2 class='text first'>First player win</h2><button class='restart'>Заново</button>`)
                document.querySelector('.restart').addEventListener('click',restart)
                
                
            }  
            break;
        case 4:
            if (((fills[0].classList.contains('tic')) && (fills[6].classList.contains('tic'))) || ((fills[4].classList.contains('tic')) && (fills[5].classList.contains('tic')))){
                document.querySelector('.finish').classList.toggle('hide');
                finishGame();
                finalText.insertAdjacentHTML('afterbegin',`<h2 class='text first'>First player win</h2><button class='restart'>Заново</button>`)
                document.querySelector('.restart').addEventListener('click',restart)
                
                
            }  
            break;
        case 5:
            if (((fills[3].classList.contains('tic')) && (fills[5].classList.contains('tic'))) || ((fills[1].classList.contains('tic')) && (fills[7].classList.contains('tic'))) || ((fills[6].classList.contains('tic')) && (fills[2].classList.contains('tic'))) || ((fills[0].classList.contains('tic')) && (fills[8].classList.contains('tic')))){
                document.querySelector('.finish').classList.toggle('hide');
                finishGame();
                finalText.insertAdjacentHTML('afterbegin',`<h2 class='text first'>First player win</h2><button class='restart'>Заново</button>`)
                document.querySelector('.restart').addEventListener('click',restart)
                
                
            }  
            break;
        case 6:
            if (((fills[3].classList.contains('tic')) && (fills[4].classList.contains('tic'))) || ((fills[2].classList.contains('tic')) && (fills[8].classList.contains('tic')))){
                document.querySelector('.finish').classList.toggle('hide');
                finishGame();
                finalText.insertAdjacentHTML('afterbegin',`<h2 class='text first'>First player win</h2><button class='restart'>Заново</button>`)
                document.querySelector('.restart').addEventListener('click',restart)
                
                
            }  
            break;
        case 7:
            if (((fills[3].classList.contains('tic')) && (fills[0].classList.contains('tic'))) || ((fills[7].classList.contains('tic')) && (fills[8].classList.contains('tic'))) || ((fills[4].classList.contains('tic')) && (fills[2].classList.contains('tic')))){
                document.querySelector('.finish').classList.toggle('hide');
                finishGame();
                finalText.insertAdjacentHTML('afterbegin',`<h2 class='text first'>First player win</h2><button class='restart'>Заново</button>`)
                document.querySelector('.restart').addEventListener('click',restart)
                
                
            }  
            break;
        case 8:
            if (((fills[4].classList.contains('tic')) && (fills[1].classList.contains('tic'))) || ((fills[6].classList.contains('tic')) && (fills[8].classList.contains('tic')))){
                document.querySelector('.finish').classList.toggle('hide');
                finishGame();
                finalText.insertAdjacentHTML('afterbegin',`<h2 class='text first'>First player win</h2><button class='restart'>Заново</button>`)
                document.querySelector('.restart').addEventListener('click',restart)
                
                
            }  
            break;
        case 9:
            if (((fills[7].classList.contains('tic')) && (fills[6].classList.contains('tic'))) || ((fills[0].classList.contains('tic')) && (fills[4].classList.contains('tic'))) || ((fills[2].classList.contains('tic')) && (fills[5].classList.contains('tic')))){
                document.querySelector('.finish').classList.toggle('hide');
                finishGame();
                
                finalText.insertAdjacentHTML('afterbegin',`<h2 class='text first'>First player win</h2><button class='restart'>Заново</button>`)
                document.querySelector('.restart').addEventListener('click',restart)
                
            }  
            break;
    }
} 
                                                                    // Проверка для ноликов для клавы
function testForToeKey() {
    let test = toeKey[toeKey.length-1];
    switch (test) {
        case 1:
            if (((fills[3].classList.contains('toe')) && (fills[6].classList.contains('toe'))) || ((fills[1].classList.contains('toe')) && (fills[2].classList.contains('toe'))) || ((fills[4].classList.contains('toe')) && (fills[8].classList.contains('toe')))){
                document.querySelector('.finish').classList.toggle('hide');
                finishGame();
                finalText.insertAdjacentHTML('afterbegin',`<h2 class='text second'>Second player win</h2><button class='restart'>Заново</button>`)
                document.querySelector('.restart').addEventListener('click',restart)
                
                
            }  
            break;
        case 2:
            if (((fills[0].classList.contains('toe')) && (fills[2].classList.contains('toe'))) || ((fills[4].classList.contains('toe')) && (fills[7].classList.contains('toe')))){
                document.querySelector('.finish').classList.toggle('hide');
                finishGame();
                finalText.insertAdjacentHTML('afterbegin',`<h2 class='text second'>Second player win</h2><button class='restart'>Заново</button>`)
                document.querySelector('.restart').addEventListener('click',restart)
                
                
            }  
            break;
        case 3:
            if (((fills[1].classList.contains('toe')) && (fills[0].classList.contains('toe'))) || ((fills[5].classList.contains('toe')) && (fills[8].classList.contains('toe'))) || ((fills[4].classList.contains('toe')) && (fills[6].classList.contains('toe')))){
                document.querySelector('.finish').classList.toggle('hide');
                finishGame();
                finalText.insertAdjacentHTML('afterbegin',`<h2 class='text second'>Second player win</h2><button class='restart'>Заново</button>`)
                document.querySelector('.restart').addEventListener('click',restart)
                
                
            }  
            break;
        case 4:
            if (((fills[0].classList.contains('toe')) && (fills[6].classList.contains('toe'))) || ((fills[4].classList.contains('toe')) && (fills[5].classList.contains('toe')))){
                document.querySelector('.finish').classList.toggle('hide');
                finishGame();
                finalText.insertAdjacentHTML('afterbegin',`<h2 class='text second'>Second player win</h2><button class='restart'>Заново</button>`)
                document.querySelector('.restart').addEventListener('click',restart)
                
                
            }  
            break;
        case 5:
            if (((fills[3].classList.contains('toe')) && (fills[5].classList.contains('toe'))) || ((fills[1].classList.contains('toe')) && (fills[7].classList.contains('toe'))) || ((fills[6].classList.contains('toe')) && (fills[2].classList.contains('toe'))) || ((fills[0].classList.contains('toe')) && (fills[8].classList.contains('toe')))){
                document.querySelector('.finish').classList.toggle('hide');
                finishGame();
                finalText.insertAdjacentHTML('afterbegin',`<h2 class='text second'>Second player win</h2><button class='restart'>Заново</button>`)
                document.querySelector('.restart').addEventListener('click',restart)
                
                
            }  
            break;
        case 6:
            if (((fills[3].classList.contains('toe')) && (fills[4].classList.contains('toe'))) || ((fills[2].classList.contains('toe')) && (fills[8].classList.contains('toe')))){
                document.querySelector('.finish').classList.toggle('hide');
                finishGame();
                finalText.insertAdjacentHTML('afterbegin',`<h2 class='text second'>Second player win</h2><button class='restart'>Заново</button>`)
                document.querySelector('.restart').addEventListener('click',restart)
                
                
            }  
            break;
        case 7:
            if (((fills[3].classList.contains('toe')) && (fills[0].classList.contains('toe'))) || ((fills[7].classList.contains('toe')) && (fills[8].classList.contains('toe'))) || ((fills[4].classList.contains('toe')) && (fills[2].classList.contains('toe')))){
                document.querySelector('.finish').classList.toggle('hide');
                finishGame();
                finalText.insertAdjacentHTML('afterbegin',`<h2 class='text second'>Second player win</h2><button class='restart'>Заново</button>`)
                document.querySelector('.restart').addEventListener('click',restart)
                
                
            }  
            break;
        case 8:
            if (((fills[4].classList.contains('toe')) && (fills[1].classList.contains('toe'))) || ((fills[6].classList.contains('toe')) && (fills[8].classList.contains('toe')))){
                document.querySelector('.finish').classList.toggle('hide');
                finishGame();
                finalText.insertAdjacentHTML('afterbegin',`<h2 class='text second'>Second player win</h2><button class='restart'>Заново</button>`)
                document.querySelector('.restart').addEventListener('click',restart)
                
                
            }  
            break;
        case 9:
            if (((fills[7].classList.contains('toe')) && (fills[6].classList.contains('toe'))) || ((fills[0].classList.contains('toe')) && (fills[4].classList.contains('toe'))) || ((fills[2].classList.contains('toe')) && (fills[5].classList.contains('toe')))){
                document.querySelector('.finish').classList.toggle('hide');
                finishGame();
                finalText.insertAdjacentHTML('afterbegin',`<h2 class='text second'>Second player win</h2><button class='restart'>Заново</button>`)
                document.querySelector('.restart').addEventListener('click',restart)
                

            }  
            break;
    }
}

