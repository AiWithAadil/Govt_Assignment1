function makeshirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log(size, message);
}
;
makeshirt();
makeshirt("medium");
makeshirt("small", "python is love");
