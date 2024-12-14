// Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number
function extractColumn(matrix, columnIndex) {
    const column = [];
    for (let i = 0; i < matrix.length; i++) {
        column.push(matrix[i][columnIndex]);
    }

    return column;
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const columnIndex = 2; 

const extractedColumn = extractColumn(matrix, columnIndex);

console.log(extractedColumn); 
