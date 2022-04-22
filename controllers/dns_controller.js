//Below function will render initial page of DNS records finder.
module.exports.dns=function(req,res){
    res.render('dns',{
        domain_name:'None',
        record_name:'None',
        records:undefined
    });
}


//Below function will find the DNS text Records of the record name.
module.exports.recordFinder=function(req,res){
    const domain_name=req.body.domain_name;
    const record_name=req.body.record_name;
    const allowed_record_names=['A','AAAA','ANY','CNAME','MX','TXT','NS','NAPTR','PTR','SOA','SRV'];
    if(!allowed_record_names.includes(record_name))                             // for invalid record name.
    {
        return res.render('dns',{
            domain_name:domain_name,
            record_name:record_name,
            records:undefined
        });
    }


    /*Referred GFG website for finding records of domain name
    https://www.geeksforgeeks.org/node-js-dns-resolve-method/
    */ 
    const dns = require('dns');
    dns.resolve(domain_name,record_name,function(err,records){
        if(err){
            return res.render('dns',{
                domain_name:domain_name,
                record_name:record_name,
                records:undefined
            });
        }
        else{
            return res.render('dns',{
                domain_name:domain_name,
                record_name:record_name,
                records:records
            });
        }
    });
}
