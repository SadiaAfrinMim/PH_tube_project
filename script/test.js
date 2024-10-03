// const isverified = " "

// if(isverified === true){
//     console.log('user is verified');
// }
// else{
//     console.log('user is not verified');
// }

// console.log(`${isverified === true?'user is verified':'user is not verified'}`)


function getTimeString(time){
    const hour = parseFloat(time/3600)
    let remainingsecond = hour%3600
    let min = parseInt(remainingsecond / 60)
    remainingsecond = remainingsecond % 60
    return `${hour} :${min}: ${remainingsecond} ago`
}
// console.log(getTimeString(4320));