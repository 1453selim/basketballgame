var teamJohn = (89+120+103)/3;
var teamMike = (116+94+123)/3;
console.log(teamJohn,teamMike)
if(teamJohn>teamMike) {
    console.log("john's team wins with " +teamJohn)
}else if(teamJohn<teamMike) {
    console.log("mike' s team wins with " +teamMike)
}else {
    console.log("deuce")
}
var teamMary = (97+134+105)/3;
console.log(teamMary)
if(teamJohn>teamMike && teamJohn>teamMary) {
    crossOriginIsolated.log("Winner is John with " +teamJohn + " points")
}else if (teamJohn<teamMike && teamMike>teamMary){
    console.log("Winner is Mike with " +teamMike + " points")

}else {
    console.log("Winner is Mary with " +teamMary + " points")
}    