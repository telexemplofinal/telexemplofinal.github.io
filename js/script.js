
$('#oriVal').on('change', function(){

  $('#btnGru').html('');
  var origem = $('#oriVal').val();
  switch(origem){
    case '11': 
      $('#desGru').html('<label class="form-label text-white"><strong>Informe o destino:</strong></label>\
                    <select class="form-control" id="desVal">\
                      <option value="0">Escolha</option>\
                      <option value="16">16 - Ribeirão Preto</option>\
                      <option value="17">17 - Mirassol</option>\
                      <option value="18">18 - Tupi Paulista</option>\
                    </select>');
      break;
    case '16': 
      $('#desGru').html('<label class="form-label text-white"><strong>Informe o destino:</strong></label>\
                    <select class="form-control" id="desVal">\
                      <option value="0">Escolha</option>\
                      <option value="11">11 - São Paulo</option>\
                    </select>');
      break;
    case '17': 
      $('#desGru').html('<label class="form-label text-white"><strong>Informe o destino:</strong></label>\
                    <select class="form-control" id="desVal">\
                      <option value="0">Escolha</option>\
                      <option value="11">11 - São Paulo</option>\
                    </select>');
      break;
    case '18': 
      $('#desGru').html('<label class="form-label text-white"><strong>Informe o destino:</strong></label>\
                    <select class="form-control" id="desVal">\
                      <option value="0">Escolha</option>\
                      <option value="11">11 - São Paulo</option>\
                    </select>');
      break;
    default: 
      $('#desGru').html('');   
  }
  $('#desVal').on('change', function(){
    var destino = $('#desVal').val();
    if(destino == '0'){
      $('#btnGru').html('');
    }else{
      $('#btnGru').html('<button class="btn btn-block btn-cor2 text-white" id="simule">Simular</button>');
    }

    $('#simule').on('click', function(event){
      event.preventDefault();
      var minutos = $('#minVal').val();
      if(minutos <= 0 || minutos == ''){
        $('#result').html('<div class="alert alert-danger text-center">Quantidade de minutos inválida</div>')
      }

      switch(origem){
        case '11' :
          switch(destino){
            case '16' :
              var val = 1.9;
              var old = (minutos * val).toFixed(2);
              resultado(val, minutos, old);
               
              break
            case '17' :
              var val = 1.7;
              var old = (minutos * val).toFixed(2);
              resultado(val, minutos, old);
              break
            case '18' :
              var val = 0.9;
              var old = (minutos * val).toFixed(2);
              resultado(val, minutos, old);
              break
            default :
              $('#result').html('<div class="alert alert-danger text-center">Destino Inválido!</div>');
              break
          }
          break;
        case '16' :
          if(destino != '11'){
            $('#result').html('<div class="alert alert-danger text-center">Destino Inválido!</div>')
          }else{
              var val = 2.9;
              var old = (minutos * val).toFixed(2);
              resultado(val, minutos, old);             
          }
          break;
        case '17' :
          if(destino != '11'){
            $('#result').html('<div class="alert alert-danger text-center">Destino Inválido!</div>')
          }else{
            var val = 2.7;
              var old = (minutos * val).toFixed(2);
              resultado(val, minutos, old);
            
          }
          break;
        case '18' :
          if(destino != '11'){
            $('#result').html('<div class="alert alert-danger text-center">Destino Inválido!</div>')
          }else{
            var val = 1.9;
              var old = (minutos * val).toFixed(2);
              resultado(val, minutos, old);
            
          }
          break;
        default:
          $('#result').html('<div class="alert alert-danger text-center">Origem Inválida</div>')   
      }
    })

  })

})

function resultado(val, min, old){
  var plano30 = (min - 30) * (val * 1.1);
  var plano60 = (min - 60) * (val * 1.1);
  var plano120 = (min - 120) * (val * 1.1);
  if(plano30 <= 0) plano30 = 0;
  if(plano60 <= 0) plano60 = 0;
  if(plano120 <= 0) plano120 = 0;

  $('#result').html('<table class="bg-white table table-bordered table-striped mt-4">\
                      <thead>\
                        <tr>\
                          <th>Plano</th>\
                          <th>Valor com plano</th>\
                          <th>Valor sem plano</th>\
                        </tr>\
                      </thead>\
                      <tbody>\
                        <tr>\
                          <td>FaleMuito 30</td>\
                          <td>R$ '+plano30.toFixed(2)+'</td>\
                          <td>R$ '+old+'</td>\
                        </tr>\
                        <tr>\
                          <td>FaleMuito 60</td>\
                          <td>R$ '+plano60.toFixed(2)+'</td>\
                          <td>R$ '+old+'</td>\
                        </tr>\
                        <tr>\
                          <td>FaleMuito 120</td>\
                          <td>R$ '+plano120.toFixed(2)+'</td>\
                          <td>R$ '+old+'</td>\
                        </tr>\
                      </tbody>\
                    </table>')
}
