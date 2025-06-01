const mainBtn = document.getElementById("mainBtn");
const mainContent = document.getElementById("mainContent");
const signatureScreen = document.getElementById("signatureScreen");
const agreementScreen = document.getElementById("agreementScreen");
const formScreen = document.getElementById("formScreen");
const bgMusic = document.getElementById("bgMusic");

mainBtn.addEventListener("click", () => {
  // Müziği başlat (autoplay engellenirse burası çalışır)
  bgMusic.play().catch((err) => {
    console.log("Müzik başlatılamadı:", err);
  });

  // Ana içeriği gizle
  mainContent.classList.add("hidden");

  // İmza ekranını göster
  signatureScreen.classList.remove("hidden");

  // 3 saniye sonra imzayı gizle, anlaşma animasyonunu göster
  setTimeout(() => {
    signatureScreen.classList.add("hidden");
    agreementScreen.classList.remove("hidden");

    // 4 saniye sonra anlaşma yazısını gizle, formu göster
    setTimeout(() => {
      agreementScreen.classList.add("hidden");
      formScreen.classList.remove("hidden");
    }, 4000);

  }, 3000);
});