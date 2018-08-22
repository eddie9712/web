const request = require('request')
const cheerio=require('cheerio')
const iconv=require('iconv-lite')
const buffer=require('buffer').Buffer;
const url = 'http://course-query.acad.ncku.edu.tw/qry/qry001.php?dept_no=C2'
request(url, (err, res, body) => {
  
 if(err)
   throw error;
   const $ = cheerio.load(body)
  var test=$('TD:contains("C227400")').text();  
     console.log(test);

})
                    






 
 
 
        
