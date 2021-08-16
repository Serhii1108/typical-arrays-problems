
exports.min = function min (array) {
  if(array !== [] && array !== undefined){
    return Math.min(...array)
  } else return 0
}

exports.max = function max (array) {
  if(array !== [] && array !== undefined){
    return Math.max(...array)
  } else return 0
}

exports.avg = function avg (array) {
  if(array !== [] && array !== undefined){
    let avg = 0
    for(let i = 0; i < array.length;i++) {
      avg += array[i]
    }
    let result = avg / array.length
    return result.toFixed(2)
  } else return 0
}
