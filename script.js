let noClickCount = 0;

document.getElementById("noBtn").addEventListener("click", () => {
    const noBtn = document.getElementById("noBtn");
    noClickCount++;

    if (noClickCount === 1) {
        noBtn.textContent = "Emin misin?";
    } else if (noClickCount === 2) {
        noBtn.textContent = "Son kararın mı?";
    } else if (noClickCount >= 3) {
        noBtn.style.display = "none";
    }
});

document.getElementById("yesBtn").addEventListener("click", () => {
    document.getElementById("spotifyInput").style.display = "block";
});

document.getElementById("submitSpotify").addEventListener("click", () => {
    const name = document.getElementById("spotifyName").value;
    if (name.trim() !== "") {
        alert("Spotify ismi alındı: " + name);
        // Buraya gerçek kayıt işlemi eklenebilir
    } else {
        alert("Lütfen kullanıcı adını gir.");
    }
});