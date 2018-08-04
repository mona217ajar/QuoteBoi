// JavaScript Document
window.onload = function () {
    // do something
    console.log("Raand zhavya");

    var myQuotes = ['Keep your face to the sunshine and you cannot see a shadow.', 'Limit your "always" and your "nevers', 'Spread love everywhere you go.', 'A champion is defined not by their wins but by how they can recover when they fall.', 'Each person must live their life as a model for others.', 'Motivation comes from working on things we care about.', 'No matter what people tell you, words and ideas can change the world.', 'With the right kind of coaching and determination you can accomplish anything.', 'If you look at what you have in life, you will always have more.', "Life has got all those twists and turns. You've got to hold on tight and off you go."];

    var myAuthors = ['Helen keller', 'Amy Poehler​​', 'Mother Teresa​', 'Serena Williams', 'Rosa Parks​', 'Sheryl Sandberg', 'Robin Williams', 'Reese Witherspoon', 'Oprah Winfrey', 'Nicole Kidman'];

    var myImages=["/img/helen.jpg","/img/amy.jpg","/img/mother.jpg","/img/serena.jpg","/img/rosa.jpg","/img/sheryl.jpg","/img/robin.jpg","/img/reese.jpg","/img/oprah.jpg","/img/nicole.jpg"];

    var myRandom = Math.floor(Math.random() * (myQuotes.length));
    this.console.log(myRandom);
    document.getElementById('theQuote').innerHTML ='"'+ myQuotes[myRandom] + '"';
    document.getElementById('theAuthor').innerHTML = "-"+myAuthors[myRandom];
    document.getElementById('face').src=myImages[myRandom];


}
/* 

   ['Helen keller','Amy Poehler​​','Mother Teresa​','Serena Williams','Rosa Parks​','Sheryl Sandberg','Robin Williams','Reese Witherspoon','Oprah Winfrey','Nicole Kidman'];

   ['Keep your face to the sunshine and you cannot see a shadow.','Limit your "always" and your "nevers."','Spread love everywhere you go.','A champion is defined not by their wins but by how they can recover when they fall.','Each person must live their life as a model for others.','Motivation comes from working on things we care about.','No matter what people tell you, words and ideas can change the world.','With the right kind of coaching and determination you can accomplish anything.','If you look at what you have in life, you will always have more.',"Life has got all those twists and turns. You've got to hold on tight and off you go."]; */