function getBalancedSubstrings(strin) {
    let uniqueLtr =  [...new Set(strin.split(''))]; 
    let str = strin.split('');
    console.log(uniqueLtr, str);
    if(uniqueLtr.length ==1) return [];
    let resArr = [];
    for(let i=0;i<str.length;i++) {
        let subStrArr = '';
        let balChk =0;
        subStrArr += str[i];
         //console.log(subStrArr);
        balChk +=1;
        for(let j=i;j<str.length;j++){
            
            if(subStrArr.includes('a') || subStrArr.includes('b')) {
                balChk=balChk-1;
                subStrArr += str[j]
                if(str.length-1 == j) {
                    resArr.push(subStrArr);
                }
            } else {
                subStrArr = ''
              break;       
            }
        }
    }
    return resArr
}
getBalancedSubstrings("caabbacc");
