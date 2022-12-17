
let Login = async()=>{

    // location.href = "crud.html";

    try {
        let login_data = {
            "password": document.getElementById('login_password').value,
            "username": document.getElementById('login_username').value,
        }

        // main url -`https://masai-api-mocker.herokuapp.com/auth/register`;
        const url =`https://masai-api-mocker.herokuapp.com/auth/login`;

        let res = await fetch(url,{
            method: 'POST',
            body: JSON.stringify(login_data),
            headers: {'Content-Type': 'application/json'},
        })
        let data = await res.json();
        console.log('login-data',data);
        alert('login successful');
        location.href = "crud.html";

    } catch (error) {
        console.log(error);
        alert('somthing went wrong sign-up with new account')
    }

}