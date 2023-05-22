const cookie_get=()=>{
    let c=document.cookie
    if(c!==''){
        c=c.split(';')
        let result={}
        for(let i=0;i<c.length;i++){
            let d=c[i].trim().split('=')
            result[d[0]]=d[1]
        }
        return result
        
    }else{
        return {}
    }
    
    
}

const deleteAllCookies=()=>
      {
      let c=document.cookie.split(';')
      for(const k of c)
         {
         let s=k.split('=')
         document.cookie=s[0].trim()+'=;expires=Fri, 20 Aug 2021 00:00:00 UTC'
         }
      }


export {cookie_get,deleteAllCookies};