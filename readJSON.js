module.exports = function(dest, src) {
  var data_file = null;
  for (i=1; i<=12; i++) {
    var num_str = null;
    if(i>9) {
      num_str = "" + i;
    } else {
      num_str = "0" + i;
    }
    if(dest.match("ren13" + num_str)){
      data_file = "./src/jade/tokeure_archive/ren13" + num_str + ".json";
    }
    else if(dest.match("TK13" + num_str)){
      data_file = "./src/jade/tokeure_archive/TK13" + num_str + ".json";
    }
  }
  if(data_file != null){
    try {
      return require(data_file);
    } catch(e){}
  }
}