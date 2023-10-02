function saturdayFun(activity){
    switch(activity) {
        case "bathe my dog":
            return "This Saturday, I want to bathe my dog!"
        default:
            return `This Saturday, I want to roller-skate!`
    }
}
function mondayWork(work){
    switch (work){
        case "work from home":
            return "This Monday, I will work from home.";
        default:
            return 'This Monday, I will go to the office.';
    }
}
function wrapAdjective(descriptor) {
    return function (adjective) {
        switch(descriptor){
            case `*`:
                return `You are ${descriptor}${adjective}${descriptor}!`;
            case `||`:
                return `You are ${descriptor}${adjective}${descriptor}!`;

        }
      
    };
  }
