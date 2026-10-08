const orderBtn = document.getElementById("orderBtn");
const car = document.getElementById("car");

const discordLink = "https://discord.gg/8c7aCPTrP";

let isOrdering = false;

orderBtn.addEventListener("click", () => {

    // منع الضغط أكثر من مرة
    if (isOrdering) return;

    isOrdering = true;

    // إخفاء الزر
    orderBtn.style.pointerEvents = "none";
    orderBtn.style.opacity = "0.5";

    // تشغيل حركة العربية
    car.classList.add("drive");

    // بعد انتهاء حركة العربية
    setTimeout(() => {

        // الانتقال إلى Discord
        window.location.href = discordLink;

    }, 2800);

});