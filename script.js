class Knight {

    constructor(position) {
        this.position = position,
        this.moves = getMoveOptions(position);
        this.path = []
    }

}

// Try to use recursion
function knightMoves(startingPosition, endingPosition) {

    let result = [];

    if (startingPosition === endingPosition) return "Same Position";



}

// cuurentPosition will be an array with the X and Y coordinate representing the current position of the knight
function getMoveOptions(currentPosition) {
    const movesArray = [
        [currentPosition[0] + 1, currentPosition[1] + 2],
        [currentPosition[0] + 1, currentPosition[1] - 2],
        [currentPosition[0] - 1, currentPosition[1] + 2],
        [currentPosition[0] - 1, currentPosition[1] - 2],
        [currentPosition[0] + 2, currentPosition[1] + 1],
        [currentPosition[0] + 2, currentPosition[1] - 1],
        [currentPosition[0] - 2, currentPosition[1] + 1],
        [currentPosition[0] - 2, currentPosition[1] - 1],
    ]

    const legalMoves = movesArray.filter((move) => {
        return move[0] < 8 && move[0] >= 0 && move[1] < 8 && move[1] >= 0;
    })

    return legalMoves;
}