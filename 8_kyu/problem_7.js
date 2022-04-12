/* 
    Abbreviate a Two Word Name
*/

function abbrevName(name) {
    return name.split(" ").map(abName => abName[0]).join(".").toUpperCase();
}


/* function abbrevName(name) {
    const nameArray = name.split(" ");
    return ((nameArray[0][0] + "." + nameArray[1][0]).toUpperCase());
}
 */