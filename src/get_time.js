// function get_time(old) {
//     let now=new Date()
//     let time =now.getTime()-old
//     time=parseInt(time/1000)
//     let day=parseInt(time/60/60/24)
//     let hour=((time/60/60))%24
//     let min=parseInt((hour*60)%60)
//     if(day===0){
//       if(hour===0){
//         if(min===0){
//           time='<1 minute ago'
//         }else{
//           time=`${min} minutes ago`
//         }
//       }else{
//         time=`${hour} hours ago`
//       }
//     }else{
//       if(day<30){
//         time=`${day} day ago`
//       }else if(day>365){
//         time=`${parseInt(day/365)} year ago`
//       }else{
//         time=`${parseInt(day/30)} month ago `
//       }

//     }
//     return time 
// }

function GetTime(old) {
  let txt
  if (old == 0) {
    txt = '0'
  } else {
    let now = new Date()
    let time = parseInt((now.getTime() - old) / 1000)
    if (time < 60) {
      txt = `${time} seconds`
    } else if (time >= 60 && time < 3600) {
      txt = `${parseInt(time / 60)} minuts`
    } else if (time >= 3600 && 86400 > time) {
      txt = `${parseInt(time / 3600)} hours`
    } else {
      time = parseInt(time / 86400)
      if (time < 31) {
        txt = `${time} days`
      } else if (time >= 31 && time < 365) {
        time = parseInt(time / 30)
        txt = `${time} months`
      } else {
        time = parseInt(time / 365)
        txt = `${time} years`
      }
    }
  }




  return txt
}
export default GetTime;