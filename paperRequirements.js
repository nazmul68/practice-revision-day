// write a function which give you output how much paper do you need to made some books copy . let start.......

function paperRequirements(book1Quantity,book2Quantity,book3Quantity){
    const book1RequiredPaper = book1Quantity*needPageBook1;
    const book2RequiredPaper = book2Quantity*needPageBook2;
    const book3RequiredPaper = book3Quantity*needPageBook3;
     const totalRequiredPaper = book1RequiredPaper + book2RequiredPaper + book3RequiredPaper;
     return totalRequiredPaper;
    
}

const needPageBook1 = 100;
const needPageBook2 = 200;
const needPageBook3 = 300;
const totalNeedPage = paperRequirements(500,300,150);
console.log('Need total page:',totalNeedPage);