window.addEventListener("DOMContentLoaded", () => {
    let section = document.querySelector(".info1");
    let section2 = document.querySelector(".info2");
    let section3 = document.querySelectorAll(".game_card");
    let section4 = document.querySelector(".instructions");
    let section5 = document.querySelector(".team_work");

    window.addEventListener("scroll", () => {
        if (window.scrollY >= section.offsetTop-900) {
            section.classList.add("active");
            console.log("H")
        }
        if (window.scrollY >= section.offsetTop-800) {
            section2.classList.add("active");
            console.log("H")
        }
        if (window.scrollY >= section.offsetTop-500) {
                  section3.forEach(card => {
        card.classList.add("active");
      });
            console.log("H")
        }
        if (window.scrollY >= section.offsetTop) {
            section4.classList.add("active");
            section5.classList.add("active");
            
            console.log("H")
        }
        
    });
});
