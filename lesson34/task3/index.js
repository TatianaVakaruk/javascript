const formElem = document.querySelector(".login-form");
const buttonElem = document.querySelector('.submit-button');
const baseUrl = 'https://63ad3e19da81ba97619671ad.mockapi.io/users';

const validate = () => {
  if (formElem.reportValidity()) {
    buttonElem.removeAttribute("disabled");
  } else {
    buttonElem.setAttribute("disabled", true);
  }
};

formElem.addEventListener("input", validate);

 const data = JSON.stringify(Object.fromEntries(new FormData(formElem)));
  const saveData = data=>{
  return fetch(`${baseUrl}/${data}`).then(response=>{response.json()});
}

const putData = data=>{
  formElem.reset();
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
}).then(data=>alert(data));
}

buttonElem.addEventListener('click', saveData, putData);
