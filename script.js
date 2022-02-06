let modal=document.getElementById("modal");
let display=document.getElementById("display");
let para=document.getElementById( "para");
let day=document.getElementById( "day");
let close=document.getElementsByClassName("fa-times");
close[0].addEventListener("click", (e)=>{
    modal.style.display="none";
})
function main(){
    modal.style.display="block";
}
function rose(){
    display.style.backgroundImage='url("https://source.unsplash.com/random/?blur")';
    para.innerHTML="National flower of U.S. roses roses are one of the oldest flowers, that are edible. Also the most espensive rose Juliet was sold in 15.8 million.";
   day.innerHTML="~rose day";
}
function ring(){
    display.style.backgroundImage='url("https://source.unsplash.com/random/?blur&ring")';
    para.innerHTML="Ring described unbroken circle of life, dates back to 6000years. The concept of wear ring on fourth finger goes to egyptians, and is a symbol of ownership.";
    day.innerHTML="~propose day";
}
function choco(){
    display.style.backgroundImage='url("https://source.unsplash.com/random/?blur&chocolate")';
    para.innerHTML="Chocolates are made from cocoa beans and are known to be stress busters, relaxants and aphrodisiacs.";
    day.innerHTML="~chocolatee day";
}
function teddy(){
    display.style.backgroundImage='url("https://source.unsplash.com/random/?blur&teddy")';
    para.innerHTML="It was named in honor of President Theodore Roosevelt, after he refused to shoot a bear during a Mississippi hunting trip in November 1902.";
    day.innerHTML="~teddy day";
}
function promise(){
    display.style.backgroundImage='url("https://source.unsplash.com/random/?blur&promise")';
    para.innerHTML="A promise can be made verbally (by saying it), or it can be written down as a contract. Breaking a promise, or not keeping it, is often just bad manners, but it can sometimes be illegal, such as when a contract is not kept. ";
    day.innerHTML="~promise day";
}
function hug(){
    display.style.backgroundImage='url("https://source.unsplash.com/random/?blur&hug")';
    para.innerHTML="A 20-second hug, along with 10 minutes of hand-holding, also reduces the harmful physical effects of stress, including its impact on your blood pressure and heart rate. This makes sense, since hugging is known to lower levels of stress hormones like cortisol.";
    day.innerHTML="~hug day";
}
function kiss(){
    display.style.backgroundImage='url("https://source.unsplash.com/random/?blur&handshake")';
    para.innerHTML="In Indiana it is illegal for men with mustaches to habitually kiss human beings. Presumably, any other species is fair game. In Colorado\’s Logan County, a man is forbidden to kiss a woman while she\’s asleep. And in Hartford, Connecticut, men are apparently prohibited from kissing their wives on Sundays.";
    day.innerHTML="~kiss day";
    
}
function valentine(){
    display.style.backgroundImage='url("https://source.unsplash.com/random/?blur&valentine")';
    para.innerHTML="The Feast of Saint Valentine was established by Pope Gelasius I in AD 496 to be celebrated on February 14 in honour of Saint Valentine of Rome, who died on that date in AD 269";
    day.innerHTML="~valentine's day";
}