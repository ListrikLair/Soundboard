// model


// view
updateView();
function updateView(){
document.getElementById('app').innerHTML = /*HTML*/`
    <div id="allSounds">
        <div onclick="playSound('augh')">1
            <audio id="augh"
            class="sound"
            src="./audio/augh.mp3"></audio>
        </div>
        <div onclick="playSound()">2</div>
        <div onclick="playSound(2)">3</div>
        <div onclick="playSound(3)">4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
    </div>
`;
}

// controller
function playSound(selectedSound){
    document.getElementById(selectedSound).playSound();
}