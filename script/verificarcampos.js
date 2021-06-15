function verificarcampos(){
    var inputs = document.getElementsByClassName('required');
  var len = inputs.length;
  var valid = true;
  for(var i=0; i < len; i++){
     if (!inputs[i].value){ valid = false; }
  }
  if (!valid){
    alert('Algum campo não foi devidaente preenchido');
    return false;
  } else { return true; }
}