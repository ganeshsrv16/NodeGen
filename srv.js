const fs= require('fs');
const os = require('os');

var shuffle = require('shuffle-array');

var readline = require('readline');

var rd = readline.createInterface({

  input: process.stdin,

  output: process.stdout

});

rd.question("Please enter your json file path? ", function(answer) {
    

fs.readFile(answer, 'utf8', function (err, jsn) {

    if (err) 

        {

             console.error("File Error"); process.exit();

        }

    if(!jsn)

    {

        console.log("JSON is not a suitable one!");

        process.exit();

    }

    var jar = JSON.parse(jsn);
var a=0;
var k=1;
var b=0;


    var i = Object.keys(jar).length;
      var q = Object.keys(jar).length;

    rd.question("Enter number of teams to be created",function(n){

    if(n==0|n<0)

    {

        console.log("Teams cant be zero or lesser");

        process.exit();

    }

    if(n>i)

    {

        console.log("Team number cannot be greater than total members size");
        process.exit();

    }
 let stream = fs.createWriteStream('D:/NodeApp/berk.txt');
var arr=[];
var t=1;

    for(s=0;s<i;s++)

    {

    arr.push(t);

    t++;

    }

    shuffle(arr);
   while(i%n!==-1)
    {
console.log("-------------------");
console.log("-------------------");
stream.write("-------------------"+os.EOL);
stream.write("-------------------"+os.EOL);
console.log("Team"+k);
stream.write("\nTeam"+k+os.EOL);
b=b+Math.floor(i/n);
var c=Math.floor(i/n);
for( var j=a;j<q;j++)
{

var u=arr[j];
    


if(j==b)
    {
      a=b;

        break;
    }
    console.log("Name:"+jar["aspirant"+u]["name"]);
console.log("Branch:"+jar["aspirant"+u]["branch"]);
console.log("Favourite Language:"+jar["aspirant"+u]["favlang"]);
stream.write("Name:"+jar["aspirant"+u]["name"]+os.EOL);
stream.write("\nBranch:"+jar["aspirant"+u]["branch"]+os.EOL);
stream.write("\nFavourite Language:"+jar["aspirant"+u]["favlang"]+os.EOL);
    }
   
  i=i-c;
    n--;
   k++;
    if(n==0)
    {
        break;
    }
}


});

}); 

});





