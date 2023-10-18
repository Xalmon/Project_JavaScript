let bang_soup = function(people){
    
    let ingredients = function(palmKernel, veggies, protein){
        let palmKernelCost = palmKernel * people;
        let proteinPerHead = palmKernel;

        console.log('for ${people} people, we will spend N${palmKernelCost} on palm kernel. we will use ${veggies}, and each person would get ${proteinPerHead} ${protein}')
    }
    ingredients(10, "ugwu", "fish");
    ingredients(15, "scent leaf", "meat");
    ingredients(20, "bitter leaf", "chicken");
    ingredients(24, "aloe vera", "boiled eggs");

}

bang_soup(20);
