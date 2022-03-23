menu();
async function menu(){
    try{
     let url=`https://themealdb.com/api/json/v1/1/categories.php`;
     let res=await fetch(url);
     let mydata=await res.json();
     let data=mydata.categories;
     console.log("data is ",data);
     display(data)
}
catch(err){
    console.log("error is"+err)
}
finally{
    console.log("complete");
}
}
let body=document.querySelector("body");
let box=document.createElement("div");

let subdiv=document.createElement("div");
function display(data){
    
    data.forEach(item => {
        
    
    
    let name=document.createElement("h2");
    name.textContent="Dish: "+item.strCategory;    
    let no=document.createElement("h3");
    no.textContent="No: "+item.idCategory; 
    let des=document.createElement("h4");
    des.textContent="Description: "+item.strCategoryDescription;
    let img=document.createElement("img");
    img.setAttribute("src",item.strCategoryThumb);  
    img.style.height="300px";
    img.style.width="400px";
    let btn=document.createElement("button");
    btn.textContent="Add to cart";
    btn.style.color="red"; 
    btn.style.width="200px";
    var food=JSON.parse(localStorage.getItem("fcart"))||[];
    btn.addEventListener("click",function(){
       
       var list={
           num:item.idCategory,
           name:item.strCategory,
           image:item.strCategoryThumb,
           desp:item.strCategoryDescription
       }
       food.push(list);
       localStorage.setItem("fcart",JSON.stringify(food));
       console.log(food);
       console.log(food.length);
       
       window.location.href="cart.html";
    });
    
    box.append(no,img,name,des,btn);
    //let box1=document.createElement("div");
    let ttl=food.length;
    document.getElementById("top").textContent="Total items in cart: "+food.length;
    // total=document.createElement("p");
    // total.setAttribute("id","top")
    //  total.textContent= ""+ttl;
    // box1.append(total)
    subdiv.append(box);
    body.append(subdiv);
    });
    
   
}
function addtocart(data){
    console.log(data)
}
