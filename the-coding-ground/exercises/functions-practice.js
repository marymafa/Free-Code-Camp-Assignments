function hello(first, second, third){
    console.log("The first argument is:", first);
    console.log("The second argument is:", second);
    console.log("The third argument is:", third);

    console.log("The arguments are: ", arguments);
}



hello(1,2,3);

hello(3,1,2);

hello("mary","mark","john");

hello(false,true,true,5);