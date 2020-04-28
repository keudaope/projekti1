let valot = {olohuone: true, makuuhuone: false, tyohuone: false, WC: false, eteinen: true};
function getArrayOfUsers(objekti) {
  // Only change code below this line
let kentat = Object.keys(objekti);
console.log(kentat);
  // Only change code above this line
}
getArrayOfUsers(valot);
for (let huoneet in valot) {
  if(valot[huoneet] == true)
  {
    console.log(huoneet);
  }
}
function countOnline(usersObj) {
  // Only change code below this line
let users = 0;
for(let user in usersObj)
{
  if(usersObj[user].online === true)
  {
    users++;
  }
}
console.log(users);
}
countOnline({ Alan: { online: true }, Jeff: { online: true }, Sarah: { online: false } });

let valaistus = {olohuone: {lamput:['katto', 'jalka']}, WC: false, eteinen: true};
valaistus.olohuone.lamput.push('seinä');
console.table(valaistus);
//console.log(getArrayOfUsers(users));
