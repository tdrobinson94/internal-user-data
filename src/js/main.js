import $ from 'jquery';

$.ajax({
  url: 'http://api.randomuser.me/?results=12',
  dataType: 'json',
  success: function(data){
  data.results.map(createUser);
  console.log(data);
}
})




var createUser = function(info){
  $('.container').append( `<div class=userContainer>
  <img src="${info.picture.large}">
  <span class="name">${info.name.first} ${info.name.last}</span>
  <span class="email">${info.email}</span>
  <span class="street">${info.location.street}</span>
  <span class="location">${info.location.city}, ${info.location.state}, ${info.location.postcode}</span>
  <span class="phone">${info.cell}</span>
  <span class="social">${info.id.value}</span>
  </div>`)
}
