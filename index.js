document.getElementById("addButton").addEventListener("click", function () {
    var name = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
  
    if (name && date && time) {
      var guestList = document.getElementById("guestList");
      var guestItem = document.createElement("div");
      guestItem.className = "guest-item";
  
      var guestInfo = document.createElement("span");
      guestInfo.textContent = `Nome: ${name}, Data: ${date}, Horário: ${time}`;
      guestItem.append(guestInfo);
  
      var removeButton = document.createElement("button");
      removeButton.textContent = "Remover";
  
      //Remover
      removeButton.addEventListener("click", function () {
        guestList.removeChild(guestItem);
      });
  
      /// Adiciona o botão ao 'div' do convidado.
      guestItem.append(removeButton);
      // Adiciona o novo convidado à lista de convidados.
      guestList.append(guestItem);
  
      //Limpo os campos
      document.getElementById("name").value = "";
      document.getElementById("date").value = "";
      document.getElementById("time").value = "";
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  });
  