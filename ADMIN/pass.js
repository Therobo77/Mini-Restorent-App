let pass = ()=>{
    // console.log('pass');
    let npas = document.getElementById('pass').value;
    if(npas ==='vanshusinha@8873'){
        alert('Now You Can Sign-Up');
        location.href = "signup.html";
    }
    else{
        alert('Please Enter right Security Code');
    }
}