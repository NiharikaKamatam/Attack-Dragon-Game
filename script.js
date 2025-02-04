let xp=0;
let health=100;
let gold=50;
let currentWeapon=0;
let fighting;
let monsterHealth;
let inventory=["stick"];

const button1=document.querySelector("#button1");
const button2=document.querySelector("#button2");
const button3=document.querySelector("#button3");
const text=document.querySelector("#text");
const xpText=document.querySelector("#xpText");
const healthText=document.querySelector("#healthText");
const goldText=document.querySelector("#goldText");
const monsterStats=document.querySelector("#monsterStats");
const monsterNameText=document.querySelector("#monsterNameText");
const monsterHealthText=document.querySelector("#monsterHealthText");

const weapons=[
    {
        name:"stick",
        power:5
    },
    {
        name:"dagger",
        power:30
    },
    {
        name:"claw hammer",
        power:50
    },
    {
        name:"sword",
        power:100
    }
];

const monsters=[
    {
        name:"slime",
        level:2,
        health:15
    },
    {
        name:"fanged beast",
        level:8,
        health:60
    },
    {
        name:"dragon",
        level:20,
        health:300
    }
];

const locations =[
    {
        name:"town square",
        "button text":["Go to Store","Go to cave","Fight Dragon"],
        "button functions":[goStore, goCave, fightDragon],
        text:"You are in the town square. You see a sign that says \"store\""
    },
    {
        name:"store",
        "button text":["Buy 10 health (10 Gold)","Buy weapon (30 Gold)","Go to town square"],
        "button functions":[buyHealth, buyWeapon, goTown],
        text:"You entered the store"
    },
    {
        name:"cave",
        "button text":["Fight slime","Flight fanged beast", "Go to town square"],
        "button functions":[fightSlime,fightBeast,goTown],
        text:"You enter the cave. You see some monsters."
    },
    {
        name:"fight",
        "button text":["Attack","Dodge", "Run"],
        "button functions":[attack,dodge,goTown],
        text:"You are fighting a monster."
    }
]

button1.onclick=goStore;
button2.onclick=goCave;
button3.onclick=fightDragon;

function update(location){
    button1.innerText=location["button text"][0];
    button2.innerText=location["button text"][1];
    button3.innerText=location["button text"][2];
    button1.onclick=location["button functions"][0];
    button2.onclick=location["button functions"][1];
    button3.onclick=location["button functions"][2];
    text.innerText=location.text;
}

function goTown(){
    update(locations[0]);
}

function goStore(){
    update(locations[1]);
}

function goCave(){
    update(locations[2]);
}

function buyHealth(){
    if(gold >=10)
    {
        gold-=10
        health+=10
        goldText.innerText=gold;
        healthText.innerText=health;
    }
    else{
        text.innerText="You do not have enough gold to buy health"; 
    }
    
}
function buyWeapon(){
    if(currentWeapon<weapons.length - 1)
    {
    if(gold>=30)
    {
        gold-=30;
        currentWeapon++;
        goldText.innerText=gold;
        let newWeapon=weapons[currentWeapon].name;
        text.innerText="You now have a " + newWeapon + ".";
        inventory.push(newWeapon);
        text.innerText+="In your inventory you have: "+inventory;
    }
    else
    {
        text.innerText="You do not have enough gold to buy weapon"; 
    }
    }
    else
    {
        text.innerText="You already have the most powerful weapon";
        button2.innerText="Sell weapon for 15 gold";
        button2.onclick=sellWeapon;
    }
}
function sellWeapon(){
    if(inventory.lenght>1){
        gold+=15;
        goldText.innerText=gold;
        let currentWeapon = inventory.shift();
        text.innerText="You sold a " +currentWeapon + ".";
        text.innerText +="In your inventory you have: "+inventory;
    }else{
        text.innerText="Dont sell your only Weapon!!!!";
    }
}


function fightSlime(){

}

function fightBeast(){

}

function fightDragon(){
    console.log("Fighting Dragon.")
}

