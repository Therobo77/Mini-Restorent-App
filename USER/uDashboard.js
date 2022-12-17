let ndata;
let getData = async () => {

    let res = await fetch(`http://localhost:3000/posts`);
    console.log('res',res);
    let data = await res.json();
    console.log('data',data);
    apendData(data)
    PLTH(data)
    // ndata = data;

    // let {price} = data;
    // PLTH(price)
};

getData();

let apendData = (data)=>{
    ndata= data;
    let cont = document.getElementById('v-content');
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

        let order = document.createElement('button');
        order.innerText = 'Order Now';
        order.style.backgroundColor = 'red';
        order.style.color = 'white';
        order.addEventListener('click',function() {
            orders(price);
        });

        main.append(images,malik,pr,tit,desc,order);
        cont.append(main);
    });
}

let orders=(price)=>{
    alert(`you ordered worth ${price}`);
}

let PLTH =(ndata)=>{
  console.log(ndata);
}