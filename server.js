async function bored(){
    const res=await fetch("http://www.boredapi.com/api/activity/");
    let data = await res.json()
    document.getElementById("display-activity").innerHTML=data.activity;

}

function notbored(){
    document.getElementById("display-activity").innerHTML="then why did u come here?";

}