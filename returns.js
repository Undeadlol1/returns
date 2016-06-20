function returns (object, path, defaultValue) {
    try {
        function returnValue (value) {
            if (Object.keys(value).length === 0 && value.constructor === Object) throw new Error()
            if (!Boolean(value)) throw new Error()
            return value
        }
        for (var i=0, path=path.split('.'), length=path.length; i<length; i++){
            object = object[path[i]]
            if (i == length - 1) return returnValue(object)
        }
        // return object
    } catch (e) { return defaultValue }
}
var obj = {penises: {dicks: 'succes!'}}
var string = 'penises.dicks'
console.log(returns(obj, string, 'defaultValue!'))
console.log(returns({penises: {dicks: {}}}, string, 'emptyObject!'))
console.log(returns(obj, 'john.doe', 'defaultValue of non-existent path'))
