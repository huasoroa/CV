
  const checkPassword = async ()=>{
    let password = document.getElementById('password').value;

    const response = await fetch('https://api.pwnedpasswords.com/pwnedpassword/'+password)
    const myJson = await response.json();
    alert("Json:"+myJson);
  }

    document.getElementById("myBtn")
    .addEventListener("click", checkPassword);
