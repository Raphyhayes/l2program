const HEIGHT = 8;
const WIDTH = 8;
const STARTINGLOCATION = [1,1];
function Square (location){
	this.location = location;
	this.visited = false;
	this.color = ((this.location[0]+this.location[1]) % 2 ? "black" : "white")
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
	startingLocation: STARTINGLOCATION,
	currentLocation: [],
	squares: [],
	moves: [[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,-1],[-2,1],[-1, 2]],
	
	moveToNextSquare: function() {
		var fewestOptions = 9;
		var nextSquare; 
		var legalMoves = Board.possibleMoves(Board.currentLocation);
		for (var i = 0; i < legalMoves.length; i++) {
			var moveListLength = Board.possibleMoves(legalMoves[i]).length;
			if (moveListLength < fewestOptions){
				fewestOptions = moveListLength;
				nextSquare = legalMoves[i];
			}
		}
		Board.currentLocation = nextSquare;
		Board.squares[Board.currentLocation[0]][Board.currentLocation[1]].visited = true;
	},
	
	possibleMoves: function(location){
		var moves = [];
		for (var i = 0; i < Board.moves.length; i++) {
			moveResult = addArrays(location, Board.moves[i]);
			if (moveResult[0] >= 0 && moveResult[0] <= Board.width -1 &&
				moveResult[1] >= 0 && moveResult[1] <= Board.height -1) {
				if (!Board.squares[moveResult[0]][moveResult[1]].visited) {
				 	moves[moves.length]= moveResult;
				} 	
			}
		}
		return moves;
	},
}

Board.squares = Board.createSquares();
Board.currentLocation = Board.startingLocation;
Board.squares[Board.startingLocation[0]][Board.startingLocation[1]].visited = true;
function addArrays (a,b) {
	result = [];
	for (i = 0; i < a.length && i < b.length; i++) {
		result[i] = a[i] + b[i];
	}
	return result;
}

