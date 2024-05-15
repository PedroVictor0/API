function fazerLogin() {
    let emailInserido = document.getElementById('email').value;
    let senhaInserida = document.getElementById('password').value;
  
    const credenciais = {
      email: emailInserido,
      password: senhaInserida
    };
  
    fetch('https://reqres.in/api/login', {
      method: 'POST',
      body: JSON.stringify(credenciais),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json())
    .then((json) => {
      let boasVindas = document.getElementById('boas-vindas');
  
      if(json.token) {
        boasVindas.innerText = 'Bem-vindo ' + emailInserido;
        boasVindas.style = "background-color: green; color: white";
      } else {
        boasVindas.innerText = 'Email ou senha incorreto';
        boasVindas.style = "background-color: red; color: white";
      }
    }); 

} 
   
   function registrar() {
    let emailInserido = document.getElementById('email').value;
    let senhaInserida = document.getElementById('password').value;
  
    const credenciaisTwo = {
      email: emailInserido,
      password: senhaInserida
    };
  
    fetch('https://reqres.in/api/register', {
      method: 'POST',
      body: JSON.stringify(credenciaisTwo),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json())
    .then((json) => {
      let boasVindas = document.getElementById('registrar');
  
      if(json.token) {
        boasVindas.innerText = 'Você foi registrado!!' + emailInserido;
        boasVindas.style = "background-color: green; color: white";
      } else {
        boasVindas.innerText = 'Email ou senha incorreto';
        boasVindas.style = "background-color: red; color: white";
      }
    });
} 