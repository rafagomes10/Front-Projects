function darkMode() {
  document.body.classList.add("darkMode");
}

function lightMode() {
  document.body.classList.remove("darkMode");
}

let contatos = [];

const getData = async () => {
  const response = await fetch(contatos);
  const data = await response.json();

  const tarefa = data.filter((tarefa) => tarefa.checkbox === true);

  console.log(tarefa);
};
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("envia").addEventListener("click", function (sub) {
    let nome = document.getElementById("nome").value; //Carregamos o valor do campo nome
    let email = document.getElementById("email1").value; //Carregamos o valor do campo e-mail
    let nascimento = document.getElementById("nascimento").value; //Carregamos o valor do campo nascimento
    let mensagem = document.getElementById("msg").value;
    let checkbox = document.getElementById("receberEmail").checked;
    let validacoes = 0;

    if (nome.length > 5) {
      validacoes++;
    }

    if (email.indexOf("@") > 0 && email.indexOf(".") > 0) {
      validacoes++;
    }

    if (nascimento.length > 7) {
      validacoes++;
    }

    if (mensagem.length > 1) {
      validacoes++;
    }

    if (validacoes != 4) {
      sub.preventDefault();
      alert("Preencha corretamente todos os campos");
    } else {
      let contato = {
        nome: nome,
        email: email,
        nascimento: nascimento,
        mensagem: mensagem,
        checkbox: checkbox,
      };

      contatos.push(contato);

      // getData();
      localStorage.setItem(contato.email, JSON.stringify(contato));
      document.getElementById("nome").value = ""; //Carregamos o valor do campo nome
      document.getElementById("email1").value = ""; //Carregamos o valor do campo e-mail
      document.getElementById("nascimento").value = ""; //Carregamos o valor do campo nascimento
      document.getElementById("msg").value = "";
    }
  });
});
