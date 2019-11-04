
  const checkPassword = async ()=>{
    let password = document.getElementById('password').value;
    let hash =  new Hashes.SHA1().hex(password);
    console.log("Password:"+password+", Hash: "+hash+", substring: "+hash.substring(0,5));
    const response = await fetch('https://api.pwnedpasswords.com/range/'+hash.substring(0,5))
    console.log("Response: "+response);
    const data = await response.text();
    console.log("Data : ",data);
    var array = data.split("\r\n");
    var suffix = hash.substring(5,40).toUpperCase();
    var count=0;
    for (var i = 0; i < array.length; i++) {
      let f = array[i].split(":");
      if (f[0]===suffix) {
        var b = parseInt(f[1]);
          count = count + b;
      }
    }
    if (count<300) {
      alert("Password has been breached "+count+" times.\nIt is safe enough");
    } else if (count>=300) {
      alert("Password has been breached "+count+" times.\nPassword is unsafe choose another password");
    }
    console.log("count : "+count)
  }

    document.getElementById("myBtn")
    .addEventListener("click", checkPassword);
