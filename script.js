function getdata(){
    return fetch("https://api.openbrewerydb.org/breweries");
}
async function foo(){
    let res=await getdata();
    let result=await res.json();
    console.log(result);
    try{
         for(i=0; i<10; i++){
             console.log(`Name:${result[i].name}, Brewery_type:${result[i].brewery_type}`)
            document.getElementById("name").innerHTML+=`Name:${result[i].name}, Brewery_type:${result[i].brewery_type}<br>`;
        }
        for(i=10; i<20; i++){
            console.log(`Name:${result[i].name}, Brewery_type:${result[i].brewery_type}`)
            document.getElementById("name2").innerHTML+=`Name:${result[i].name}, Brewery_type:${result[i].brewery_type}<br>`;
        }
    }catch(error){
        console.log(error);
    }
}
//foo();
async function add(){
    let res=await getdata();
    let result=await res.json();
    console.log(result);
    try{
         for(i=0; i<10; i++){
            console.log(`Address:${result[i].street},${result[i].state},${result[i].postal_code}`)
            document.getElementById("add1").innerHTML+=`Address:${result[i].street},${result[i].state},${result[i].postal_code}<br>`;
        }
        for(i=10; i<20; i++){
            console.log(`Address:${result[i].street},${result[i].state},${result[i].postal_code}`)
            document.getElementById("add2").innerHTML+=`Address:${result[i].street},${result[i].state},${result[i].postal_code}<br>`;
        }
    }catch(error){
        console.log(error);
    }
}
async function url(){
    let res=await getdata();
    let result=await res.json();
    console.log(result);
    try{
         for(i=0; i<10; i++){
            console.log(`Website url:${result[i].website_url}`)
            document.getElementById("url1").innerHTML+=`Website url:${result[i].website_url}<br>`;
        }
        for(i=10; i<20; i++){
            console.log(`Website url:${result[i].website_url}`)
            document.getElementById("url2").innerHTML+=`Website url:${result[i].website_url}<br>`;
        }
    }catch(error){
        console.log(error);
    }
}
async function ph(){
    let res=await getdata();
    let result=await res.json();
    console.log(result);
    try{
         for(i=0; i<10; i++){
            console.log(`Phone:${result[i].phone}`)
            document.getElementById("ph1").innerHTML+=`Phone:${result[i].phone}<br>`;
        }
        for(i=10; i<20; i++){
            console.log(`Phone:${result[i].phone}`)
            document.getElementById("ph2").innerHTML+=`Phone:${result[i].phone}<br>`;
        }
    }catch(error){
        console.log(error);
    }
}