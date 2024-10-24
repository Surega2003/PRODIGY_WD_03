let currentPlayer='X';
let gameBoard=["","","","","","","","",""];
let gameOver=false;

document.querySelectorAll('.box').forEach((box,index)=>{
    box.addEventListener('click',()=>{
        if(gameOver)
            return;
        if(gameBoard[index]!=="")
            return;
        box.classList.add('clicked');
        gameBoard[index]=currentPlayer;
        box.textContent=(currentPlayer==='X')?'X':'O';
        checkWin();
        currentPlayer=(currentPlayer=='X')?'O':'X';
    });
});
document.getElementById('reset-btn').addEventListener('click',()=>{
    gameBoard=["","","","","","","","",""];
    currentPlayer='X';
    gameOver=false;
    document.querySelectorAll('.box').forEach((box)=>{
        box.textContent="";
        box.classList.remove('clicked')
    });
    
});
function checkWin(){
    const WinCondition=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for(let itr=0;itr<WinCondition.length;itr++)
    {
        const [a,b,c]=WinCondition[itr];
        if(gameBoard[a]===gameBoard[b] && gameBoard[b]===gameBoard[c] && gameBoard[a]!=="")
        {
            document.getElementById('Winner').innerHTML="Player"+" "+gameBoard[a]+" "+"wins!";
            gameOver=true;
            return;
        }
        if(!gameOver && !gameBoard.includes(""))
        {
            document.getElementById('Winner').innerHTML="It's a draw!";
            gameOver=true;
            return;
        }
    }
}
let display=document.getElementById('reset-btn');
display.addEventListener('click',()=>{
    document.getElementById('Winner').innerHTML="";
})