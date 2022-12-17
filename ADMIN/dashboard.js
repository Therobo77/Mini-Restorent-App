
let getData1 = async (page_num,limit) => {

    let res = await fetch(`http://localhost:3000/posts?_page=${page_num}&_limit=${limit}`);
    console.log('res',res);
    let data = await res.json();
    console.log('data',data);
    apendData(data)
    
    // showButtons(data.length,3)
   
};

getData1(1,2);
 
 let ndata;
let getData = async (page_num,limit) => {

    let res = await fetch(`http://localhost:3000/posts?_page=${page_num}&_limit=${limit}`);
    console.log('res',res);
    let data = await res.json();
    console.log('data',data);
    apendData(data)
    ndata=data;
    // showButtons(data.length,3)
   
};

// getData();

let cont = document.getElementById('v-content');
let apendData = (data)=>{
   cont.innerHTML = null;
    data.forEach(({author,
    description,
    id,
    image,
    price,
    rating,
    title}) => {
        let main = document.createElement('div');

        let images = document.createElement('img');
        images.src = image;

        let malik = document.createElement('h2');
        malik.innerHTML = `AUTHOR: ${author} - ID: ${id}`

        let pr = document.createElement('h3');
        pr.innerHTML = `PRICE: ${price}₹  - Rating: ${rating}`

        let tit = document.createElement('h4');
        tit.innerHTML = title;

        let desc = document.createElement('p');
        desc.innerHTML = description;

        let btn = document.createElement('button');
        btn.innerText = 'Remove Item';
        btn.style.backgroundColor = 'red';
        btn.style.color = 'white';
        btn.addEventListener('click',function() {
            hatao(id);
        });

        main.append(images,malik,pr,tit,desc,btn);
        cont.append(main);
    });
}

let  hatao = async (id) =>{
    // console.log('hatao');

    try{
        let res = await fetch(`http://localhost:3000/posts/${id}`,{
            
        method:'DELETE',
        headers: {'Content-Type': 'application/json'},
        })
        console.log("res",res)
        // alert("Product Removed successfully!");
    }catch(err){
        console.log("error",err);
        alert("error");
    }
}



// ------- pagination------------

const showButtons = (results,perPage) => {
    console.log('showButtons');

    let button_div = document.getElementById('buttons');
    // let  results = data.length;
    // let perPage = 3;

    // console.log('data.length',results);

    let buttons = Math.ceil(results / perPage);

    for(let i=1; i<=buttons; i++) {
        let button = document.createElement('button');
        button.innerText = i;
        button.onclick = function(){
            // pagination();
            getData(i,perPage);
            // location.reload();
        }

        button_div.append(button);
    }
}
// showButtons(data.length,3)
showButtons(11,2)

// console.log('ndata',ndata);
















// //  ---- working of buttons ------

// let  pagination = ()=>{
//     console.log('pagination button clicked');
// }