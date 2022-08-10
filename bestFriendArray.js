// Write a function & take an Array as input parameter where show some of your friends Name & find the largest Name of your friends from this array also return this largest Name . Let start ...

const friends = ['Julfikar','Sagor','Abdullaah','Nazmul', 'Alamin', 'Mazed Abdullah','Fahed', 'Abdul Kaiyum Rokib'];

function bestFriend(friends){
    let maxName = friends[0];
    for(let i = 0; i < friends.length ; i++ ){
        const friend = friends[i];
        // console.log(friend.length);
        if(friend.length > maxName.length){
            maxName=friend;
        }
   }
   return maxName;
   
}

const findMaxName = bestFriend(friends);
console.log(findMaxName);
console.log(typeof(findMaxName));



