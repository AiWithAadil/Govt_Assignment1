function cities_country(city, country) {
    return "\"".concat(city, ", ").concat(country, "\"");
}
;
console.log(cities_country("Lahore", "Pakistan"));
console.log(cities_country("New York", "USA"));
console.log(cities_country("London", "United Kingdom"));
