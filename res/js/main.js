let money = 0;
let diamonds = 0;
let damage = 2;
let charHp = 30;
let charMaxHp = 30;
let up3 = 0;
let weaponUpgrades = 0;
let armorUpgrades = 0;
let potionPurchases = 0;
let currentRoom = 1;
let dungeonCompletions = 0;
let enemyType = "enemy1";
let enemyCurrentHp = 15;
let enemyMaxHp = 15;
let enemyDamage = 1;
let goldReward = 5;
let isAttacking = false;
let attackCount = 0;
let enemyAttackInterval;
let regenInterval;
let merchantCycleInterval;
let activeQuests = [];
let questProgress = {
  killEnemies: 0,
  defeatDragon: 0,
  defeatDemon: 0,
  defeatMath: 0,
  defeatServer: 0,
  defeatLinux: 0,
  clearDungeon: 0,
  upgradeWeapon: 0,
  upgradeArmor: 0,
  purchasePotions: 0,
  collectGold: 0
};
let questCompletions = {
  killEnemies: 0,
  defeatDragon: 0,
  defeatDemon: 0,
  defeatMath: 0,
  defeatServer: 0,
  defeatLinux: 0,
  clearDungeon: 0,
  upgradeWeapon: 0,
  upgradeArmor: 0,
  purchasePotions: 0,
  collectGold: 0
};
let ownedItems = { excalibur: false, fireAspect: false, greenAmulet: false };
let isMusicPlaying = true;
let musicVolume = 0.5;
let dungeonBackground = "./res/img/dungeon.jpg";
let enemyDefeatCounts = {
  enemy1: 0,
  enemy2: 0,
  enemy3: 0,
  hardEnemy1: 0,
  hardEnemy2: 0,
  boss1: 0,
  boss2: 0,
  boss3: 0,
  boss4: 0,
  boss5: 0
};

const audio = document.getElementById("audio");
const questAudio = document.getElementById("questAudio");
const blackmarketAudio = document.getElementById("blackmarketAudio");
const shopAudio = document.getElementById("shopAudio");
const dungeonAudio = document.getElementById("dungeonAudio");
const musicButton = document.getElementById("music");
const musicMutedButton = document.getElementById("mutedMusic");
const volumeSlider = document.getElementById("volumeSlider");
const playButton = document.getElementById("play");
const saveLoadButton = document.getElementById("saveLoad");
const quitButton = document.getElementById("quit");
const exportButton = document.getElementById("export");
const loadButton = document.getElementById("load");
const loadFileInput = document.getElementById("loadFile");
const resetButton = document.getElementById("reset");
const closeSave = document.getElementById("closeSave");
const menuContainer = document.getElementById("menuContainer");
const gameContainer = document.getElementById("gameContainer");
const shopContainer = document.getElementById("shopContainer");
const blackmarketContainer = document.getElementById("blackmarketContainer");
const dungeonContainer = document.getElementById("dungeonContainer");
const questContainer = document.getElementById("questContainer");
const goldMenu = document.getElementById("goldMenu");
const goldAmount = document.getElementById("goldAmount");
const dungeonButton = document.getElementById("dungeon");
const shopButton = document.getElementById("shop");
const blackmarketButton = document.getElementById("blackmarket");
const questsButton = document.getElementById("quests");
const backToMenuButton = document.getElementById("backToMenu");
const backToTownButton = document.getElementById("backToTown");
const backToTownBlackmarketButton = document.getElementById("backToTownBlackmarket");
const backToTownDungeonButton = document.getElementById("backToTownDungeon");
const backToTownQuestButton = document.getElementById("backToTownQuest");
const weaponUpgradeButton = document.getElementById("weaponUpgrade");
const armorUpgradeButton = document.getElementById("armorUpgrade");
const potionButton = document.getElementById("potion");
const buyExcaliburButton = document.getElementById("buyExcalibur");
const buyFireAspectButton = document.getElementById("buyFireAspect");
const buyGreenAmuletButton = document.getElementById("buyGreenAmulet");
const attackButton = document.getElementById("attack");
const usePotionButton = document.getElementById("usePotion");
const specialAttackButton = document.getElementById("specialAttack");
const playerHp = document.getElementById("playerHp");
const enemyHp = document.getElementById("enemyHp");
const merchant = document.getElementById("merchant");
const blackmerchant = document.getElementById("blackmerchant");
const chestContainer = document.getElementById("chestContainer");
const openChestButton = document.getElementById("openChest");
const roomNumber = document.getElementById("roomNumber");
const dungeonMainChar = document.querySelector(".dungeon-main-char");
const enemyImg = document.querySelector(".enemy");
const enemyContainer = document.querySelector(".enemy-container");
const notification = document.getElementById("notification");
const questList = document.getElementById("questList");
const excaliburItem = document.getElementById("excaliburItem");
const fireAspectItem = document.getElementById("fireAspectItem");
const greenAmuletItem = document.getElementById("greenAmuletItem");
const inventoryStats = document.getElementById("inventoryStats");
const playerStats = document.getElementById("playerStats");
const ownedItemsElement = document.getElementById("ownedItems");

// Validate DOM elements
if (!attackButton) console.error("Attack button not found in DOM");
if (!dungeonMainChar) console.error("Dungeon main character image not found in DOM");
if (!enemyHp) console.error("Enemy HP element not found in DOM");
if (!inventoryStats) console.error("Inventory stats element not found in DOM");
if (!playerStats) console.error("Player stats element not found in DOM");
if (!ownedItemsElement) console.error("Owned items element not found in DOM");

// Show notification
const showNotification = (message) => {
  notification.textContent = message;
  notification.classList.remove("hidden");
  notification.classList.add("show");
  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => {
      notification.classList.add("hidden");
      notification.textContent = "";
    }, 500);
  }, 3000);
};

// Quest definitions
const questTemplates = [
  {
    type: "killEnemies",
    description: (count) => `Kill ${count} enemies`,
    getGoal: (completions) => 3 + completions * 2,
    reward: (completions) => ({
      gold: 10 + completions * 5,
      upgrade: ["weapon", "armor", "potion"][Math.floor(Math.random() * 3)]
    })
  },
  {
    type: "defeatDragon",
    description: () => `Defeat Dragon`,
    getGoal: () => 1,
    reward: (completions) => ({
      gold: 50 + completions * 10,
      upgrade: ["weapon", "armor", "potion"][Math.floor(Math.random() * 3)]
    })
  },
  {
    type: "defeatDemon",
    description: () => `Defeat Demon`,
    getGoal: () => 1,
    reward: (completions) => ({
      gold: 50 + completions * 10,
      upgrade: ["weapon", "armor", "potion"][Math.floor(Math.random() * 3)]
    })
  },
  {
    type: "defeatMath",
    description: () => `Defeat Math`,
    getGoal: () => 1,
    reward: (completions) => ({
      gold: 50 + completions * 10,
      upgrade: ["weapon", "armor", "potion"][Math.floor(Math.random() * 3)]
    })
  },
  {
    type: "defeatServer",
    description: () => `Defeat Server`,
    getGoal: () => 1,
    reward: (completions) => ({
      gold: 50 + completions * 10,
      upgrade: ["weapon", "armor", "potion"][Math.floor(Math.random() * 3)]
    })
  },
  {
    type: "defeatLinux",
    description: () => `Defeat Linux`,
    getGoal: () => 1,
    reward: (completions) => ({
      gold: 50 + completions * 10,
      upgrade: ["weapon", "armor", "potion"][Math.floor(Math.random() * 3)]
    })
  },
  {
    type: "clearDungeon",
    description: () => `Clear the entire dungeon`,
    getGoal: () => 1,
    reward: (completions) => ({
      gold: 30 + completions * 10,
      upgrade: ["weapon", "armor", "potion"][Math.floor(Math.random() * 3)]
    })
  },
  {
    type: "upgradeWeapon",
    description: (count) => `Upgrade weapon ${count} times`,
    getGoal: (completions) => 1 + Math.floor(completions / 2),
    reward: (completions) => ({
      gold: 15 + completions * 5,
      upgrade: ["armor", "potion"][Math.floor(Math.random() * 2)]
    })
  },
  {
    type: "upgradeArmor",
    description: (count) => `Upgrade armor ${count} times`,
    getGoal: (completions) => 1 + Math.floor(completions / 2),
    reward: (completions) => ({
      gold: 15 + completions * 5,
      upgrade: ["weapon", "potion"][Math.floor(Math.random() * 2)]
    })
  },
  {
    type: "purchasePotions",
    description: (count) => `Purchase ${count} potions`,
    getGoal: (completions) => 1 + Math.floor(completions / 2),
    reward: (completions) => ({
      gold: 50 + completions * 10,
      upgrade: ["weapon", "armor"][Math.floor(Math.random() * 2)]
    })
  },
  {
    type: "collectGold",
    description: (amount) => `Collect ${amount} gold`,
    getGoal: (completions) => 50 + completions * 50,
    reward: (completions) => ({
      gold: 20 + completions * 10,
      upgrade: ["weapon", "armor", "potion"][Math.floor(Math.random() * 3)]
    })
  }
];

// Load game state
const loadGameState = () => {
  money = parseInt(localStorage.getItem("money")) || 0;
  diamonds = parseInt(localStorage.getItem("diamonds")) || 0;
  damage = parseInt(localStorage.getItem("damage")) || 2;
  charHp = parseInt(localStorage.getItem("charHp")) || 30;
  charMaxHp = parseInt(localStorage.getItem("charMaxHp")) || 30;
  up3 = parseInt(localStorage.getItem("up3")) || 0;
  weaponUpgrades = parseInt(localStorage.getItem("weaponUpgrades")) || 0;
  armorUpgrades = parseInt(localStorage.getItem("armorUpgrades")) || 0;
  potionPurchases = parseInt(localStorage.getItem("potionPurchases")) || 0;
  currentRoom = parseInt(localStorage.getItem("currentRoom")) || 1;
  dungeonCompletions = parseInt(localStorage.getItem("dungeonCompletions")) || 0;
  enemyType = localStorage.getItem("enemyType") || "enemy1";
  enemyCurrentHp = parseInt(localStorage.getItem("enemyCurrentHp")) || 15;
  enemyMaxHp = parseInt(localStorage.getItem("enemyMaxHp")) || 15;
  enemyDamage = parseInt(localStorage.getItem("enemyDamage")) || 1;
  goldReward = parseInt(localStorage.getItem("goldReward")) || 5;
  isAttacking = localStorage.getItem("isAttacking") === "true";
  attackCount = parseInt(localStorage.getItem("attackCount")) || 0;
  activeQuests = JSON.parse(localStorage.getItem("activeQuests")) || getRandomQuests();
  questProgress = JSON.parse(localStorage.getItem("questProgress")) || {
    killEnemies: 0,
    defeatDragon: 0,
    defeatDemon: 0,
    defeatMath: 0,
    defeatServer: 0,
    defeatLinux: 0,
    clearDungeon: 0,
    upgradeWeapon: 0,
    upgradeArmor: 0,
    purchasePotions: 0,
    collectGold: 0
  };
  const savedCompletions = JSON.parse(localStorage.getItem("questCompletions"));
  if (savedCompletions) Object.assign(questCompletions, savedCompletions);
  const savedItems = JSON.parse(localStorage.getItem("ownedItems"));
  if (savedItems) Object.assign(ownedItems, savedItems);
  const savedEnemyDefeatCounts = JSON.parse(localStorage.getItem("enemyDefeatCounts"));
  if (savedEnemyDefeatCounts) Object.assign(enemyDefeatCounts, savedEnemyDefeatCounts);
  isMusicPlaying = localStorage.getItem("isMusicPlaying") !== "false";
  musicVolume = parseFloat(localStorage.getItem("musicVolume")) || 0.5;
  dungeonBackground = ["./res/img/dungeon.jpg", "./res/img/dungeon2.jpg", "./res/img/dungeon3.jpg"].includes(localStorage.getItem("dungeonBackground")) ? localStorage.getItem("dungeonBackground") : "./res/img/dungeon.jpg";
  if (charHp > charMaxHp) charHp = charMaxHp;
  updateUI();
  updateQuestList();
  updateMusicState();
  updateSpecialAttackButton();
};

// Save game state
const saveGameState = () => {
  localStorage.setItem("money", money);
  localStorage.setItem("diamonds", diamonds);
  localStorage.setItem("damage", damage);
  localStorage.setItem("charHp", charHp);
  localStorage.setItem("charMaxHp", charMaxHp);
  localStorage.setItem("up3", up3);
  localStorage.setItem("weaponUpgrades", weaponUpgrades);
  localStorage.setItem("armorUpgrades", armorUpgrades);
  localStorage.setItem("potionPurchases", potionPurchases);
  localStorage.setItem("currentRoom", currentRoom);
  localStorage.setItem("dungeonCompletions", dungeonCompletions);
  localStorage.setItem("enemyType", enemyType);
  localStorage.setItem("enemyCurrentHp", enemyCurrentHp);
  localStorage.setItem("enemyMaxHp", enemyMaxHp);
  localStorage.setItem("enemyDamage", enemyDamage);
  localStorage.setItem("goldReward", goldReward);
  localStorage.setItem("isAttacking", isAttacking);
  localStorage.setItem("attackCount", attackCount);
  localStorage.setItem("activeQuests", JSON.stringify(activeQuests));
  localStorage.setItem("questProgress", JSON.stringify(questProgress));
  localStorage.setItem("questCompletions", JSON.stringify(questCompletions));
  localStorage.setItem("ownedItems", JSON.stringify(ownedItems));
  localStorage.setItem("enemyDefeatCounts", JSON.stringify(enemyDefeatCounts));
  localStorage.setItem("isMusicPlaying", isMusicPlaying);
  localStorage.setItem("musicVolume", musicVolume);
  localStorage.setItem("dungeonBackground", dungeonBackground);
};

// Export game state
const exportGameState = () => {
  const gameState = {
    money,
    diamonds,
    damage,
    charHp,
    charMaxHp,
    up3,
    weaponUpgrades,
    armorUpgrades,
    potionPurchases,
    currentRoom,
    dungeonCompletions,
    enemyType,
    enemyCurrentHp,
    enemyMaxHp,
    enemyDamage,
    goldReward,
    isAttacking,
    attackCount,
    activeQuests,
    questProgress,
    questCompletions,
    ownedItems,
    enemyDefeatCounts,
    isMusicPlaying,
    musicVolume,
    dungeonBackground
  };
  const data = JSON.stringify(gameState, null, 2);
  const blob = new Blob([data], { type: 'text/plain' });
  const date = new Date();
  const timestamp = date.toISOString().replace(/[:.]/g, '-').slice(0, 19);
  const filename = `KoralsQuest_${timestamp}.txt`;
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
  showNotification("Game state exported to " + filename);
};

// Load game state from file
const loadFromFile = (file) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const gameState = JSON.parse(e.target.result);
      if (!gameState || typeof gameState !== 'object') throw new Error("Invalid file format");
      money = Number.isInteger(gameState.money) && gameState.money >= 0 ? gameState.money : 0;
      diamonds = Number.isInteger(gameState.diamonds) && gameState.diamonds >= 0 ? gameState.diamonds : 0;
      damage = Number.isInteger(gameState.damage) && gameState.damage >= 1 ? gameState.damage : 2;
      charHp = Number.isInteger(gameState.charHp) && gameState.charHp >= 0 ? gameState.charHp : 30;
      charMaxHp = Number.isInteger(gameState.charMaxHp) && gameState.charMaxHp >= 30 ? gameState.charMaxHp : 30;
      up3 = Number.isInteger(gameState.up3) && gameState.up3 >= 0 ? gameState.up3 : 0;
      weaponUpgrades = Number.isInteger(gameState.weaponUpgrades) && gameState.weaponUpgrades >= 0 ? gameState.weaponUpgrades : 0;
      armorUpgrades = Number.isInteger(gameState.armorUpgrades) && gameState.armorUpgrades >= 0 ? gameState.armorUpgrades : 0;
      potionPurchases = Number.isInteger(gameState.potionPurchases) && gameState.potionPurchases >= 0 ? gameState.potionPurchases : 0;
      currentRoom = Number.isInteger(gameState.currentRoom) && gameState.currentRoom >= 1 && gameState.currentRoom <= 5 ? gameState.currentRoom : 1;
      dungeonCompletions = Number.isInteger(gameState.dungeonCompletions) && gameState.dungeonCompletions >= 0 ? gameState.dungeonCompletions : 0;
      enemyType = ['enemy1', 'enemy2', 'enemy3', 'hardEnemy1', 'hardEnemy2', 'boss1', 'boss2', 'boss3', 'boss4', 'boss5'].includes(gameState.enemyType) ? gameState.enemyType : "enemy1";
      enemyCurrentHp = Number.isInteger(gameState.enemyCurrentHp) && gameState.enemyCurrentHp >= 0 ? gameState.enemyCurrentHp : 15;
      enemyMaxHp = Number.isInteger(gameState.enemyMaxHp) && gameState.enemyMaxHp >= 15 ? gameState.enemyMaxHp : 15;
      enemyDamage = Number.isInteger(gameState.enemyDamage) && gameState.enemyDamage >= 1 ? gameState.enemyDamage : 1;
      goldReward = Number.isInteger(gameState.goldReward) && gameState.goldReward >= 5 ? gameState.goldReward : 5;
      isAttacking = typeof gameState.isAttacking === 'boolean' ? gameState.isAttacking : false;
      attackCount = Number.isInteger(gameState.attackCount) && gameState.attackCount >= 0 ? gameState.attackCount : 0;
      activeQuests = Array.isArray(gameState.activeQuests) && gameState.activeQuests.every(q => questTemplates.some(t => t.type === q.type) && Number.isInteger(q.goal) && q.goal >= 0) ? gameState.activeQuests : getRandomQuests();
      questProgress = typeof gameState.questProgress === 'object' ? { ...questProgress } : {
        killEnemies: 0,
        defeatDragon: 0,
        defeatDemon: 0,
        defeatMath: 0,
        defeatServer: 0,
        defeatLinux: 0,
        clearDungeon: 0,
        upgradeWeapon: 0,
        upgradeArmor: 0,
        purchasePotions: 0,
        collectGold: 0
      };
      Object.keys(questProgress).forEach(key => {
        questProgress[key] = Number.isInteger(gameState.questProgress[key]) && gameState.questProgress[key] >= 0 ? gameState.questProgress[key] : 0;
      });
      questCompletions = typeof gameState.questCompletions === 'object' ? { ...questCompletions } : {
        killEnemies: 0,
        defeatDragon: 0,
        defeatDemon: 0,
        defeatMath: 0,
        defeatServer: 0,
        defeatLinux: 0,
        clearDungeon: 0,
        upgradeWeapon: 0,
        upgradeArmor: 0,
        purchasePotions: 0,
        collectGold: 0
      };
      Object.keys(questCompletions).forEach(key => {
        questCompletions[key] = Number.isInteger(gameState.questCompletions[key]) && gameState.questCompletions[key] >= 0 ? gameState.questCompletions[key] : 0;
      });
      ownedItems = typeof gameState.ownedItems === 'object' ? { ...ownedItems } : { excalibur: false, fireAspect: false, greenAmulet: false };
      ownedItems.excalibur = typeof gameState.ownedItems.excalibur === 'boolean' ? gameState.ownedItems.excalibur : false;
      ownedItems.fireAspect = typeof gameState.ownedItems.fireAspect === 'boolean' ? gameState.ownedItems.fireAspect : false;
      ownedItems.greenAmulet = typeof gameState.ownedItems.greenAmulet === 'boolean' ? gameState.ownedItems.greenAmulet : false;
      enemyDefeatCounts = typeof gameState.enemyDefeatCounts === 'object' ? { ...enemyDefeatCounts } : {
        enemy1: 0,
        enemy2: 0,
        enemy3: 0,
        hardEnemy1: 0,
        hardEnemy2: 0,
        boss1: 0,
        boss2: 0,
        boss3: 0,
        boss4: 0,
        boss5: 0
      };
      Object.keys(enemyDefeatCounts).forEach(key => {
        enemyDefeatCounts[key] = Number.isInteger(gameState.enemyDefeatCounts[key]) && gameState.enemyDefeatCounts[key] >= 0 ? gameState.enemyDefeatCounts[key] : 0;
      });
      isMusicPlaying = typeof gameState.isMusicPlaying === 'boolean' ? gameState.isMusicPlaying : true;
      musicVolume = typeof gameState.musicVolume === 'number' && gameState.musicVolume >= 0 && gameState.musicVolume <= 1 ? gameState.musicVolume : 0.5;
      dungeonBackground = ["./res/img/dungeon.jpg", "./res/img/dungeon2.jpg", "./res/img/dungeon3.jpg"].includes(gameState.dungeonBackground) ? gameState.dungeonBackground : "./res/img/dungeon.jpg";
      if (charHp > charMaxHp) charHp = charMaxHp;
      saveGameState();
      updateUI();
      updateQuestList();
      updateMusicState();
      updateSpecialAttackButton();
      showNotification("Game state loaded successfully!");
    } catch (error) {
      showNotification("Error loading file: Invalid format or corrupted data");
    }
    loadFileInput.value = "";
  };
  reader.onerror = () => {
    showNotification("Error reading file");
    loadFileInput.value = "";
  };
  reader.readAsText(file);
};

// Reset game state
const resetGameState = () => {
  if (confirm("Reset all progress?")) {
    localStorage.clear();
    money = 0;
    diamonds = 0;
    damage = 2;
    charHp = 30;
    charMaxHp = 30;
    up3 = 0;
    weaponUpgrades = 0;
    armorUpgrades = 0;
    potionPurchases = 0;
    currentRoom = 1;
    dungeonCompletions = 0;
    enemyType = "enemy1";
    enemyCurrentHp = 15;
    enemyMaxHp = 15;
    enemyDamage = 1;
    goldReward = 5;
    isAttacking = false;
    attackCount = 0;
    activeQuests = getRandomQuests();
    questProgress = {
      killEnemies: 0,
      defeatDragon: 0,
      defeatDemon: 0,
      defeatMath: 0,
      defeatServer: 0,
      defeatLinux: 0,
      clearDungeon: 0,
      upgradeWeapon: 0,
      upgradeArmor: 0,
      purchasePotions: 0,
      collectGold: 0
    };
    questCompletions = {
      killEnemies: 0,
      defeatDragon: 0,
      defeatDemon: 0,
      defeatMath: 0,
      defeatServer: 0,
      defeatLinux: 0,
      clearDungeon: 0,
      upgradeWeapon: 0,
      upgradeArmor: 0,
      purchasePotions: 0,
      collectGold: 0
    };
    ownedItems = { excalibur: false, fireAspect: false, greenAmulet: false };
    enemyDefeatCounts = {
      enemy1: 0,
      enemy2: 0,
      enemy3: 0,
      hardEnemy1: 0,
      hardEnemy2: 0,
      boss1: 0,
      boss2: 0,
      boss3: 0,
      boss4: 0,
      boss5: 0
    };
    isMusicPlaying = true;
    musicVolume = 0.5;
    dungeonBackground = "./res/img/dungeon.jpg";
    if (enemyAttackInterval) clearInterval(enemyAttackInterval);
    enemyAttackInterval = undefined;
    if (regenInterval) clearInterval(regenInterval);
    regenInterval = undefined;
    if (merchantCycleInterval) clearInterval(merchantCycleInterval);
    merchantCycleInterval = undefined;
    updateUI();
    updateQuestList();
    updateMusicState();
    updateSpecialAttackButton();
    showNotification("Game reset!");
  }
};

audio.volume = musicVolume;
questAudio.volume = musicVolume;
blackmarketAudio.volume = musicVolume;
shopAudio.volume = musicVolume;
dungeonAudio.volume = musicVolume;

const enemies = [
  { type: "enemy1", img: "./res/img/enemy1.png", baseHp: 15, baseDamage: 1, baseGold: 5 },
  { type: "enemy2", img: "./res/img/enemy2.png", baseHp: 20, baseDamage: 2, baseGold: 7 },
  { type: "enemy3", img: "./res/img/enemy3.png", baseHp: 25, baseDamage: 3, baseGold: 10 }
];
const hardEnemies = [
  { type: "hardEnemy1", img: "./res/img/hardEnemy1.png", baseHp: 30, baseDamage: 4, baseGold: 15 },
  { type: "hardEnemy2", img: "./res/img/hardEnemy2.png", baseHp: 40, baseDamage: 5, baseGold: 20 }
];
const bosses = [
  { type: "boss1", img: "./res/img/toothless.gif", baseHp: 50, baseDamage: 8, baseGold: 50, name: "Dragon" },
  { type: "boss2", img: "./res/img/boss2.png", baseHp: 50, baseDamage: 8, baseGold: 75, name: "Demon" },
  { type: "boss3", img: "./res/img/boss3.png", baseHp: 50, baseDamage: 8, baseGold: 75, name: "Math" },
  { type: "boss4", img: "./res/img/boss4.png", baseHp: 50, baseDamage: 8, baseGold: 75, name: "Server" },
  { type: "boss5", img: "./res/img/boss5.png", baseHp: 50, baseDamage: 8, baseGold: 75, name: "Linux" }
];

// Update UI
const updateUI = () => {
  goldAmount.textContent = `Gold: ${money} | Diamonds: ${diamonds}`;
  playerHp.textContent = `HP: ${charHp}/${charMaxHp}`;
  enemyHp.textContent = `HP: ${enemyCurrentHp}/${enemyMaxHp}`;
  roomNumber.textContent = currentRoom;
  enemyImg.src = enemies.find(e => e.type === enemyType)?.img ||
                 hardEnemies.find(e => e.type === enemyType)?.img ||
                 bosses.find(e => e.type === enemyType)?.img ||
                 "./res/img/enemy1.png";
  excaliburItem.style.display = ownedItems.excalibur ? 'none' : 'flex';
  fireAspectItem.style.display = ownedItems.fireAspect ? 'none' : 'flex';
  greenAmuletItem.style.display = ownedItems.greenAmulet ? 'none' : 'flex';
  weaponUpgradeButton.textContent = `Upgrade Weapon (${10 + weaponUpgrades * 5}g)`;
  armorUpgradeButton.textContent = `Upgrade Armor (${10 + armorUpgrades * 5}g)`;
  potionButton.textContent = `Buy Potion (${500 + potionPurchases * 50}g)`;
  volumeSlider.value = musicVolume * 100;
  playerStats.textContent = `Damage: ${damage} | Max HP: ${charMaxHp} | Potions: ${up3}`;
  const items = [];
  if (ownedItems.excalibur) items.push("Excalibur");
  if (ownedItems.fireAspect) items.push("Fire Aspect");
  if (ownedItems.greenAmulet) items.push("Green Amulet");
  ownedItemsElement.textContent = `Items: ${items.length > 0 ? items.join(", ") : "None"}`;
};

// Update special attack button visibility
const updateSpecialAttackButton = () => {
  specialAttackButton.classList.toggle("hidden", !ownedItems.fireAspect || attackCount < 5);
};

// Update music state
const updateMusicState = () => {
  audio.pause();
  questAudio.pause();
  blackmarketAudio.pause();
  shopAudio.pause();
  dungeonAudio.pause();
  audio.volume = isMusicPlaying ? musicVolume : 0;
  questAudio.volume = isMusicPlaying ? musicVolume : 0;
  blackmarketAudio.volume = isMusicPlaying ? musicVolume : 0;
  shopAudio.volume = isMusicPlaying ? musicVolume : 0;
  dungeonAudio.volume = isMusicPlaying ? musicVolume : 0;
  if (isMusicPlaying) {
    if (!questContainer.classList.contains("hidden")) {
      questAudio.play();
    } else if (!blackmarketContainer.classList.contains("hidden")) {
      blackmarketAudio.play();
    } else if (!shopContainer.classList.contains("hidden")) {
      shopAudio.play();
    } else if (!dungeonContainer.classList.contains("hidden")) {
      dungeonAudio.play();
    } else {
      audio.play();
    }
  }
  musicButton.style.display = isMusicPlaying ? "none" : "block";
  musicMutedButton.style.display = isMusicPlaying ? "block" : "none";
};

// Volume slider
volumeSlider.oninput = () => {
  musicVolume = volumeSlider.value / 100;
  audio.volume = isMusicPlaying ? musicVolume : 0;
  questAudio.volume = isMusicPlaying ? musicVolume : 0;
  blackmarketAudio.volume = isMusicPlaying ? musicVolume : 0;
  shopAudio.volume = isMusicPlaying ? musicVolume : 0;
  dungeonAudio.volume = isMusicPlaying ? musicVolume : 0;
  saveGameState();
};

// Select 3 random quests
const getRandomQuests = () => {
  const shuffled = questTemplates.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 3).map(quest => ({
    type: quest.type,
    goal: quest.getGoal(questCompletions[quest.type] || 0)
  }));
};

// Select a single random quest
const getSingleRandomQuest = (completedType) => {
  const availableTemplates = questTemplates.filter(q => q.type !== completedType && !activeQuests.some(aq => aq.type === q.type));
  if (availableTemplates.length === 0) {
    const fallbackTemplates = questTemplates.filter(q => q.type !== completedType);
    if (fallbackTemplates.length === 0) return null;
    const quest = fallbackTemplates[Math.floor(Math.random() * fallbackTemplates.length)];
    return {
      type: quest.type,
      goal: quest.getGoal((questCompletions[quest.type] || 0) + 1)
    };
  }
  const quest = availableTemplates[Math.floor(Math.random() * availableTemplates.length)];
  return {
    type: quest.type,
    goal: quest.getGoal((questCompletions[quest.type] || 0) + 1)
  };
};

// Update quest list
const updateQuestList = () => {
  questList.innerHTML = "";
  activeQuests.forEach(quest => {
    const questTemplate = questTemplates.find(q => q.type === quest.type);
    const progress = questProgress[quest.type] || 0;
    const goal = quest.type.startsWith("defeat") ? 1 : quest.goal;
    const description = questTemplate.description(goal);
    const questItem = document.createElement("div");
    questItem.className = "quest-item";
    questItem.innerHTML = `<span>${description} (${progress}/${goal})</span>`;
    questList.appendChild(questItem);
  });
};

// Complete a quest
const completeQuest = (quest) => {
  const questTemplate = questTemplates.find(q => q.type === quest.type);
  const completions = questCompletions[quest.type] || 0;
  const reward = questTemplate.reward(completions);
  money += reward.gold;
  diamonds += 1;
  let rewardMessage = `Quest completed! Gained ${reward.gold} gold and 1 diamond`;
  if (reward.upgrade === "weapon") {
    damage += 1;
    rewardMessage += ` and Weapon Upgrade! Damage: ${damage}`;
  } else if (reward.upgrade === "armor") {
    charMaxHp += 5;
    charHp += 5;
    rewardMessage += ` and Armor Upgrade! Max HP: ${charMaxHp}`;
  } else if (reward.upgrade === "potion") {
    up3 += 1;
    rewardMessage += ` and Potion! Potions: ${up3}`;
  }
  questCompletions[quest.type] = completions + 1;
  questProgress[quest.type] = 0;
  const newQuest = getSingleRandomQuest(quest.type);
  if (newQuest) {
    activeQuests = activeQuests.filter(q => q.type !== quest.type);
    activeQuests.push(newQuest);
  }
  saveGameState();
  updateQuestList();
  updateUI();
  showNotification(rewardMessage);
};

// Check quest progress
const checkQuestProgress = (type, value) => {
  activeQuests.forEach(quest => {
    if (quest.type === type) {
      if (type === "killEnemies" || type === "upgradeWeapon" || type === "upgradeArmor" || type === "purchasePotions") {
        questProgress[type] = (questProgress[type] || 0) + 1;
      } else if (type === "defeatDragon" && value === "boss1") {
        questProgress[type] = 1;
      } else if (type === "defeatDemon" && value === "boss2") {
        questProgress[type] = 1;
      } else if (type === "defeatMath" && value === "boss3") {
        questProgress[type] = 1;
      } else if (type === "defeatServer" && value === "boss4") {
        questProgress[type] = 1;
      } else if (type === "defeatLinux" && value === "boss5") {
        questProgress[type] = 1;
      } else if (type === "clearDungeon" && value === 5) {
        questProgress[type] = 1;
      } else if (type === "collectGold") {
        questProgress[type] = money;
      }
      if (questProgress[type] >= quest.goal) {
        completeQuest(quest);
      } else {
        saveGameState();
        updateQuestList();
      }
    }
  });
};

// Initialize game
loadGameState();

// Update background based on time or dungeon
const updateBackground = () => {
  if (!dungeonContainer.classList.contains("hidden")) {
    const backgrounds = ["./res/img/dungeon.jpg", "./res/img/dungeon2.jpg", "./res/img/dungeon3.jpg"];
    dungeonBackground = backgrounds[dungeonCompletions % 3];
    document.body.style.backgroundImage = `url('${dungeonBackground}')`;
  } else {
    const hour = new Date().getHours();
    const isDay = hour >= 6 && hour < 18;
    gameContainer.style.backgroundImage = isDay
      ? "url('./res/img/townDay.jpg')"
      : "url('./res/img/townNight.jpg')";
  }
};

// Cycle merchant images
const cycleMerchant = () => {
  const merchantImages = [
    './res/img/merchant1.png',
    './res/img/merchant2.png',
    './res/img/merchant3.png'
  ];
  let currentIndex = 0;
  merchant.src = merchantImages[currentIndex];
  merchantCycleInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % merchantImages.length;
    merchant.src = merchantImages[currentIndex];
  }, 3000);
};

// Set enemy with infinite scaling and defeat-based progression
const setEnemy = () => {
  let enemyPool;
  if (currentRoom === 1 || currentRoom === 2) {
    enemyPool = enemies;
  } else if (currentRoom === 4) {
    enemyPool = hardEnemies;
  } else if (currentRoom === 5) {
    enemyPool = bosses;
  }
  const enemy = enemyPool[Math.floor(Math.random() * enemyPool.length)];
  const defeatCount = enemyDefeatCounts[enemy.type] || 0;
  const hpScale = 1 + (dungeonCompletions * 2) + (defeatCount * 0.2);
  const damageScale = 1 + (dungeonCompletions) + (defeatCount * 0.15);
  const goldScale = 1 + (dungeonCompletions * 0.5) + (defeatCount * 0.1);
  enemyType = enemy.type;
  enemyImg.src = enemy.img;
  enemyCurrentHp = Math.round(enemy.baseHp * hpScale);
  enemyMaxHp = enemyCurrentHp;
  enemyDamage = Math.round(enemy.baseDamage * damageScale);
  goldReward = Math.round(enemy.baseGold * goldScale);
  enemyHp.textContent = `HP: ${enemyCurrentHp}/${enemyMaxHp}`;
  saveGameState();
};

// Start enemy attack and Green Amulet regen
const startEnemyAttack = () => {
  if (enemyAttackInterval) clearInterval(enemyAttackInterval);
  if (regenInterval) clearInterval(regenInterval);
  const interval = currentRoom === 5 ? 3000 : 1000;
  enemyAttackInterval = setInterval(() => {
    if (chestContainer.classList.contains("hidden")) {
      charHp -= enemyDamage;
      playerHp.textContent = `HP: ${charHp}/${charMaxHp}`;
      saveGameState();
      if (charHp <= 0) {
        showNotification("You died...");
        charHp = charMaxHp;
        currentRoom = 1;
        saveGameState();
        playerHp.textContent = `HP: ${charHp}/${charMaxHp}`;
        roomNumber.textContent = currentRoom;
        setEnemy();
        dungeonContainer.classList.add("hidden");
        gameContainer.classList.remove("hidden");
        goldMenu.classList.remove("hidden");
        updateBackground();
        updateMusicState();
        if (enemyAttackInterval) clearInterval(enemyAttackInterval);
        enemyAttackInterval = undefined;
        if (regenInterval) clearInterval(regenInterval);
        regenInterval = undefined;
        attackCount = 0;
        updateSpecialAttackButton();
      }
    }
  }, interval);
  if (ownedItems.greenAmulet) {
    regenInterval = setInterval(() => {
      if (chestContainer.classList.contains("hidden") && charHp < charMaxHp) {
        charHp = Math.min(charHp + 10, charMaxHp);
        playerHp.textContent = `HP: ${charHp}/${charMaxHp}`;
        saveGameState();
      }
    }, 2000);
  }
};

// Stop enemy attack and Green Amulet regen
const stopEnemyAttack = () => {
  if (enemyAttackInterval) clearInterval(enemyAttackInterval);
  enemyAttackInterval = undefined;
  if (regenInterval) clearInterval(regenInterval);
  regenInterval = undefined;
};

// Save/Load modal
saveLoadButton.onclick = () => {
  saveModal.classList.remove("hidden");
};
exportButton.onclick = () => {
  exportGameState();
  saveModal.classList.add("hidden");
};
loadButton.onclick = () => {
  loadFileInput.click();
};
loadFileInput.onchange = (e) => {
  if (e.target.files.length > 0) {
    loadFromFile(e.target.files[0]);
    saveModal.classList.add("hidden");
  }
};
resetButton.onclick = () => {
  resetGameState();
  saveModal.classList.add("hidden");
};
closeSave.onclick = () => {
  saveModal.classList.add("hidden");
};

// Music toggle
musicButton.onclick = () => {
  isMusicPlaying = true;
  updateMusicState();
  saveGameState();
};
musicMutedButton.onclick = () => {
  isMusicPlaying = false;
  audio.pause();
  questAudio.pause();
  blackmarketAudio.pause();
  shopAudio.pause();
  dungeonAudio.pause();
  musicMutedButton.style.display = "none";
  musicButton.style.display = "block";
  saveGameState();
};

// Play button
playButton.onclick = () => {
  menuContainer.style.display = "none";
  gameContainer.classList.remove("hidden");
  goldMenu.classList.remove("hidden");
  charHp = charMaxHp;
  saveGameState();
  playerHp.textContent = `HP: ${charHp}/${charMaxHp}`;
  updateUI();
  updateBackground();
  updateMusicState();
};

// Game menu buttons
dungeonButton.onclick = () => {
  gameContainer.classList.add("hidden");
  dungeonContainer.classList.remove("hidden");
  goldMenu.classList.remove("hidden");
  updateBackground();
  updateUI();
  updateMusicState();
  if (currentRoom === 3) {
    enemyContainer.classList.add("hidden");
    chestContainer.classList.remove("hidden");
    stopEnemyAttack();
  } else {
    enemyContainer.classList.remove("hidden");
    chestContainer.classList.add("hidden");
    setEnemy();
    startEnemyAttack();
  }
};
shopButton.onclick = () => {
  gameContainer.classList.add("hidden");
  shopContainer.classList.remove("hidden");
  goldMenu.classList.remove("hidden");
  document.body.style.backgroundImage = "url('./res/img/shop.png')";
  updateUI();
  updateMusicState();
  cycleMerchant();
};
blackmarketButton.onclick = () => {
  gameContainer.classList.add("hidden");
  blackmarketContainer.classList.remove("hidden");
  goldMenu.classList.remove("hidden");
  document.body.style.backgroundImage = "url('./res/img/blackmarket.jpg')";
  updateUI();
  updateMusicState();
};
questsButton.onclick = () => {
  gameContainer.classList.add("hidden");
  questContainer.classList.remove("hidden");
  goldMenu.classList.remove("hidden");
  document.body.style.backgroundImage = "url('./res/img/questRoom.jpg')";
  questList.classList.remove("hidden");
  updateQuestList();
  updateUI();
  updateMusicState();
};
backToMenuButton.onclick = () => {
  gameContainer.classList.add("hidden");
  goldMenu.classList.add("hidden");
  menuContainer.style.display = "block";
  document.body.style.backgroundImage = "url('./res/img/gameMenu.jpg')";
  charHp = charMaxHp;
  saveGameState();
  playerHp.textContent = `HP: ${charHp}/${charMaxHp}`;
  stopEnemyAttack();
  attackCount = 0;
  updateSpecialAttackButton();
  if (merchantCycleInterval) clearInterval(merchantCycleInterval);
  merchantCycleInterval = undefined;
  updateUI();
  updateMusicState();
};

// Quest room buttons
backToTownQuestButton.onclick = () => {
  questContainer.classList.add("hidden");
  gameContainer.classList.remove("hidden");
  goldMenu.classList.remove("hidden");
  charHp = charMaxHp;
  saveGameState();
  playerHp.textContent = `HP: ${charHp}/${charMaxHp}`;
  updateBackground();
  updateUI();
  updateMusicState();
};

// Black Market buttons
backToTownBlackmarketButton.onclick = () => {
  blackmarketContainer.classList.add("hidden");
  gameContainer.classList.remove("hidden");
  goldMenu.classList.remove("hidden");
  charHp = charMaxHp;
  saveGameState();
  playerHp.textContent = `HP: ${charHp}/${charMaxHp}`;
  updateBackground();
  updateUI();
  updateMusicState();
};
buyExcaliburButton.onclick = () => {
  if (ownedItems.excalibur) {
    showNotification("You already own Excalibur!");
  } else if (diamonds >= 50) {
    diamonds -= 50;
    ownedItems.excalibur = true;
    excaliburItem.style.display = 'none';
    damage += 25;
    saveGameState();
    updateUI();
    showNotification("Purchased Excalibur! Damage: " + damage);
  } else {
    showNotification("Not enough diamonds!");
  }
};
buyFireAspectButton.onclick = () => {
  if (ownedItems.fireAspect) {
    showNotification("You already own Fire Aspect!");
  } else if (diamonds >= 75) {
    diamonds -= 75;
    ownedItems.fireAspect = true;
    fireAspectItem.style.display = 'none';
    saveGameState();
    updateUI();
    showNotification("Purchased Fire Aspect! Special attack enabled after 5 attacks.");
  } else {
    showNotification("Not enough diamonds!");
  }
};
buyGreenAmuletButton.onclick = () => {
  if (ownedItems.greenAmulet) {
    showNotification("You already own Green Amulet!");
  } else if (diamonds >= 100) {
    diamonds -= 100;
    ownedItems.greenAmulet = true;
    greenAmuletItem.style.display = 'none';
    saveGameState();
    updateUI();
    showNotification("Purchased Green Amulet! Regenerates 10 HP every 2 seconds in combat.");
    if (!chestContainer.classList.contains("hidden") && !dungeonContainer.classList.contains("hidden")) {
      startEnemyAttack();
    }
  } else {
    showNotification("Not enough diamonds!");
  }
};

// Shop buttons
backToTownButton.onclick = () => {
  shopContainer.classList.add("hidden");
  gameContainer.classList.remove("hidden");
  goldMenu.classList.remove("hidden");
  charHp = charMaxHp;
  saveGameState();
  playerHp.textContent = `HP: ${charHp}/${charMaxHp}`;
  updateBackground();
  updateUI();
  updateMusicState();
  if (merchantCycleInterval) clearInterval(merchantCycleInterval);
  merchantCycleInterval = undefined;
};
weaponUpgradeButton.onclick = () => {
  const cost = 10 + weaponUpgrades * 5;
  if (money >= cost) {
    money -= cost;
    damage += 1;
    weaponUpgrades += 1;
    checkQuestProgress("upgradeWeapon");
    saveGameState();
    updateUI();
    showNotification(`Weapon upgraded! Damage: ${damage}`);
  } else {
    showNotification("Not enough gold!");
  }
};
armorUpgradeButton.onclick = () => {
  const cost = 10 + armorUpgrades * 5;
  if (money >= cost) {
    money -= cost;
    charMaxHp += 5;
    charHp += 5;
    armorUpgrades += 1;
    checkQuestProgress("upgradeArmor");
    saveGameState();
    updateUI();
    showNotification(`Armor upgraded! Max HP: ${charMaxHp}`);
  } else {
    showNotification("Not enough gold!");
  }
};
potionButton.onclick = () => {
  const cost = 500 + potionPurchases * 50;
  if (money >= cost) {
    money -= cost;
    up3 += 1;
    potionPurchases += 1;
    checkQuestProgress("purchasePotions");
    saveGameState();
    updateUI();
    showNotification(`Potion purchased! Potions: ${up3}`);
  } else {
    showNotification("Not enough gold!");
  }
};

// Dungeon buttons
attackButton.onclick = () => {
  if (!attackButton) {
    console.error("Attack button is null");
    showNotification("Error: Attack button not found!");
    return;
  }
  if (!dungeonMainChar || !enemyHp) {
    console.error("Missing dungeonMainChar or enemyHp element");
    showNotification("Error: Game elements missing!");
    return;
  }
  console.debug(`Attack button clicked: chestContainer.hidden=${chestContainer.classList.contains("hidden")}, isAttacking=${isAttacking}, currentRoom=${currentRoom}, enemyCurrentHp=${enemyCurrentHp}`);
  if (!chestContainer.classList.contains("hidden") || isAttacking) {
    console.debug("Attack blocked: chest visible or isAttacking true");
    return;
  }
  isAttacking = true;
  try {
    dungeonMainChar.src = "./res/img/attack_kqv2.png";
    dungeonMainChar.classList.add("attacking");
    enemyCurrentHp -= damage;
    if (ownedItems.fireAspect) {
      attackCount += 1;
      updateSpecialAttackButton();
    }
    enemyHp.textContent = `HP: ${enemyCurrentHp}/${enemyMaxHp}`;
    saveGameState();
    setTimeout(() => {
      try {
        dungeonMainChar.src = "./res/img/idle_kqv2.png";
        dungeonMainChar.classList.remove("attacking");
        isAttacking = false;
      } catch (error) {
        console.error("Error in attack animation reset:", error);
        isAttacking = false;
      }
    }, 200);
    if (enemyCurrentHp <= 0) {
      enemyDefeatCounts[enemyType] = (enemyDefeatCounts[enemyType] || 0) + 1;
      stopEnemyAttack();
      money += goldReward;
      checkQuestProgress("collectGold");
      checkQuestProgress("killEnemies");
      if (enemyType === "boss1") checkQuestProgress("defeatDragon", enemyType);
      if (enemyType === "boss2") checkQuestProgress("defeatDemon", enemyType);
      if (enemyType === "boss3") checkQuestProgress("defeatMath", enemyType);
      if (enemyType === "boss4") checkQuestProgress("defeatServer", enemyType);
      if (enemyType === "boss5") checkQuestProgress("defeatLinux", enemyType);
      currentRoom += 1;
      saveGameState();
      if (currentRoom === 3) {
        enemyContainer.classList.add("hidden");
        chestContainer.classList.remove("hidden");
      } else if (currentRoom > 5) {
        dungeonCompletions += 1;
        currentRoom = 1;
        const backgrounds = ["./res/img/dungeon.jpg", "./res/img/dungeon2.jpg", "./res/img/dungeon3.jpg"];
        dungeonBackground = backgrounds[dungeonCompletions % 3];
        checkQuestProgress("clearDungeon", 5);
        showNotification("Dungeon cleared!");
        dungeonContainer.classList.add("hidden");
        gameContainer.classList.remove("hidden");
        goldMenu.classList.remove("hidden");
        updateBackground();
        updateMusicState();
        attackCount = 0;
        updateSpecialAttackButton();
      } else {
        setEnemy();
        startEnemyAttack();
      }
      updateUI();
    }
  } catch (error) {
    console.error("Error in attack handler:", error);
    isAttacking = false;
    showNotification("Error during attack!");
  }
};
specialAttackButton.onclick = () => {
  if (!chestContainer.classList.contains("hidden") || isAttacking || attackCount < 5) return;
  isAttacking = true;
  dungeonMainChar.src = "./res/img/attack_kqv2.png";
  dungeonMainChar.classList.add("attacking");
  enemyCurrentHp -= damage * 3;
  attackCount = 0;
  updateSpecialAttackButton();
  enemyHp.textContent = `HP: ${enemyCurrentHp}/${enemyMaxHp}`;
  saveGameState();
  setTimeout(() => {
    try {
      dungeonMainChar.src = "./res/img/idle_kqv2.png";
      dungeonMainChar.classList.remove("attacking");
      isAttacking = false;
    } catch (error) {
      console.error("Error in special attack animation reset:", error);
      isAttacking = false;
    }
  }, 200);
  if (enemyCurrentHp <= 0) {
    enemyDefeatCounts[enemyType] = (enemyDefeatCounts[enemyType] || 0) + 1;
    stopEnemyAttack();
    money += goldReward;
    checkQuestProgress("collectGold");
    checkQuestProgress("killEnemies");
    if (enemyType === "boss1") checkQuestProgress("defeatDragon", enemyType);
    if (enemyType === "boss2") checkQuestProgress("defeatDemon", enemyType);
    if (enemyType === "boss3") checkQuestProgress("defeatMath", enemyType);
    if (enemyType === "boss4") checkQuestProgress("defeatServer", enemyType);
    if (enemyType === "boss5") checkQuestProgress("defeatLinux", enemyType);
    currentRoom += 1;
    saveGameState();
    if (currentRoom === 3) {
      enemyContainer.classList.add("hidden");
      chestContainer.classList.remove("hidden");
    } else if (currentRoom > 5) {
      dungeonCompletions += 1;
      currentRoom = 1;
      const backgrounds = ["./res/img/dungeon.jpg", "./res/img/dungeon2.jpg", "./res/img/dungeon3.jpg"];
      dungeonBackground = backgrounds[dungeonCompletions % 3];
      checkQuestProgress("clearDungeon", 5);
      showNotification("Dungeon cleared!");
      dungeonContainer.classList.add("hidden");
      gameContainer.classList.remove("hidden");
      goldMenu.classList.remove("hidden");
      updateBackground();
      updateMusicState();
      attackCount = 0;
      updateSpecialAttackButton();
    } else {
      setEnemy();
      startEnemyAttack();
    }
    updateUI();
  }
};
usePotionButton.onclick = () => {
  if (up3 <= 0) {
    showNotification("No potions available!");
    return;
  }
  if (charHp >= charMaxHp) {
    showNotification("Health is already full!");
    return;
  }
  up3 -= 1;
  charHp = charMaxHp;
  playerHp.textContent = `HP: ${charHp}/${charMaxHp}`;
  saveGameState();
  updateUI();
  showNotification("Potion used! Health restored.");
};
openChestButton.onclick = () => {
  money += 10;
  checkQuestProgress("collectGold");
  const upgrades = ["weapon", "armor", "potion"];
  const upgrade = upgrades[Math.floor(Math.random() * 3)];
  let rewardMessage = "Chest opened! Gained 10 gold";
  if (upgrade === "weapon") {
    damage += 1;
    rewardMessage += ` and Weapon Upgrade! Damage: ${damage}`;
  } else if (upgrade === "armor") {
    charMaxHp += 5;
    charHp += 5;
    rewardMessage += ` and Armor Upgrade! Max HP: ${charMaxHp}`;
  } else if (upgrade === "potion") {
    up3 += 1;
    rewardMessage += ` and Potion! Potions: ${up3}`;
  }
  currentRoom += 1;
  chestContainer.classList.add("hidden");
  enemyContainer.classList.remove("hidden");
  setEnemy();
  startEnemyAttack();
  saveGameState();
  updateUI();
  showNotification(rewardMessage);
};
backToTownDungeonButton.onclick = () => {
  dungeonContainer.classList.add("hidden");
  gameContainer.classList.remove("hidden");
  goldMenu.classList.remove("hidden");
  charHp = charMaxHp;
  saveGameState();
  playerHp.textContent = `HP: ${charHp}/${charMaxHp}`;
  roomNumber.textContent = currentRoom;
  updateBackground();
  updateUI();
  updateMusicState();
  stopEnemyAttack();
  attackCount = 0;
  updateSpecialAttackButton();
};

// Quit button
quitButton.onclick = () => {
  if (confirm("Are you sure you want to quit?")) {
    window.close();
  }
};