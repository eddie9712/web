const cheerio=require('cheerio')
const iconv=require('iconv-lite')
const buffer=require('buffer').Buffer;
const request = require('request').defaults({jar: true});
const url = 'http://course-query.acad.ncku.edu.tw/qry/qry001.php?dept_no=A1';
const cookie="lang=CHT; PHPSESSID=E940511447330a98e095e1d3c5c7dceb0da166ffd" 
function publishpost(){
 var options={
 url:'https://course.ncku.edu.tw/course/second2.php',
 method:'POST',
 headers:{
  'cookie':cookie, 
 },
 form:{
 'STEP':'0',
 'depNo':'A1',
 'seqNo':'534',
  },
};   
  request(options,(err,res,body)=>
  {
    console.log("submit");
     })
} //to create the request
setInterval(
  ()=>{
  request(url, (err, res, body) => { 
 if(err)  1 
   throw error;
   const $ = cheerio.load(body)
   var test=$('TD:contains("A122950")').next().next().next().next().next().next().next().next().next().next().next().next().text();  
if(test!="額滿")
  publishpost();
    });
  },5000

  );// each detection for 5secs 

                    






 
 
 
        
