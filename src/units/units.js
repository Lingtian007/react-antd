export default {
  formateDate(time){
    if (!time) return '';
    let date = new Date(time)
    return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDay()
  }
}