const counter = document.getElementById("counter");
const enemy = document.getElementById("enemy");
const deadEnemy = document.getElementById("deadEnemy");
const moneyCounter = document.getElementById("money");
const sword = document.getElementById("sword");
const poison = document.getElementById("poison");
const knight = document.getElementById("knight");
const archer = document.getElementById("archer");
const mage = document.getElementById("mage");
const moneyPerSecondCounter = document.getElementById("moneyPerSecond");
const damagePerSecondCounter = document.getElementById("damagePerSecond");
const secondJob = document.getElementById("secondJob");
const merchant = document.getElementById("merchant");
const workshop = document.getElementById("workshop");
const manufacture = document.getElementById("manufacture");
const factory = document.getElementById("factory");
const club = document.getElementById("club");
const damageCounter = document.getElementById("damage");
const musicButton = document.getElementById("music");
const musicMutedButton = document.getElementById("mutedMusic");
const audio = document.getElementById("audio");
const audio2 = document.getElementById("audio2");
const deathCounter = document.getElementById("deathCounter");
const menuButton = document.getElementById("menu");
const main = document.getElementById("main");
const mainMenu = document.getElementById("mainMenu");
const mesto = document.getElementById("mesto");
const hospoda = document.getElementById("hospoda");
const backButton = document.getElementById("back");
const nextUpdate = document.getElementById("nextUpdate");

let maxHp = 20;
let hp = 20;
let damage = 1;
let money = 0;
let maxMoney = 10;
let deaths = 0;
let up1 = 0;
let price1 = 10;
let up2 = 0;
let price2 = 50;
let damageOverTime = 0;
let up3 = 0;
let price3 = 300;
let up4 = 0;
let price4 = 1000;
let up5 = 0;
let price5 = 2000;
let moneyPerSecond = 0;
let price6 = 10;
let price7 = 50;
let price8 = 300;
let price9 = 1000;
let price10 = 2000;
let up6 = 0;
let up7 = 0;
let up8 = 0;
let up9 = 0;
let up10 = 0;

var body = document.getElementsByTagName("body")[0];
var x = window.matchMedia("(max-width: 1024px)");

window.onload = () => {
  setInterval(() => {
    if (hp > 0) {
      hp -= damageOverTime;
      counter.innerHTML = `<img src="./res/img/hp.png" alt="">: ${hp}/${maxHp}`;
    }
  }, 1000);

  setInterval(() => {
    damagePerSecondCounter.innerHTML = `Damage per second: ${damageOverTime}`;
  }, 1000);

  setInterval(() => {
    money += moneyPerSecond;
    moneyPerSecondCounter.innerHTML = `Money per second: ${moneyPerSecond}`;
    moneyCounter.innerHTML = `Money: ${money}`;
  }, 1000); // peníze za sekundu

  setInterval(() => {
    if (hp <= 0) {
      enemy.style.display = "none";
      deadEnemy.style.display = "block";

      hp = Math.min(0);
      money += maxMoney;
      maxMoney *= 1.3; //money scaling
      maxMoney = Math.round(maxMoney);
      moneyCounter.innerHTML = `Money: ${money}`;
      maxHp *= 1.2; //hp scaling
      maxHp = Math.round(maxHp);

      setTimeout(() => {
        deaths++;
        deathCounter.innerHTML = `Kills: ${deaths}`;
        hp += maxHp;
        hp = Math.max(maxHp);
        counter.innerHTML = `<img src="./res/img/hp.png" alt="">: ${hp}/${maxHp}`;
        enemy.style.display = "block";
        deadEnemy.style.display = "none";
      }, 1000);
    }
  }, 1500);
};

enemy.onclick = () => {
  if (hp > 0) {
    hp -= damage;
  }
  enemy.style.transform = "scale(0.9)";
  counter.innerHTML = `<img src="./res/img/hp.png" alt="">: ${hp}/${maxHp}`;

  setTimeout(() => {
    enemy.style.transform = "scale(1)";
  }, 100);

  if (hp <= 0) {
    enemy.style.display = "none";
    deadEnemy.style.display = "block";
  }
};

sword.onclick = () => {
  if (money >= price1) {
    up1++;
    damage++;
    money -= price1;
    price1 *= 1.8;
    price1 = Math.round(price1);
    sword.innerHTML = `Sword: ${up1} Gold: ${price1}`;
    moneyCounter.innerHTML = `Money: ${money}`;
    damageCounter.innerHTML = `Damage: ${damage}`;
  }
};

poison.onclick = () => {
  if (money >= price2) {
    money -= price2;
    price2 *= 1.8;
    damageOverTime += 2;
    up2 += 1;
    moneyCounter.innerHTML = `Money: ${money}`;

    price2 = Math.round(price2);
    poison.innerHTML = `Poison: ${up2} Gold: ${price2}`;
  }
};

knight.onclick = () => {
  if (money >= price3) {
    money -= price3;
    price3 *= 1.8;
    damageOverTime += 15;
    up3 += 1;
    moneyCounter.innerHTML = `Money: ${money}`;
    price3 = Math.round(price3);
    knight.innerHTML = `Knight: ${up3} Gold: ${price3}`;
  }
};

archer.onclick = () => {
  if (money >= price4) {
    money -= price4;
    price4 *= 1.8;
    damageOverTime += 50;
    up4 += 1;
    moneyCounter.innerHTML = `Money: ${money}`;
    price4 = Math.round(price4);
    archer.innerHTML = `Archer: ${up4} Gold: ${price4}`;
  }
};

mage.onclick = () => {
  if (money >= price5) {
    money -= price5;
    price5 *= 1.8;
    damageOverTime += 100;
    up5 += 1;
    moneyCounter.innerHTML = `Money: ${money}`;
    price5 = Math.round(price5);
    mage.innerHTML = `Mage: ${up5} Gold: ${price5}`;
  }
};

secondJob.onclick = () => {
  if (money >= price6) {
    money -= price6;
    price6 *= 1.8;
    moneyPerSecond += 1;
    up6 += 1;
    moneyCounter.innerHTML = `Money: ${money}`;
    price6 = Math.round(price6);
    secondJob.innerHTML = `Second Job: ${up6} Gold: ${price6}`;
  }
};

merchant.onclick = () => {
  if (money >= price7) {
    money -= price7;
    price7 *= 1.8;
    moneyPerSecond += 3;
    up7 += 1;
    moneyCounter.innerHTML = `Money: ${money}`;
    price7 = Math.round(price7);
    merchant.innerHTML = `Merchant: ${up7} Gold: ${price7}`;
  }
};

workshop.onclick = () => {
  if (money >= price8) {
    money -= price8;
    price8 *= 1.8;
    moneyPerSecond += 10;
    up8 += 1;
    moneyCounter.innerHTML = `Money: ${money}`;
    price8 = Math.round(price8);
    workshop.innerHTML = `Workshop: ${up8} Gold: ${price8}`;
  }
};

manufacture.onclick = () => {
  if (money >= price9) {
    money -= price9;
    price9 *= 1.8;
    moneyPerSecond += 15;
    up9 += 1;
    moneyCounter.innerHTML = `Money: ${money}`;
    price9 = Math.round(price9);
    manufacture.innerHTML = `Manufacture: ${up9} Gold: ${price9}`;
  }
};

factory.onclick = () => {
  if (money >= price10) {
    money -= price10;
    price10 *= 1.8;
    moneyPerSecond += 20;
    up10 += 1;
    moneyCounter.innerHTML = `Money: ${money}`;
    price10 = Math.round(price10);
    factory.innerHTML = `Factory: ${up10} Gold: ${price10}`;
  }
};

club.onclick = () => {
  if (money >= 100) {
    damage += 20;
    club.style.display = "none";
    money -= 100;
    moneyCounter.innerHTML = `Money: ${money}`;
    damageCounter.innerHTML = `Damage: ${damage}`;
  }
};

musicButton.onclick = () => {
  audio.play();
  musicButton.style.display = "none";
  musicMutedButton.style.display = "block";
};

musicMutedButton.onclick = () => {
  audio.pause();
  audio.currentTime = 0;
  musicMutedButton.style.display = "none";
  musicButton.style.display = "block";
};
menuButton.onclick = () => {
  if (x.matches && main.style.display == "block") {
    main.style.display = "none";
    body.style.backgroundImage = "none";
    body.style.backgroundColor = "bisque";
    mesto.style.display = "block";
  } else if (x.matches && main.display == "none") {
    main.style.display = "block";
    main.style.display = "block";
    body.style.backgroundImage = "url(./res/img/background3.jpg)";
    mesto.style.display = "none";
  } else if (main.style.display == "block") {
    main.style.display = "none";
    body.style.backgroundImage = "url(./res/img/background.jpg)";
    mesto.style.display = "block";
  } else {
    main.style.display = "block";
    body.style.backgroundImage = "url(./res/img/background3.jpg)";
    mesto.style.display = "none";
  }
};

hospoda.onclick = () => {
  if(x.matches){
  hospoda.style.display = "none";
  body.style.backgroundImage = "none";
  body.style.backgroundColor = "gray";
  musicMutedButton.style.display = "none";
  musicButton.style.display = "none";
  menuButton.style.display = "none";
  backButton.style.display = "block";
  audio.pause();
  audio.currentTime = 0;
  audio2.play();
  nextUpdate.style.display = "block";
}
else{
  hospoda.style.display = "none";
  body.style.backgroundImage = "url(./res/img/quest.jpg)";
  musicMutedButton.style.display = "none";
  musicButton.style.display = "none";
  menuButton.style.display = "none";
  backButton.style.display = "block";
  audio.pause();
  audio.currentTime = 0;
  audio2.play();
  nextUpdate.style.display = "block";
}
};
backButton.onclick = () => {
  if(x.matches){
    audio2.pause();
    audio2.currentTime = 0;
    hospoda.style.display = "block";
    body.style.backgroundImage = "none";
    body.style.backgroundColor = "bisque";
    musicButton.style.display = "block";
    menuButton.style.display = "block";
    backButton.style.display = "none";
    nextUpdate.style.display = "none";
  }
  else{
    audio2.pause();
    audio2.currentTime = 0;
    hospoda.style.display = "block";
    body.style.backgroundImage = "url(./res/img/background.jpg)";
    musicButton.style.display = "block";
    menuButton.style.display = "block";
    backButton.style.display = "none";
    nextUpdate.style.display = "none";
  }
};
