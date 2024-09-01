function passwordValidator(input) {
    let startNum = 48;
    let endNum = 57;
    let lettersStart1 = 65;
    let lettersEnd1 = 90;
    let lettersStart2 = 97;
    let lettersEnd2 = 122;
    let newPassArr = [];
    let errorArr = [];
    let digitCount = 0;
    let pass = input.split(``);
    for (let i = 0; i < pass.length; i++) {

        let char = pass[i].charCodeAt(0);
        if ((char >= startNum && char <= endNum) ||
            (char >= lettersStart1 && char <= lettersEnd1) ||
            (char >= lettersStart2 && char <= lettersEnd2)) {
            newPassArr.push(pass[i]);
        } else {
            errorArr.push(pass[i]);
        }
        if ((char>=startNum && char<=endNum)){
            digitCount++;
        }
        
    }
    let isValid=true;
    if (errorArr.length > 0) {
        isValid=false;
        console.log(`Password must consist only of letters and digits`);
    }
    if (input.length < 6 || input.length > 10) {
        isValid=false;
        console.log(`Password must be between 6 and 10 characters`);
    }
    if (digitCount<2){
        isValid=false;
        console.log(`Password must have at least 2 digits`);
    }
if (isValid===true){
    console.log(`Password is valid`);
    
}
    console.log(digitCount);

}
passwordValidator('Miro123')
