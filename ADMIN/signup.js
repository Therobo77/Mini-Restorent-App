let Register = async () =>{

    try{
    let Register_data = {
        "name": document.getElementById('name').value,
        "email": document.getElementById('email').value,
        "password": document.getElementById('password').value,
        "username": document.getElementById('username').value,
        "mobile": document.getElementById('mobile').value,
        "description": document.getElementById('description').value 
      };

    //   Base URL:- "https://masai-api-mocker.herokuapp.com".
    // sub url - auth/register
    // main url - `https://masai-api-mocker.herokuapp.com/auth/register`;

    const url =`https://masai-api-mocker.herokuapp.com/auth/register`;

    let res = await fetch(url,{
        method: 'POST',
        body: JSON.stringify(Register_data),
        headers: {'content-type': 'application/json',},
    });
    let data =await res.json();
    console.log("Registration status:",data);
    if(data.error === true ) {
        alert("Registration Failed Kindly use Right credentials")
    }else{
        alert("Registration Successful ")
    }
}catch(err) {
    console.log(err);
}
    // error: true, 
}