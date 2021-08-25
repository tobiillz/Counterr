let countDownElement = document.getElementById("countDown");

let initialCountDownVal = countDownElement.innerHTML;



// setInterval(function(){
//         initialCountDownVal = initialCountDownVal > 0? 
//         countDownElement.innerHTML -= 1 : 0;

//         let backgroundImage = document.getElementById("alternate");
//         backImagePath = initialCountDownVal % 2 === 0 ? "/images/image-1.jpg" : "/images/image-2.jpg";
//         backgroundImage.src = backImagePath;
//         console.log(backgroundImage.src)

//         },1000)

        //New comment
setInterval(function(){
        if (initialCountDownVal % 2 === 0)
        countDownElement.innerHTML = initialCountDownVal -= 1  ;

},1000);