var tilesArray = [`box1`, `box1`, `box2`, `box2`, `box3`, `box3`, `box4`, `box4`, `box5`, `box5`, `box6`, `box6`];
var tilesIds = [];
var memory = [];
var tilesMatched = 0;

Array.prototype.shuffle=function(){
    var i = this.length , j , temporary;
    while(--i>0){
        j = Math.floor(Math.random() * (i+1));
        temporary= this[j];
        this[j]= this[i];
        this[i]= temporary;
    }
}

function newBoard (){
    tilesMatched=0;
    var output = '';
    tilesArray.shuffle();
    for(var i =0; i<tilesArray.length; i++){
        output += '<div id="box_'+i+ '" onclick="memoryFlipTile(this,\''+tilesArray[i]+'\')""></div>';
    }
    document.getElementById('board').innerHTML=output;
}


function memoryFlipTile(tile,val){
	if(tile.innerHTML == "" && memory.length < 2){
		tile.style.background = '#FFF';
		tile.innerHTML = val;
		if(memory.length == 0){
			memory.push(val);
			tilesIds.push(tile.id);
		} else if(memory.length == 1){
			memory.push(val);
			tilesIds.push(tile.id);
			if(memory[0] == memory[1]){
				tilesMatched += 2;
				// Clear both arrays
				memory = [];
            	tilesIds = [];
				// Check to see if the whole board is cleared
				if(tilesMatched == memory_array.length){
					alert("Board cleared... generating new board");
					document.getElementById('board').innerHTML = "";
					newBoard();
				}
			} else {
				function flip2Back(){
				    // Flip the 2 tiles back over
				    var tile_1 = document.getElementById(tilesIds[0]);
				    var tile_2 = document.getElementById(tilesIds[1]);
				    tile_1.style.background = 'url(tile_bg.jpg) no-repeat';
            	    tile_1.innerHTML = "";
				    tile_2.style.background = 'url(tile_bg.jpg) no-repeat';
            	    tile_2.innerHTML = "";
				    // Clear both arrays
				    memory = [];
            	    tilesIds = [];
				}
				setTimeout(flip2Back, 700);
			}
		}
	}
}