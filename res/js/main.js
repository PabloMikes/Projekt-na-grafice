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
const gameMenu = document.getElementById("gameMenu");
const mainObal = document.getElementById("mainObal");
const play = document.getElementById("play");
const tutorial = document.getElementById("tutorial");
const saveObal = document.getElementById("saveObal");

const phoneMenu = document.getElementById("phoneMenu")
const resume = document.getElementById("resume");
const unsave = document.getElementById("unsave");
const quit = document.getElementById("quit");

const hp2 = document.getElementById("hp2");

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

let up1 = 1;
let price1 = 10;
let up2 = 1;
let price2 = 10;
let up3 = 0;
let price3 = 500;

let poison = false;
let fire = false;
let lightning = false;

let poisonCounter = 0;
let fireCounter = 0;
let lightningCounter = 0;

let bossHp = 1000;
let bossMaxHp = 1000;
let bossDmg = 10;
let bossMoney = 500;

let poisonDamage = 50;
let fireDamage = 30;
let lightDamage = 30;

window.onload = () => {
  if (localStorage.getItem("money") > 0 && localStorage.getItem("up3") > 0) {
    console.log("negr1");

    maxHp = parseInt(localStorage.getItem("maxHp"));
    hp = parseInt(localStorage.getItem("hp"));
    charHp = parseInt(localStorage.getItem("charHp"));
    charMaxHp = parseInt(localStorage.getItem("charMaxHp"));
    damage = parseInt(localStorage.getItem("damage"));
    enemyDamage = parseInt(localStorage.getItem("enemyDamage"));
    money = parseInt(localStorage.getItem("money"));
    maxMoney = parseInt(localStorage.getItem("maxMoney"));

    deaths = parseInt(localStorage.getItem("deaths"));
    maxDeaths = parseInt(localStorage.getItem("maxDeaths"));

    up1 = parseInt(localStorage.getItem("up1"));
    price1 = parseInt(localStorage.getItem("price1"));
    up2 = parseInt(localStorage.getItem("up2"));
    price2 = parseInt(localStorage.getItem("price2"));
    up3 = parseInt(localStorage.getItem("up3"));

    poison = JSON.parse(localStorage.getItem("poison"));
    fire = JSON.parse(localStorage.getItem("fire"));
    lightning = JSON.parse(localStorage.getItem("lightning"));

    bossHp = parseInt(localStorage.getItem("bossHp"));
    bossMaxHp = parseInt(localStorage.getItem("bossMaxHp"));
    bossDmg = parseInt(localStorage.getItem("bossDmg"));
    bossMoney = parseInt(localStorage.getItem("bossMoney"));

    club.style.display = localStorage.getItem("club");
    spear.style.display = localStorage.getItem("spear");
    mace.style.display = localStorage.getItem("mace");
    swordd.style.display = localStorage.getItem("swordd");

    description.style.display = localStorage.getItem("description");
    description2.style.display = localStorage.getItem("description2");
    description3.style.display = localStorage.getItem("description3");
    description4.style.display = localStorage.getItem("description4");

    moneyCounter.innerHTML = `Gold: ${money}`;
    moneyCounter2.innerHTML = `Gold: ${money}`;
    damageCounter.innerHTML = `Damage: ${damage}`;
    sword.innerHTML = `Sharpness: ${up1} Gold: ${price1}`;
    MaxHealth.innerHTML = `Muskles: ${up2} Gold: ${price2}`;
    potion.innerHTML = `Po??????ek: ${up3} Gold: ${price3}`;
    potionCounter.innerHTML = `${up3}`;
    deathCounter.innerHTML = `Kills: ${deaths}`;

    if (maxDeaths % 10 == 0) {
      counter.innerHTML = `<img id="hp2" src="./res/img/hp.png" alt="">: ${bossHp}/${bossMaxHp}`;
    } else {
      counter.innerHTML = `<img id="hp2" src="./res/img/hp.png" alt="">: ${hp}/${maxHp}`;
    }
  } else if (localStorage.getItem("money") > 0) {
    console.log("negr2");

    maxHp = parseInt(localStorage.getItem("maxHp"));
    hp = parseInt(localStorage.getItem("hp"));
    charHp = parseInt(localStorage.getItem("charHp"));
    charMaxHp = parseInt(localStorage.getItem("charMaxHp"));
    damage = parseInt(localStorage.getItem("damage"));
    enemyDamage = parseInt(localStorage.getItem("enemyDamage"));
    money = parseInt(localStorage.getItem("money"));
    maxMoney = parseInt(localStorage.getItem("maxMoney"));

    deaths = parseInt(localStorage.getItem("deaths"));
    maxDeaths = parseInt(localStorage.getItem("maxDeaths"));

    up1 = parseInt(localStorage.getItem("up1"));
    price1 = parseInt(localStorage.getItem("price1"));
    up2 = parseInt(localStorage.getItem("up2"));
    price2 = parseInt(localStorage.getItem("price2"));

    poison = JSON.parse(localStorage.getItem("poison"));
    fire = JSON.parse(localStorage.getItem("fire"));
    lightning = JSON.parse(localStorage.getItem("lightning"));

    bossHp = parseInt(localStorage.getItem("bossHp"));
    bossMaxHp = parseInt(localStorage.getItem("bossMaxHp"));
    bossDmg = parseInt(localStorage.getItem("bossDmg"));
    bossMoney = parseInt(localStorage.getItem("bossMoney"));

    club.style.display = localStorage.getItem("club");
    spear.style.display = localStorage.getItem("spear");
    mace.style.display = localStorage.getItem("mace");
    swordd.style.display = localStorage.getItem("swordd");

    description.style.display = localStorage.getItem("description");
    description2.style.display = localStorage.getItem("description2");
    description3.style.display = localStorage.getItem("description3");
    description4.style.display = localStorage.getItem("description4");

    moneyCounter.innerHTML = `Gold: ${money}`;
    moneyCounter2.innerHTML = `Gold: ${money}`;
    damageCounter.innerHTML = `Damage: ${damage}`;
    sword.innerHTML = `Sharpness: ${up1} Gold: ${price1}`;
    MaxHealth.innerHTML = `Muskles: ${up2} Gold: ${price2}`;
    potion.innerHTML = `Po??????ek: ${up3} Gold: ${price3}`;
    potionCounter.innerHTML = `${up3}`;
    deathCounter.innerHTML = `Kills: ${deaths}`;

    if (maxDeaths % 10 == 0) {
      counter.innerHTML = `<img id="hp2" src="./res/img/hp.png" alt="">: ${bossHp}/${bossMaxHp}`;
    } else {
      counter.innerHTML = `<img id="hp2" src="./res/img/hp.png" alt="">: ${hp}/${maxHp}`;
    }
  }
  console.log(money);
};

attack.onclick = () => {
  if (deaths % 10 == 0 && deaths != 0) {
    if (poison == true) {
      if (poisonCounter == 0) {
        const poisonDamagePerSecond = setInterval(() => {
          bossHp -= poisonDamage;
          counter.innerHTML = `<img id="hp2" src="./res/img/hp.png" alt="">: ${bossHp}/${bossMaxHp}`;
          poisonCounter++;
        }, 1000);
        const check1 = setInterval(() => {
          if (bossHp <= 0) {
            clearInterval(poisonDamagePerSecond);
            clearInterval(check1);
            poisonCounter -= poisonCounter;
          } else if (charHp <= 0) {
            clearInterval(poisonDamagePerSecond);
            clearInterval(check1);
            poisonCounter -= poisonCounter;
          }
        }, 100);
        if (poisonCounter == 5) {
          fireCounter -= 5;
          clearInterval(fireDamagePerSecond);
          clearInterval(check1);
        }
      }
    }
    if (fire == true) {
      if (fireCounter == 0) {
        const fireDamagePerSecond = setInterval(() => {
          bossHp -= fireDamage;
          counter.innerHTML = `<img id="hp2" src="./res/img/hp.png" alt="">: ${bossHp}/${bossMaxHp}`;
          fireCounter++;
        }, 1000);
        const check2 = setInterval(() => {
          if (bossHp <= 0) {
            clearInterval(fireDamagePerSecond);
            clearInterval(check2);
            fireCounter -= fireCounter;
          } else if (charHp <= 0) {
            clearInterval(fireDamagePerSecond);
            clearInterval(check2);
            fireCounter -= fireCounter;
          }
        }, 100);
        if (fireCounter == 5) {
          fireCounter -= 5;
          clearInterval(fireDamagePerSecond);
          clearInterval(check2);
        }
      }
    }
    if (lightning == true) {
      if (lightningCounter == 0) {
        const lightDamagePerSecond = setInterval(() => {
          bossHp -= lightDamage;
          counter.innerHTML = `<img id="hp2" src="./res/img/hp.png" alt="">: ${bossHp}/${bossMaxHp}`;
          lightningCounter++;
        }, 300);
        const check3 = setInterval(() => {
          if (bossHp <= 0) {
            clearInterval(lightDamagePerSecond);
            clearInterval(check3);
            lightningCounter -= lightningCounter;
          } else if (charHp <= 0) {
            clearInterval(lightDamagePerSecond);
            clearInterval(check3);
            lightningCounter -= lightningCounter;
          }
        }, 100);
        if (lightningCounter == 5) {
          lightningCounter -= 5;
          clearInterval(lightDamagePerSecond);
          clearInterval(check3);
        }
      }
    }

    if (bossHp > 0) {
      bossHp -= damage;
      audio4.play();
      mainChar.style.marginLeft = "55%";
      setTimeout(() => {
        mainChar.style.margin = "0 auto";
      }, 100); //gay animace

      boss1.style.transform = "scale(0.9)";
      counter.innerHTML = `<img id="hp2" src="./res/img/hp.png" alt="">: ${bossHp}/${bossMaxHp}`;

      setTimeout(() => {
        boss1.style.transform = "scale(1)";
      }, 100);
    }

    if (hp <= 0) {
      boss1.style.display = "none";
      deadBoss1.style.display = "block";
    }
  } else {
    if (poison == true && poisonCounter == 0) {
      const poisonDamagePerSecond = setInterval(() => {
        hp -= poisonDamage;
        counter.innerHTML = `<img id="hp2" src="./res/img/hp.png" alt="">: ${hp}/${maxHp}`;
        poisonCounter += 1;
      }, 1000);
      const check1 = setInterval(() => {
        if (hp <= 0) {
          clearInterval(poisonDamagePerSecond);
          clearInterval(check1);
          poisonCounter -= poisonCounter;
        } else if (charHp <= 0) {
          clearInterval(poisonDamagePerSecond);
          clearInterval(check1);
          poisonCounter -= poisonCounter;
        }
        if (poisonCounter == 5) {
          poisonCounter -= 5;
          clearInterval(poisonDamagePerSecond);
          clearInterval(check1);
        }
      }, 100);
    }
    if (fire == true) {
      if (fireCounter == 0) {
        const fireDamagePerSecond = setInterval(() => {
          hp -= fireDamage;
          counter.innerHTML = `<img id="hp2" src="./res/img/hp.png" alt="">: ${hp}/${maxHp}`;
          fireCounter++;
        }, 1000);
        const check2 = setInterval(() => {
          if (hp <= 0) {
            clearInterval(fireDamagePerSecond);
            clearInterval(check2);
            fireCounter -= fireCounter;
          } else if (charHp <= 0) {
            clearInterval(fireDamagePerSecond);
            clearInterval(check2);
            fireCounter -= fireCounter;
          }
          if (fireCounter == 5) {
            fireCounter -= 5;
            clearInterval(fireDamagePerSecond);
            clearInterval(check2);
          }
        }, 100);
      }
    }
    if (lightning == true) {
      if (lightningCounter == 0) {
        const lightDamagePerSecond = setInterval(() => {
          hp -= lightDamage;
          counter.innerHTML = `<img id="hp2" src="./res/img/hp.png" alt="">: ${hp}/${maxHp}`;
          lightningCounter++;
        }, 300);
        const check3 = setInterval(() => {
          if (hp <= 0) {
            clearInterval(lightDamagePerSecond);
            clearInterval(check3);
            lightningCounter -= lightningCounter;
          } else if (charHp <= 0) {
            clearInterval(lightDamagePerSecond);
            clearInterval(check3);
            lightningCounter -= lightningCounter;
          }
          if (lightningCounter == 5) {
            lightningCounter -= 5;
            clearInterval(lightDamagePerSecond);
            clearInterval(check3);
          }
        }, 100);
      }
    }

    if (hp > 0) {
      hp -= damage;
      audio4.play();
      mainChar.style.marginLeft = "55%";
      setTimeout(() => {
        mainChar.style.margin = "0 auto";
      }, 100);
    }
    enemy.style.transform = "scale(0.9)";
    counter.innerHTML = `<img id="hp2" src="./res/img/hp.png" alt="">: ${hp}/${maxHp}`;

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
    localStorage.setItem("up3", up3);
    if (charHp > charMaxHp) {
      charHp = Math.max(charMaxHp);
    }
    potionCounter.innerHTML = `${up3}`;
    hpCounter.innerHTML = `<img id="hp" src="./res/img/hp.png" alt="">: ${charHp}/${charMaxHp}`;
    potion.innerHTML = `Po??????ek: ${up3} Gold: ${price3}`;
  }
};

sword.onclick = () => {
  if (money >= price1) {
    up1++;
    damage++;
    money -= price1;
    price1 *= 1.2;
    price1 = Math.round(price1);
    localStorage.setItem("up1", up1);
    localStorage.setItem("damage", damage);
    localStorage.setItem("price1", price1);
    localStorage.setItem("money", money);
    sword.innerHTML = `Sharpness: ${up1} Gold: ${price1}`;
    moneyCounter.innerHTML = `Gold: ${money}`;
    moneyCounter2.innerHTML = `Gold: ${money}`;
    damageCounter.innerHTML = `Damage: ${damage}`;
  }
};

MaxHealth.onclick = () => {
  if (money >= price2) {
    money -= price2;
    price2 *= 1.2;
    up2 += 1;
    charHp += 5;
    charMaxHp += 5;
    price2 = Math.round(price2);
    localStorage.setItem("up2", up2);
    localStorage.setItem("price2", price2);
    localStorage.setItem("charHp", charHp);
    localStorage.setItem("charMaxHp", charMaxHp);
    localStorage.setItem("money", money);
    hpCounter.innerHTML = `<img id="hp" src="./res/img/hp.png" alt="" />: ${charHp}/${charMaxHp}`;
    MaxHealth.innerHTML = `Muskles: ${up2} Gold: ${price2}`;
    moneyCounter.innerHTML = `Gold: ${money}`;
    moneyCounter2.innerHTML = `Gold: ${money}`;
  }
};

potion.onclick = () => {
  if (money >= price3) {
    money -= price3;
    up3 += 1;
    localStorage.setItem("up3", up3);
    moneyCounter.innerHTML = `Gold: ${money}`;
    moneyCounter2.innerHTML = `Gold: ${money}`;
    price3 = Math.round(price3);
    potion.innerHTML = `Po??????ek: ${up3} Gold: ${price3}`;
    potionCounter.innerHTML = `${up3}`;
  }
};

club.onclick = () => {
  if (money >= 100 && deaths >= 5) {
    damage += 20;
    club.style.display = "none";
    money -= 100;
    description.style.display = "none";
    localStorage.setItem("damage", damage);
    localStorage.setItem("money", money);
    localStorage.setItem("club", (club.style.display = "none"));
    localStorage.setItem("description", (description.style.display = "none"));
    moneyCounter.innerHTML = `Gold: ${money}`;
    moneyCounter2.innerHTML = `Gold: ${money}`;
    damageCounter.innerHTML = `Damage: ${damage}`;
  }
};

spear.onclick = () => {
  if (money >= 1000 && deaths >= 25) {
    damage += 50;
    spear.style.display = "none";
    money -= 1000;
    localStorage.setItem("damage", damage);
    localStorage.setItem("money", money);
    description2.style.display = "none";
    localStorage.setItem("spear", (spear.style.display = "none"));
    localStorage.setItem("description2", (description2.style.display = "none"));
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
    description3.style.display = "none";
    localStorage.setItem("damage", damage);
    localStorage.setItem("money", money);
    localStorage.setItem("mace", (mace.style.display = "none"));
    localStorage.setItem("description3", (description3.style.display = "none"));
    moneyCounter.innerHTML = `Gold: ${money}`;
    moneyCounter2.innerHTML = `Gold: ${money}`;
    damageCounter.innerHTML = `Damage: ${damage}`;
  }
};

swordd.onclick = () => {
  if (money >= 30000 && deaths >= 100) {
    damage += 200;
    swordd.style.display = "none";
    money -= 30000;
    description4.style.display = "none";
    localStorage.setItem("damage", damage);
    localStorage.setItem("money", money);
    localStorage.setItem("swordd", (swordd.style.display = "none"));
    localStorage.setItem("description4", (description4.style.display = "none"));
    moneyCounter.innerHTML = `Gold: ${money}`;
    moneyCounter2.innerHTML = `Gold: ${money}`;
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
  } else {
    hpCounter.innerHTML = `<img id="hp" src="./res/img/hp.png" alt="" />: ${charHp}/${charMaxHp}`;
    menuButton.style.display = "none";
    main.style.display = "block";
    body.style.backgroundImage = "url(./res/img/background3.jpg)";
    mesto.style.display = "none";
    items.style.display = "none";
    verze.style.display = "none";
    phoneMenu.style.display = "none"

    if (deaths % 10 == 0 && deaths != 0) {
      boss1.style.display = "block";
      enemy.style.display = "none";
      counter.innerHTML = `<img id="hp2" src="./res/img/hp.png" alt="">: ${bossHp}/${bossMaxHp}`;

      const bossAttackSpeed = setInterval(() => {
        boss1.style.margin = "0";
        boss1.style.marginTop = "10%";
        charHp -= bossDmg;
        audio6.play();
        hpCounter.innerHTML = `<img id="hp" src="./res/img/hp.png" alt="">: ${charHp}/${charMaxHp}`;

        setTimeout(() => {
          boss1.style.margin = "0 auto";
          boss1.style.marginTop = "10%";
        }, 100); //gay animace
      }, 3000);

      const interval3 = setInterval(() => {
        if (bossHp <= 0) {

          boss1.style.display = "none";
          deadBoss1.style.display = "block";
          audio5.play();

          money += bossMoney;
          earnings.style.display = "block";
          earnings.innerHTML = `+${bossMoney}G`;
          bossDmg += 10; //boss damage scaling
          localStorage.setItem("bossDmg", bossDmg);

          setTimeout(() => {
            earnings.style.display = "none";
          }, 1000);

          setTimeout(() => {
            bossMoney += 1000; //bossmoney scaling
            moneyCounter.innerHTML = `Gold: ${money}`;
            moneyCounter2.innerHTML = `Gold: ${money}`;
            bossMaxHp += 1000; //bosshp scaling

            localStorage.setItem("bossMoney", bossMoney);
            localStorage.setItem("bossMaxHp", bossMaxHp);

            charHp -= charHp;
            charHp += charMaxHp;

            deaths++;
            maxDeaths += 1;

            localStorage.setItem("deaths", deaths);
            localStorage.setItem("maxDeaths", maxDeaths);
            localStorage.setItem("charHp", charHp);

            deathCounter.innerHTML = `Kills: ${deaths}`;
            bossHp += bossMaxHp;
            bossHp = Math.max(bossMaxHp);
            counter.innerHTML = `<img id="hp2" src="./res/img/hp.png" alt="">: ${hp}/${maxHp}`;
            enemy.style.display = "block";
            deadBoss1.style.display = "none";

            main.style.display = "none";
            menuButton.innerHTML = `Battle!`;
            body.style.backgroundImage = "url(./res/img/background.jpg)";
            mesto.style.display = "block";
            items.style.display = "none";
            menuButton.style.display = "block";
            verze.style.display = "block";
            phoneMenu.style.display = "block"

            localStorage.setItem("hp", hp);
            localStorage.setItem("charHp", charHp);
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
          phoneMenu.style.display = "block"

          charHp -= charHp;
          charHp += charMaxHp;
          hpCounter.innerHTML = `<img id="hp" src="./res/img/hp.png" alt="">: ${charHp}/${charMaxHp}`;

          bossHp -= bossHp;
          bossHp += bossMaxHp;

          localStorage.setItem("bossHp", bossHp);
          localStorage.setItem("bossMaxHp", bossMaxHp);

          counter.innerHTML = `<img id="hp2" src="./res/img/hp.png" alt="">: ${bossHp}/${bossMaxHp}`;

          hp -= hp;
          hp += maxHp;
          counter.innerHTML = `<img id="hp2" src="./res/img/hp.png" alt="">: ${hp}/${maxHp}`;

          localStorage.setItem("hp", hp);
          localStorage.setItem("charHp", charHp);

          clearInterval(interval3);
          clearInterval(bossAttackSpeed);
        }
      }, 100);
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

          localStorage.setItem("money", money);
          localStorage.setItem("damage", damage);
          localStorage.setItem("enemyDamage", enemyDamage);
          localStorage.setItem("up1", up1);
          localStorage.setItem("price1", price1);
          localStorage.setItem("up2", up2);
          localStorage.setItem("price2", price2);
          localStorage.setItem("charMaxHp", charMaxHp);
          localStorage.setItem("bossDmg", bossDmg);
          localStorage.setItem("bossHp", bossHp);
          localStorage.setItem("bossMaxHp", bossMaxHp);
          localStorage.setItem("bossMoney", bossMoney);

          setTimeout(() => {
            earnings.style.display = "none";
          }, 1000);

          setTimeout(() => {
            maxMoney *= 1.15; //money scaling
            maxMoney = Math.round(maxMoney);
            moneyCounter.innerHTML = `Gold: ${money}`;
            moneyCounter2.innerHTML = `Gold: ${money}`;
            maxHp *= 1.15; //hp scaling
            maxHp = Math.round(maxHp);

            localStorage.setItem("maxMoney", maxMoney);
            localStorage.setItem("maxHp", maxHp);

            charHp -= charHp;
            charHp += charMaxHp;

            deaths++;
            maxDeaths++;

            localStorage.setItem("deaths", deaths);
            localStorage.setItem("maxDeaths", maxDeaths);

            deathCounter.innerHTML = `Kills: ${deaths}`;

            hp += maxHp;
            hp = Math.max(maxHp);
            counter.innerHTML = `<img id="hp2" src="./res/img/hp.png" alt="">: ${hp}/${maxHp}`;
            enemy.style.display = "block";
            deadEnemy.style.display = "none";

            main.style.display = "none";
            menuButton.innerHTML = `Battle!`;
            body.style.backgroundImage = "url(./res/img/background.jpg)";
            mesto.style.display = "block";
            items.style.display = "none";
            menuButton.style.display = "block";
            verze.style.display = "block";
            phoneMenu.style.display = "block"

            localStorage.setItem("hp", hp);
            localStorage.setItem("charHp", charHp);
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
          phoneMenu.style.display = "block"

          charHp -= charHp;
          charHp += charMaxHp;

          hp -= hp;
          hp += maxHp;

          localStorage.setItem("hp", hp);
          localStorage.setItem("charHp", charHp);

          clearInterval(interval);
          clearInterval(interval2);
        }
      }, 100);

      const interval = setInterval(() => {
        enemy.style.margin = "0";
        enemy.style.marginTop = "10%";
        charHp -= enemyDamage;
        audio6.play();
        hpCounter.innerHTML = `<img id="hp" src="./res/img/hp.png" alt="">: ${charHp}/${charMaxHp}`;

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

play.onclick = () => {
  mainObal.style.display = "block";
  gameMenu.style.display = "none";
  body.style.backgroundImage = "url(./res/img/background.jpg)";
};

tutorial.onclick = () => {
  tutorial.innerHTML = `U know what to do...`;
  setTimeout(() => {
    tutorial.innerHTML = `What should i do?`;
  }, 500);
};

enchant.onclick = () => {
  if (money >= 5000) {
    money -= 5000;
    localStorage.setItem("money", money);
    moneyCounter.innerHTML = `Gold: ${money}`;
    moneyCounter2.innerHTML = `Gold: ${money}`;
    let random = Math.floor(Math.random() * 10);
    if (random == 1) {
      poison = true;
      localStorage.setItem("poison", poison);
      typeOfEnchantment.innerHTML = `+ Poison`;
      typeOfEnchantment.style.display = "block";
      setTimeout(() => {
        typeOfEnchantment.style.display = "none";
      }, 300);
    } else if (random == 3) {
      lightning = true;
      localStorage.setItem("lightning", lightning);
      typeOfEnchantment.innerHTML = `+ Lightning`;
      typeOfEnchantment.style.display = "block";
      setTimeout(() => {
        typeOfEnchantment.style.display = "none";
      }, 300);
    } else if (random == 8) {
      fire = true;
      localStorage.setItem("fire", fire);
      typeOfEnchantment.innerHTML = `+ Fire`;
      typeOfEnchantment.style.display = "block";
      setTimeout(() => {
        typeOfEnchantment.style.display = "none";
      }, 300);
    } else {
      typeOfEnchantment.innerHTML = `Unlucky :/`;
      setTimeout(() => {
        typeOfEnchantment.style.display = "none";
      }, 300);
    }
  }
};

resume.onclick = () => {
  saveObal.style.display = "none";
  mainObal.style.pointerEvents = "auto";
  gameMenu.style.pointerEvents = "auto";
};

quit.onclick = () => {
  window.close();
};
unsave.onclick = () => {
  localStorage.clear();
  location.reload();
};

phoneMenu.onclick = () =>{
  if (
    saveObal.style.display == "none" &&
    main.style.display != "block"
  ) {
    saveObal.style.display = "block";
    mainObal.style.pointerEvents = "none";
    gameMenu.style.pointerEvents = "none";
  } else {
    saveObal.style.display = "none";
    mainObal.style.pointerEvents = "auto";
    gameMenu.style.pointerEvents = "auto";
  }
}

function esc(e) {
  if (
    e.key === "Escape" &&
    saveObal.style.display == "none" &&
    main.style.display != "block"
  ) {
    saveObal.style.display = "block";
    mainObal.style.pointerEvents = "none";
    gameMenu.style.pointerEvents = "none";
  } else {
    saveObal.style.display = "none";
    mainObal.style.pointerEvents = "auto";
    gameMenu.style.pointerEvents = "auto";
  }
}

body.addEventListener("keyup", esc);
