function beli(nama){
  let nomor = "62895410354446";
  let pesan = "WOYY ADMIN, GW MAU BELI " + nama + ". INI BUKTI NYA NANTI GW KIRIM.";

  window.location.href =
  "https://wa.me/" + nomor + "?text=" + encodeURIComponent(pesan);
}

/* COPY TEXT */
function copyText(id){
  let text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text);
  alert("Nomor berhasil disalin!");
}

/* FAQ */
function openFAQ(){
  document.getElementById("faqBox").style.display = "block";
}

function closeFAQ(){
  document.getElementById("faqBox").style.display = "none";
}
