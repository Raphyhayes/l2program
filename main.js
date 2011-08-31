const HEIGHT = 8;
const WIDTH = 8;

function Square (location){
	this.location = location;
	this.visited = false;
	this.color = (this.location[0]+this.location[1] % 2 ? "black" : "white")
}

var Board = {
	createSquares: function () {
		var squares = [];
		for (var i = 0; i < Board.width; i++) {
			squares[i] = []
			for (var j = 0; j < Board.height; j++) {
				squares[i][j] = new Square([i,j]);
			}
		}
		return squares;
	},
	width: WIDTH,
	height: HEIGHT,
	startingLocation: [2,0],
	currentLocation: [2,0],
	squares: [],
	moves: [[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,-1],[-2,1],[-1, 2]],
	nextSquare: function() {
		
	},
	possibleMoves: function(location){
		var moves = [];
		for (var i = 0; i < Board.moves.length; i++) {
			moveResult = addArrays(location, Board.moves[i]);
			if (moveResult[0] >= 0 && moveResult[0] <= Board.width -1 &&
				 moveResult[1] >= 0 && moveResult[1] <= Board.height -1) {
				 	moves.append(moveResult);
				 }
		}
	},
}

Board.squares = Board.createSquares();

function addArrays (a,b) {
	result = [];
	for (i = 0; i < a.length && i < b.length; i++) {
		result[i] = a[i] + b[i];
	}
	return result;
}

