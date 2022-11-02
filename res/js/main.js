const counter = document.getElementById("counter");

const enemy = document.getElementById("enemy");
const deadEnemy = document.getElementById("deadEnemy");
const boss1 = document.getElementById("boss1");
const deadBoss1 = document.getElementById("deadBoss1");

const moneyCounter = document.getElementById("money");
const sword = document.getElementById("sword");
const MaxHealth = document.getElementById("MaxHealth");
const potion = document.getElementById("potion");
const moneyPerSecondCounter = document.getElementById("moneyPerSecond");

const club = document.getElementById("club");
const spear = document.getElementById("spear");
const mace = document.getElementById("mace");
const swordd = document.getElementById("swordd");

const damageCounter = document.getElementById("damage");
const musicButton = document.getElementById("music");
const musicMutedButton = document.getElementById("mutedMusic");
const audio = document.getElementById("audio");
const audio2 = document.getElementById("audio2");
const audio3 = document.getElementById("audio3");
const audio4 = document.getElementById("audio4");
const audio5 = document.getElementById("audio5");
const audio6 = document.getElementById("audio6");
const deathCounter = document.getElementById("deathCounter");
const menuButton = document.getElementById("menu");
const main = document.getElementById("main");
const mainMenu = document.getElementById("mainMenu");
const mesto = document.getElementById("mesto");
const hospoda = document.getElementById("hospoda");
const backButton = document.getElementById("back");
const nextUpdate = document.getElementById("nextUpdate");
const shop = document.getElementById("thr");
const backButton2 = document.getElementById("backButton2");
const items = document.getElementById("oball");

const description = document.getElementById("description");
const description2 = document.getElementById("description2");
const description3 = document.getElementById("description3");
const description4 = document.getElementById("description4");

const kostelButton = document.getElementById("church");
const goInside = document.getElementById("goInside");
const goBack = document.getElementById("goBack");
const mainChar = document.getElementById("mainChar");
const earnings = document.getElementById("earnings");
const hpCounter = document.getElementById("hpCounter");
const verze = document.getElementById("verze");
const attack = document.getElementById("attack");
const heal = document.getElementById("heal");
const def = document.getElementById("def");
const potionCounter = document.getElementById("potionCounter");
const body = document.getElementsByTagName("body")[0];
const enchant = document.getElementById("enchant");
const moneyCounter2 = document.getElementById("moneyCounter2");
const typeOfEnchantment = document.getElementById("typeOfEnchantment");
const levelRoom = document.getElementById("levelRoom");
const levelObal = document.getElementById("levelObal");
const maxLevel = document.getElementById("maxLevel");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const gameMenu = document.getElementById("gameMenu");
const mainObal = document.getElementById("mainObal");
const play = document.getElementById("play");
const tutorial = document.getElementById("tutorial");

let maxHp = 20;
let hp = 20;
let charHp = 20;
let charMaxHp = 20;
let damage = 1;
let enemyDamage = 1;
let money = 0;
let maxMoney = 10;

let deaths = 0;
let maxDeaths = 0;

let up1 = 0;
let price1 = 10;
let up2 = 0;
let price2 = 10;
let damageOverTime = 0;
let up3 = 0;
let price3 = 500;
let up4 = 0;
let price4 = 1000;
let up5 = 0;
let price5 = 2000;
let moneyPerSecond = 0;

let p = 0;

let poison = 0;
let fire = 0;
let doubleTap = 0;

let bossHp = 1000;
let bossMaxHp = 1000;
let bossDmg = 10;
let bossMoney = 500;

attack.onclick = () => {
  if (deaths % 10 == 0 && deaths != 0) {
    if (bossHp > 0) {
      bossHp -= damage;
      audio4.play();
      mainChar.style.marginLeft = "55%";
      setTimeout(() => {
        mainChar.style.margin = "0 auto";
      }, 100); //gay animace

      boss1.style.transform = "scale(0.9)";
      counter.innerHTML = `<img src="./res/img/hp.png" alt="">: ${bossHp}/${bossMaxHp}`;

      setTimeout(() => {
        boss1.style.transform = "scale(1)";
      }, 100);
    }

    if (hp <= 0) {
      boss1.style.display = "none";
      deadBoss1.style.display = "block";
    }
  } else {
    if (hp > 0) {
      hp -= damage;
      audio4.play();
      mainChar.style.marginLeft = "55%";
      setTimeout(() => {
        mainChar.style.margin = "0 auto";
      }, 100);
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
  }
};

heal.onclick = () => {
  if (up3 > 0) {
    charHp += 20;
    up3 -= 1;

    if (charHp > charMaxHp) {
      charHp = Math.max(charMaxHp);
    }
    potionCounter.innerHTML = `${up3}`;
    hpCounter.innerHTML = `<img src="./res/img/hp.png" alt="">: ${charHp}/${charMaxHp}`;
    potion.innerHTML = `Poťáček: ${up3} Gold: ${price3}`;
  }
};

sword.onclick = () => {
  if (money >= price1) {
    up1++;
    damage++;
    money -= price1;
    price1 *= 1.3;
    price1 = Math.round(price1);
    sword.innerHTML = `Sharpness: ${up1} Gold: ${price1}`;
    moneyCounter.innerHTML = `Gold: ${money}`;
    moneyCounter2.innerHTML = `Gold: ${money}`;
    damageCounter.innerHTML = `Damage: ${damage}`;
  }
};

MaxHealth.onclick = () => {
  if (money >= price2) {
    money -= price2;
    price2 *= 1.3;
    up2 += 1;
    charHp += 7;
    charMaxHp += 7;
    hpCounter.innerHTML = `<img id="hp" src="./res/img/hp.png" alt="" />: ${charHp}/${charMaxHp}`;
    price2 = Math.round(price2);
    MaxHealth.innerHTML = `Muskles: ${up2} Gold: ${price2}`;
    moneyCounter.innerHTML = `Gold: ${money}`;
    moneyCounter2.innerHTML = `Gold: ${money}`;
  }
};

potion.onclick = () => {
  if (money >= price3) {
    money -= price3;
    up3 += 1;
    moneyCounter.innerHTML = `Gold: ${money}`;
    moneyCounter2.innerHTML = `Gold: ${money}`;
    price3 = Math.round(price3);
    potion.innerHTML = `Poťáček: ${up3} Gold: ${price3}`;
    potionCounter.innerHTML = `${up3}`;
  }
};

club.onclick = () => {
  if (money >= 100 && deaths >= 5) {
    damage += 20;
    club.style.display = "none";
    money -= 100;
    moneyCounter.innerHTML = `Gold: ${money}`;
    moneyCounter2.innerHTML = `Gold: ${money}`;
    damageCounter.innerHTML = `Damage: ${damage}`;
    description.style.display = "none";
  }
};

spear.onclick = () => {
  if (money >= 1000 && deaths >= 25) {
    damage += 50;
    spear.style.display = "none";
    money -= 1000;
    moneyCounter.innerHTML = `Gold: ${money}`;
    moneyCounter2.innerHTML = `Gold: ${money}`;
    damageCounter.innerHTML = `Damage: ${damage}`;
    description2.style.display = "none";
  }
};

mace.onclick = () => {
  if (money >= 10000 && deaths >= 50) {
    damage += 100;
    mace.style.display = "none";
    money -= 10000;
    moneyCounter.innerHTML = `Gold: ${money}`;
    moneyCounter2.innerHTML = `Gold: ${money}`;
    damageCounter.innerHTML = `Damage: ${damage}`;
    description3.style.display = "none";
  }
};

swordd.onclick = () => {
  if (money >= 30000 && deaths >= 100) {
    damage += 200;
    swordd.style.display = "none";
    money -= 30000;
    moneyCounter.innerHTML = `Gold: ${money}`;
    moneyCounter2.innerHTML = `Gold: ${money}`;
    damageCounter.innerHTML = `Damage: ${damage}`;
    description4.style.display = "none";
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
  if (kostelButton.style.display == "none" && goInside.style.display == "block") {
    main.style.display = "none";
    goInside.style.display = "none";
    menuButton.innerHTML = `Battle!`;
    body.style.backgroundImage = "url(./res/img/background.jpg)";
    mesto.style.display = "block";
    musicButton.style.display = "block";
    menuButton.style.display = "block";
    backButton.style.display = "none";
    nextUpdate.style.display = "none";
    shop.style.display = "block";
    hospoda.style.display = "block";
    hospoda.style.marginTop = "0";
    backButton2.style.display = "none";
    items.style.display = "none";
    kostelButton.style.display = "block";
    levelRoom.style.display = "block";
  } 
  else if(levelRoom.style.display == "none"){
    main.style.display = "none";
    goInside.style.display = "none";
    menuButton.innerHTML = `Battle!`;
    body.style.backgroundImage = "url(./res/img/background.jpg)";
    mesto.style.display = "block";
    musicButton.style.display = "block";
    menuButton.style.display = "block";
    backButton.style.display = "none";
    nextUpdate.style.display = "none";
    shop.style.display = "block";
    hospoda.style.display = "block";
    hospoda.style.marginTop = "0";
    backButton2.style.display = "none";
    items.style.display = "none";
    kostelButton.style.display = "block";
    levelRoom.style.display = "block";
    levelObal.style.display = "none";
  }
  else {
    hpCounter.innerHTML = `<img id="hp" src="./res/img/hp.png" alt="" />: ${charHp}/${charMaxHp}`;
    menuButton.style.display = "none";
    main.style.display = "block";
    body.style.backgroundImage = "url(./res/img/background3.jpg)";
    mesto.style.display = "none";
    items.style.display = "none";
    verze.style.display = "none";

    if (deaths % 10 == 0 && deaths != 0 && deaths == maxDeaths) {
      boss1.style.display = "block";
      enemy.style.display = "none";
      counter.innerHTML = `<img src="./res/img/hp.png" alt="">: ${bossHp}/${bossMaxHp}`;

      const bossAttackSpeed = setInterval(() => {
        boss1.style.margin = "0";
        boss1.style.marginTop = "10%";
        charHp -= bossDmg;
        audio6.play();
        hpCounter.innerHTML = `<img src="./res/img/hp.png" alt="">: ${charHp}/${charMaxHp}`;

        setTimeout(() => {
          boss1.style.margin = "0 auto";
          boss1.style.marginTop = "10%";
        }, 100); //gay animace
      }, 3000);

      const interval3 = setInterval(() => {
        if (bossHp <= 0) {

          maxMoney *= 1.3; //money scaling
            maxMoney = Math.round(maxMoney);
            moneyCounter.innerHTML = `Gold: ${money}`;
            moneyCounter2.innerHTML = `Gold: ${money}`;
            maxHp *= 1.15; //hp scaling
            maxHp = Math.round(maxHp); // cuz jinak bude levelRoom rozbitej min to bude cheetable idk

          boss1.style.display = "none";
          deadBoss1.style.display = "block";
          audio5.play();

          money += bossMoney;
          earnings.style.display = "block";
          earnings.innerHTML = `+${bossMoney}G`;
          bossDmg += 10; //boss damage scaling

          setTimeout(() => {
            earnings.style.display = "none";
          }, 1000);

          setTimeout(() => {
            bossMoney += 1000; //bossmoney scaling
            moneyCounter.innerHTML = `Gold: ${money}`;
            moneyCounter2.innerHTML = `Gold: ${money}`;
            bossMaxHp += 1000; //bosshp scaling

            charHp -= charHp;
            charHp += charMaxHp;

            deaths++;
            maxDeaths += 1;

            deathCounter.innerHTML = `Level: ${deaths}`;
            maxLevel.innerHTML = `Highest level: ${maxDeaths}`
            bossHp += bossMaxHp;
            bossHp = Math.max(bossMaxHp);
            counter.innerHTML = `<img src="./res/img/hp.png" alt="">: ${hp}/${maxHp}`;
            enemy.style.display = "block";
            deadBoss1.style.display = "none";

            main.style.display = "none";
            menuButton.innerHTML = `Battle!`;
            body.style.backgroundImage = "url(./res/img/background.jpg)";
            mesto.style.display = "block";
            items.style.display = "none";
            menuButton.style.display = "block";
            verze.style.display = "block";
          }, 1000);
          clearInterval(interval3);
          clearInterval(bossAttackSpeed);
        } else if (charHp <= 0) {
          main.style.display = "none";
          goInside.style.display = "none";
          menuButton.innerHTML = `Battle!`;
          body.style.backgroundImage = "url(./res/img/background.jpg)";
          mesto.style.display = "block";
          musicButton.style.display = "block";
          menuButton.style.display = "block";
          backButton.style.display = "none";
          nextUpdate.style.display = "none";
          shop.style.display = "block";
          hospoda.style.display = "block";
          hospoda.style.marginTop = "0";
          backButton2.style.display = "none";
          items.style.display = "none";
          kostelButton.style.display = "block";

          charHp -= charHp;
          charHp += charMaxHp;
          hpCounter.innerHTML = `<img src="./res/img/hp.png" alt="">: ${charHp}/${charMaxHp}`;

          bossHp -= bossHp;
          bossHp += bossMaxHp;
          counter.innerHTML = `<img src="./res/img/hp.png" alt="">: ${bossHp}/${bossMaxHp}`;

          hp -= hp;
          hp += maxHp;
          counter.innerHTML = `<img src="./res/img/hp.png" alt="">: ${hp}/${maxHp}`;

          clearInterval(interval3);
          clearInterval(bossAttackSpeed);
        }
      }, 100);
    } 
    else if(maxDeaths != deaths){
      const interval2 = setInterval(() => {
        if (hp <= 0) {
          enemy.style.display = "none";
          deadEnemy.style.display = "block";
          audio5.play();

          money += maxMoney;
          earnings.style.display = "block";
          earnings.innerHTML = `+${maxMoney}G`;
          enemyDamage += 0.5; //enemy damage scaling

          setTimeout(() => {
            earnings.style.display = "none";
          }, 1000);

          setTimeout(() => {
            maxMoney *= 1.3; //money scaling
            maxMoney = Math.round(maxMoney);
            moneyCounter.innerHTML = `Gold: ${money}`;
            moneyCounter2.innerHTML = `Gold: ${money}`;
            maxHp *= 1.15; //hp scaling
            maxHp = Math.round(maxHp);

            charHp -= charHp;
            charHp += charMaxHp;

            deaths++;

            deathCounter.innerHTML = `Level: ${deaths}`;
            maxLevel.innerHTML = `Highest level: ${maxDeaths}`

            hp += maxHp;
            hp = Math.max(maxHp);
            counter.innerHTML = `<img src="./res/img/hp.png" alt="">: ${hp}/${maxHp}`;
            enemy.style.display = "block";
            deadEnemy.style.display = "none";

            main.style.display = "none";
            menuButton.innerHTML = `Battle!`;
            body.style.backgroundImage = "url(./res/img/background.jpg)";
            mesto.style.display = "block";
            items.style.display = "none";
            menuButton.style.display = "block";
            verze.style.display = "block";
          }, 1000);
          clearInterval(interval);
          clearInterval(interval2);
        } else if (charHp <= 0) {
          main.style.display = "none";
          goInside.style.display = "none";
          menuButton.innerHTML = `Battle!`;
          body.style.backgroundImage = "url(./res/img/background.jpg)";
          mesto.style.display = "block";
          musicButton.style.display = "block";
          menuButton.style.display = "block";
          backButton.style.display = "none";
          nextUpdate.style.display = "none";
          shop.style.display = "block";
          hospoda.style.display = "block";
          hospoda.style.marginTop = "0";
          backButton2.style.display = "none";
          items.style.display = "none";
          kostelButton.style.display = "block";

          charHp -= charHp;
          charHp += charMaxHp;

          hp -= hp;
          hp += maxHp;

          clearInterval(interval);
          clearInterval(interval2);
        }
      }, 100);

      const interval = setInterval(() => {
        enemy.style.margin = "0";
        enemy.style.marginTop = "10%";
        charHp -= enemyDamage;
        audio6.play();
        hpCounter.innerHTML = `<img src="./res/img/hp.png" alt="">: ${charHp}/${charMaxHp}`;

        setTimeout(() => {
          enemy.style.margin = "0 auto";
          enemy.style.marginTop = "10%";
        }, 100); //gay animace
      }, 1500);
    }
    else {
      const interval2 = setInterval(() => {
        if (hp <= 0) {
          enemy.style.display = "none";
          deadEnemy.style.display = "block";
          audio5.play();

          money += maxMoney;
          earnings.style.display = "block";
          earnings.innerHTML = `+${maxMoney}G`;
          enemyDamage += 0.5; //enemy damage scaling

          setTimeout(() => {
            earnings.style.display = "none";
          }, 1000);

          setTimeout(() => {
            maxMoney *= 1.3; //money scaling
            maxMoney = Math.round(maxMoney);
            moneyCounter.innerHTML = `Gold: ${money}`;
            moneyCounter2.innerHTML = `Gold: ${money}`;
            maxHp *= 1.15; //hp scaling
            maxHp = Math.round(maxHp);

            charHp -= charHp;
            charHp += charMaxHp;

            deaths++;
            maxDeaths++;

            deathCounter.innerHTML = `Level: ${deaths}`;
            maxLevel.innerHTML = `Highest level: ${maxDeaths}`

            hp += maxHp;
            hp = Math.max(maxHp);
            counter.innerHTML = `<img src="./res/img/hp.png" alt="">: ${hp}/${maxHp}`;
            enemy.style.display = "block";
            deadEnemy.style.display = "none";

            main.style.display = "none";
            menuButton.innerHTML = `Battle!`;
            body.style.backgroundImage = "url(./res/img/background.jpg)";
            mesto.style.display = "block";
            items.style.display = "none";
            menuButton.style.display = "block";
            verze.style.display = "block";
          }, 1000);
          clearInterval(interval);
          clearInterval(interval2);
        } else if (charHp <= 0) {
          main.style.display = "none";
          goInside.style.display = "none";
          menuButton.innerHTML = `Battle!`;
          body.style.backgroundImage = "url(./res/img/background.jpg)";
          mesto.style.display = "block";
          musicButton.style.display = "block";
          menuButton.style.display = "block";
          backButton.style.display = "none";
          nextUpdate.style.display = "none";
          shop.style.display = "block";
          hospoda.style.display = "block";
          hospoda.style.marginTop = "0";
          backButton2.style.display = "none";
          items.style.display = "none";
          kostelButton.style.display = "block";

          charHp -= charHp;
          charHp += charMaxHp;

          hp -= hp;
          hp += maxHp;

          clearInterval(interval);
          clearInterval(interval2);
        }
      }, 100);

      const interval = setInterval(() => {
        enemy.style.margin = "0";
        enemy.style.marginTop = "10%";
        charHp -= enemyDamage;
        audio6.play();
        hpCounter.innerHTML = `<img src="./res/img/hp.png" alt="">: ${charHp}/${charMaxHp}`;

        setTimeout(() => {
          enemy.style.margin = "0 auto";
          enemy.style.marginTop = "10%";
        }, 100); //gay animace
      }, 1500);
    }
  }
};

hospoda.onclick = () => {
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
  shop.style.display = "none";
  kostelButton.style.display = "none";
  levelRoom.style.display = "none";
};

backButton.onclick = () => {
  audio2.pause();
  audio2.currentTime = 0;
  body.style.backgroundImage = "url(./res/img/background.jpg)";
  musicButton.style.display = "block";
  menuButton.style.display = "block";
  backButton.style.display = "none";
  nextUpdate.style.display = "none";
  shop.style.display = "block";
  hospoda.style.display = "block";
  hospoda.style.marginTop = "0";
  kostelButton.style.display = "block";
  levelRoom.style.display = "block";
};

shop.onclick = () => {
  hospoda.style.display = "none";
  body.style.backgroundImage = "url(./res/img/merchant.jpg)";
  musicMutedButton.style.display = "none";
  musicButton.style.display = "none";
  menuButton.style.display = "none";
  backButton2.style.display = "block";
  shop.style.display = "none";
  items.style.display = "block";
  kostelButton.style.display = "none";
  levelRoom.style.display = "none";
};

backButton2.onclick = () => {
  body.style.backgroundImage = "url(./res/img/background.jpg)";
  musicButton.style.display = "block";
  menuButton.style.display = "block";
  backButton.style.display = "none";
  nextUpdate.style.display = "none";
  shop.style.display = "block";
  hospoda.style.display = "block";
  hospoda.style.marginTop = "0";
  backButton2.style.display = "none";
  items.style.display = "none";
  kostelButton.style.display = "block";
  levelRoom.style.display = "block";
};

kostelButton.onclick = () => {
  hospoda.style.display = "none";
  body.style.backgroundImage = "url(./res/img/kostel.png)";
  musicMutedButton.style.display = "none";
  musicButton.style.display = "none";
  menuButton.style.display = "block";
  shop.style.display = "none";
  kostelButton.style.display = "none";
  menuButton.innerHTML = `Elektropolis`;
  goInside.style.display = "block";
  levelRoom.style.display = "none";
};

goInside.onclick = () => {
  audio3.play();
  goBack.style.display = "block";
  goInside.style.display = "none";
  body.style.backgroundImage = "url(./res/img/insideKostel.jpg)";
  menuButton.style.display = "none";
  enchant.style.display = "block";
  moneyCounter2.style.display = "block";
};

goBack.onclick = () => {
  audio3.pause();
  audio3.currentTime = 0;
  goBack.style.display = "none";
  goInside.style.display = "block";
  body.style.backgroundImage = "url(./res/img/kostel.png)";
  menuButton.style.display = "block";
  enchant.style.display = "none";
  moneyCounter2.style.display = "none";
};

levelRoom.onclick = () =>{
  body.style.backgroundImage = "url(./res/img/levelRoom.jpg)"
  hospoda.style.display = "none";
  musicMutedButton.style.display = "none";
  musicButton.style.display = "none";
  menuButton.style.display = "block";
  shop.style.display = "none";
  kostelButton.style.display = "none";
  menuButton.innerHTML = `Elektropolis`;
  goInside.style.display = "none";
  levelRoom.style.display = "none";
  levelObal.style.display = "block";
  maxLevel.innerHTML = `Highest level: ${maxDeaths}`
};

minus.onclick = () =>{
  if(deaths > 0){
    enemyDamage -= 0.5;
    deaths--;
    maxMoney /= 1.3; 
    maxMoney = Math.round(maxMoney);

    deathCounter.innerHTML = `Level: ${deaths}`;

    maxHp /= 1.15; 
    maxHp = Math.round(maxHp);

    hp -= hp;
    hp += maxHp

    counter.innerHTML = `<img src="./res/img/hp.png" alt="">: ${hp}/${maxHp}`;
  }
};
plus.onclick = () =>{
  if(deaths < maxDeaths){
    enemyDamage += 0.5;
    deaths++;
    maxMoney *= 1.3; 
    maxMoney = Math.round(maxMoney);

    deathCounter.innerHTML = `Level: ${deaths}`;

    maxHp *= 1.15;
    maxHp = Math.round(maxHp);

    hp -= hp;
    hp += maxHp

    counter.innerHTML = `<img src="./res/img/hp.png" alt="">: ${hp}/${maxHp}`;
  }
};

play.onclick = () =>{
  mainObal.style.display = "block"
  gameMenu.style.display = "none"
  body.style.backgroundImage = "url(./res/img/background.jpg)"
}

tutorial.onclick = () =>{
  tutorial.innerHTML = `U know what to do...`
  setTimeout(() =>{
    tutorial.innerHTML = `What should i do?`
  }, 500)
}
/*enchant.onclick = () => {
  if (money >= 5000) {
    money -= 5000;
    moneyCounter.innerHTML = `Gold: ${money}`;
    moneyCounter2.innerHTML = `Gold: ${money}`;
    let random = Math.floor(Math.random() * 10);
    if (random == 1) {
      poison++;
      typeOfEnchantment.innerHTML = `+ Poison`;
      typeOfEnchantment.style.display = "block";
      setTimeout(() => {
        typeOfEnchantment.style.display = "none";
      }, 2000);
    } else if (random == 3) {
      doubleTap++;
      typeOfEnchantment.innerHTML = `+ Double Tap`;
      typeOfEnchantment.style.display = "block";
      setTimeout(() => {
        typeOfEnchantment.style.display = "none";
      }, 2000);
    } else if (random == 8) {
      fire++;
      typeOfEnchantment.innerHTML = `+ Fire`;
      typeOfEnchantment.style.display = "block";
      setTimeout(() => {
        typeOfEnchantment.style.display = "none";
      }, 2000);
    } else {
      typeOfEnchantment.innerHTML = `Unlucky :/`;
      setTimeout(() => {
        typeOfEnchantment.style.display = "none";
      }, 2000);
    }
  }
};
*/