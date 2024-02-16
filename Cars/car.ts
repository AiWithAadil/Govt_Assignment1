interface CarInformation {
    manufacturer: string;
    modelName: string;
    [key: string]: any;
}

function carinfo(manufacturer: string, modelName: string, ...features: [string, any][]): CarInformation {
    const car: CarInformation = {
        manufacturer,
        modelName,
    };

    for (const [key, value] of features) {
        car[key] = value;
    }

    return car;
}


const myCar = carinfo("Toyota", "Camry", ["color", "blue"], ["year", 2023]);

console.log(myCar);