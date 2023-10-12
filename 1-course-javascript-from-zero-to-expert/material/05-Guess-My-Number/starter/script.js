'use strict';

// console.log(document.querySelector('.message').textContent);
// //document.querySelector('.message').textContent = 'Correct Number! =D'
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 2;

const secretNumber = Math.trunc(Math.random() * 5) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click',
                                                    function() {
                                                        const guess = Number(document.querySelector('.guess').value);
                                                        console.log(guess);
                                                    
                                                    if (!guess){
                                                        document.querySelector('.message').textContent = '⛔️ No Number!'
                                                    
                                                    } else if (guess === secretNumber){
                                                        document.querySelector('.message').textContent = '🎉 Congrats! Correct Number';

                                                        document.querySelector('body').style.backgroundColor = '#60b347';
                                                        document.querySelector('.number').style.width = '30rem'
                                                        document.querySelector('.number').textContent = secretNumber;
                                                    
                                                    } else if (guess > secretNumber){
                                                        document.querySelector('.message').textContent = '⬆️ Too high';
                                                        score--;
                                                        document.querySelector('.score').textContent = score;
                                                    
                                                    } else if (guess < secretNumber){
                                                        document.querySelector('.message').textContent = '⬇️ too low';
                                                        score--;
                                                        document.querySelector('.score').textContent = score;
                                                    }
                                                    
                                                });
