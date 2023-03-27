function rounding(number,presision) {

    if (presision > 15) {
        presision = 15;
    }
    let finalResult = number.toFixed(presision);
    console.log(parseFloat(finalResult));
}
rounding(3.1415926535897932384626433832795,2);