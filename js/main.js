var check_id = document.querySelector('#custom_rs');
var custom_rs_id = document.querySelector('.custom_room_size');
var room_select_id = document.querySelector('#room_size');
var calc_btn = document.querySelector('button#calculation');


check_id.addEventListener( 'click' ,function() {
  if( check_id.checked == true ) {
    custom_rs_id.style.display = 'block';
    check_id.setAttribute( 'class', 'custom_rs' );
    room_select_id.setAttribute( 'disabled', 'disabled' );
    room_select_id.value = "";
  } else {
    custom_rs_id.style.display = 'none';
    check_id.removeAttribute( 'class', 'custom_rs' );
    room_select_id.removeAttribute( 'disabled', 'disabled' );
  }
});

room_select_id.addEventListener( 'click', function() {
  if( room_select_id.value != "" ) {
    check_id.setAttribute( 'disabled', 'disabled' );
    check_id.setAttribute( 'class', 'disable-checkbox' );
  } else {
    check_id.removeAttribute( 'disabled', 'disabled' );
    check_id.removeAttribute( 'class', 'disable-checkbox' );
  }
});

calc_btn.addEventListener( 'click', function(){
  var room_size = document.getElementById('room_size').value;
  var tile_height = document.getElementById('tile_height').value;
  var tile_width = document.getElementById('tile_width').value;
  var tile_price = document.getElementById('tile_price').value;
  var room_width = document.getElementById('room_width').value*12;
  var room_height = document.getElementById('room_height').value*12;
  var total_tile_id = document.getElementById('total_tile');
  var total_price_id = document.getElementById('total_price');
  var err_msg = document.getElementById('err_msg');
  var result_area = document.querySelector('.result_area');
  var form_area = document.querySelector('.form_area');

  if( room_size != "" ) {
    if( room_size == 1 ) {
      var r_width = 22*12;
      var r_height = 18*12;
    }
    if( room_size == 2 ) {
      var r_width = 20*12;
      var r_height = 16*12;
    }
    if( room_size == 3 ) {
      var r_width = 18*12;
      var r_height = 12*12;
    }
    if( room_size == 4 ) {
      var r_width = 12*12;
      var r_height = 10*12;
    }

    var total_tile = (r_width*r_height)/(tile_height*tile_width);
    var totol_price = total_tile*tile_price;
    total_tile_id.innerHTML = Math.round(total_tile);
    total_price_id.innerHTML = Math.round(totol_price);
    result_area.style.display = "block";
    form_area.style.display = "none";
  } else if ( check_id.checked == true ) {
    var total_tile = (room_width*room_height)/(tile_height*tile_width);
    var totol_price = total_tile*tile_price;
    total_tile_id.innerHTML = Math.round(total_tile);
    total_price_id.innerHTML = Math.round(totol_price);
    result_area.style.display = "block";
    form_area.style.display = "none";
  } else {
    err_msg.style.display = "block";
    setTimeout(() => {
      err_msg.style.display = "none";
    }, 5000);
  }
});