document.getElementById("mainBtn").addEventListener("click", () => {
  const signature = document.getElementById("signature");
  const animatedText = document.getElementById("animatedText");
  const form = document.getElementById("form-area");

  // İmza göster
  signature.classList.remove("hidden");

  // 3 saniye sonra imzayı gizle, yazıyı ve formu göster
  setTimeout(() => {
    signature.classList.add("hidden");
    animatedText.classList.remove("hidden");

    setTimeout(() => {
      form.classList.remove("hidden");
    }, 1000);
  }, 3000);
});