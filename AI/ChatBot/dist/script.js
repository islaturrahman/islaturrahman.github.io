//get submit

//get keyup enter
$('#keyword').keyup(function (event) {
  if (event.keyCode == 13) {
    startAi()
  }
})

function startAi() {
  //get input key
  var key = document.querySelector('#keyword').value;
  if (key == "") {
    alert("Keyword masih kosong!");
    var key = document.querySelector('#keyword').focus();
  }
  else {
    console.log(key)
    clearInputKey();
    setDataAPI(key)
  };
}



function clearInputKey() {
  var key = document.querySelector('#keyword').value = '';
}

function randomUid() {
  return Math.floor(Math.random() * Math.random()) + 1000;
}

function setDataAPI(keyword) {

  $('.list-data').append(`<div class="chat__conversation-board__message-container reversed">
    <div class="chat__conversation-board__message__person">
      <div class="chat__conversation-board__message__person__avatar"><img src="https://islaturrahman.github.io/assets/img/myphotocircle.png" alt="Dennis Mikle"/></div><span class="chat__conversation-board__message__person__nickname">Dennis Mikle</span>
    </div>
    <div class="chat__conversation-board__message__context">
      <div class="chat__conversation-board__message__bubble"> <span>`+ keyword + `</span></div>
    </div>
  </div>`);

  var uid = randomUid()
  $.ajax({
    type: 'GET',
    dataType: "json",
    url: 'http://api.brainshop.ai/get',
    data: {
      'bid': '169569',
      'key': 'bvNVWMbc9TL1XqF4',
      'uid': uid,
      'msg': keyword
    },
    success: function (result) {
      $('.list-data').append(`<div class="chat__conversation-board__message-container">
            <div class="chat__conversation-board__message__person">
              <div class="chat__conversation-board__message__person__avatar"><img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Monika Figi"/></div><span class="chat__conversation-board__message__person__nickname">Monika Figi</span>
            </div>
            <div class="chat__conversation-board__message__context">
              <div class="chat__conversation-board__message__bubble"> <span>`+ result.cnt + `</span></div>
            </div>
          </div>`)

    }
  });
}

