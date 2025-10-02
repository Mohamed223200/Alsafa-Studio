    function checkWord() {
      let input = document.getElementById("searchBar").value.trim();
      if (input === "MFOmF5QjHR") {
        // لو الكلمة صح دخله صفحة تانية
        window.location.href = "Marwan.html"; 
      } else {
        alert("الكود غير صحيح حاول مرة اخرى!");
      }
    }
    function main() {
        window.location.href = "main.html"; 
    }
    function pass() {
        window.location.href = "Password.html"; 
    }