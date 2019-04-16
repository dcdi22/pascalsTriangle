function pascalsTriangle(nth) {
    if (nth === 0) {
        return [1];
    }
    return generateTriangle(pascalsTriangle(nth - 1))
}

function generateTriangle(rowNum) {
    let nthRow = [1];
    for(let i = 0; i < rowNum.length - 1; i++) {
        nthRow.push(rowNum[i] + rowNum[i + 1])
    }
    console.log(rowNum);
    nthRow.push(1);
    return nthRow;
}

if(process.argv[2] === undefined) {
    console.log('Please add a row number.');
} else {
    let nthNumber = parseInt(process.argv[2]);
    pascalsTriangle(nthNumber);
}