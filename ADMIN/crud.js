//  Image
// - Title
// - Description
// - Price
// - Ratings
// - You can add some additional info as well to make it look more realistic.

// 8. Implement pagination: Show 5 restaurants per page.

let addProduct = async ()=>{
    
    let id = document.getElementById('id').value;
    let image = document.getElementById('image').value;
    let title = document.getElementById('title').value;
    let description = document.getElementById('desc').value;
    let price = document.getElementById('price').value;
    let rating = document.getElementById('rating').value;
    let author = document.getElementById('author').value;

    let pr_details = {
        id,
        image,
        title,
        description,
        price,
        rating,
        author,
    }

    try{
    let res = await fetch(`http://localhost:3000/posts`,{
        
    method:'POST',
    body: JSON.stringify(pr_details),
    headers: {'Content-Type': 'application/json'},
    })
    console.log("res",res)
    alert("Product Added successfully!");
}catch(err){
    console.log("error",err);
    alert("error");
}
}


// ------update -------


let UpdatePost = async ()=>{
    
    let id = document.getElementById('update_id').value;
    let image = document.getElementById('update_image').value;
    let title = document.getElementById('update_title').value;
    let description = document.getElementById('update_desc').value;
    let price = document.getElementById('update_price').value;
    let rating = document.getElementById('update_rating').value;
    // let author = document.getElementById('update_author').value;

    let pr_detail = {
        id,
        image,
        title,
        description,
        price,
        rating,
    }

    try{
    let res = await fetch(`http://localhost:3000/posts/${id}`,{
        
    method:'PATCH',
    body: JSON.stringify(pr_detail),
    headers: {'Content-Type': 'application/json'},
    })
    console.log("upadated_res",res)
    alert("Product updated successfully!");
}catch(err){
    console.log("error",err);
    alert("error");
}
}


let deletePost = async ()=>{
    
    let id = document.getElementById('id_delete').value;
   

    try{
    let res = await fetch(`http://localhost:3000/posts/${id}`,{
        
    method:'DELETE',
    headers: {'Content-Type': 'application/json'},
    })
    console.log("res",res)
    alert("Product Removed successfully!");
}catch(err){
    console.log("error",err);
    alert("error");
}
}

// addProduct()