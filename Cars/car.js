function carinfo(manufacturer, modelName) {
    var features = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        features[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    for (var _a = 0, features_1 = features; _a < features_1.length; _a++) {
        var _b = features_1[_a], key = _b[0], value = _b[1];
        car[key] = value;
    }
    return car;
}
var myCar = carinfo("Toyota", "Camry", ["color", "blue"], ["year", 2023]);
console.log(myCar);
