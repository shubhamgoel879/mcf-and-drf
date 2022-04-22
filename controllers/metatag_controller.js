
//Below function will render initial page of metatag content finder.
module.exports.metatag=function(req,res){
    res.render('metatag',{
        url:'None',
        metatag_name:'None',
        content:'Enter url and metatag name...'
    });
};


//Below function will find the content of respective metatag.
module.exports.contentFinder=function(req,res){
    const url=req.body.url;
    const metatag_name=req.body.metatag_name;

    const XMLHttpRequest=require('xmlhttprequest').XMLHttpRequest;
    const domparser = require('dom-parser');
    
    /*Referred StackOverflow to get url page in simple text
    https://stackoverflow.com/questions/247483/http-get-request-in-javascript
    */
    function httpGet(theUrl) {
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", theUrl, false );                       // false for synchronous request
        xmlHttp.send( null );
        return xmlHttp.responseText;
    }

    const text=httpGet(url);
    
    if(text==undefined){                                           // If url is not reachable or invalid url.
        return res.render('metatag',{
            url:url,
            metatag_name:metatag_name,
            content:'Hmmm… cannot reach this url, please check this url.'
        });
    }
    const parser=new domparser();

    
    const htmldoc=parser.parseFromString(text,"text/html");         //Need to convert the text into html format.
    
    const metaTags=htmldoc.getElementsByTagName('meta');
    for (let i = 0; i < metaTags.length; i++) {
        if (metaTags[i].getAttribute("name") == metatag_name) {
            return res.render('metatag',{
                url:url,
                metatag_name:metatag_name,
                content:metaTags[i].getAttribute("content")
            });
        }
    }
    return res.render('metatag',{
        url:url,
        metatag_name:metatag_name,
        content:'Error :: Meta tag not found.'
    });
}