const prizeOptions = [
    "AirPod耳機購買券","生活泡沫綠茶一箱","聖誕老人套裝","肯德基全家桶","一個月來回接送券"
];

// 取得 DOM 元素
const slot1 = document.getElementById("slot1");
const slot2 = document.getElementById("slot2");
const slot3 = document.getElementById("slot3");
const spinButton = document.getElementById("spinButton");
const resultMessage = document.getElementById("resultMessage");
const lockTitle = document.getElementById("lockTitle"); 
let isHiddenMode = false;
const hiddenPrize = "AirPod耳機購買券";
// 產生隨機文字的函式
function getRandomPrize() {
    const randomIndex = Math.floor(Math.random() * prizeOptions.length);
    return prizeOptions[randomIndex];
}

// 拉霸效果函式
function spinSlots() {
    resultMessage.textContent = ""; // 清空結果訊息

    // 模擬滾動效果 (每個 slot 會變動數次)
    let spinCount = 20; // 滾動次數
    let currentCount = 0;
    
    const interval = setInterval(() => {
        slot1.textContent = getRandomPrize();
        currentCount++;

        // 當滾動次數達到上限時停止
        if (currentCount >= spinCount) {
            clearInterval(interval);
            displayResult();
        }
    }, 100); // 每 100ms 更新一次
}

// 結果判斷函式
function displayResult() {
    if (isHiddenMode) {
        slot1.textContent = hiddenPrize;
        resultMessage.textContent = `恭喜！你中了「${slot1.textContent}」！🎉`;
        isHiddenMode = false;
    } else {
        resultMessage.textContent = `恭喜！你中了「${slot1.textContent}」！🎉`;
    }
}

lockTitle.addEventListener("click", () => {
    isHiddenMode = true;
});


// 綁定按鈕點擊事件
spinButton.addEventListener("click", spinSlots);

document.addEventListener('DOMContentLoaded', () => {
    const snowContainer = document.getElementById('snow-container');

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = '❄'; // 雪花符號
        snowflake.style.left = Math.random() * 100 + 'vw'; // 隨機水平位置
        snowflake.style.animationDuration = Math.random() * 3 + 5 + 's'; // 隨機飄落時間 (2-5秒)
        snowflake.style.fontSize = Math.random() * 10 + 10 + 'px'; // 隨機大小 (10-20px)
        snowflake.style.opacity = Math.random() * 0.5 + 0.5; // 隨機透明度 (0.5-1)

        // 將雪花加入容器
        snowContainer.appendChild(snowflake);

        // 雪花移除後從 DOM 中刪除
        snowflake.addEventListener('animationend', () => {
            snowflake.remove();
        });
    }

    // 每隔 100ms 生成一個雪花
    setInterval(createSnowflake, 100);
});