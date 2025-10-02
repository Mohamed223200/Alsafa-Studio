document.addEventListener("DOMContentLoaded", () => {
  const shape = document.querySelector(".shape");
  const shape2 = document.querySelector(".shape2");
  const shape3 = document.querySelector(".shape3");
  const shape4 = document.querySelector(".shape4");
  const shape5 = document.querySelector(".end");


  shape.addEventListener("click", () => {
    shape.classList.add("animate");
  });

  // لما الأنيميشن يخلص، امسح العنصر
  shape.addEventListener("animationend", () => {
    if (shape.classList.contains("animate")) {
        shape.remove(); // يشيل الـ div من الصفحة نهائياً
        shape2.style.display = "flex"
        shape2.classList.add("animate");
    }
  });

  shape2.addEventListener("click", () => {
    shape2.classList.add("active");
  });

  shape2.addEventListener("animationend", () => {
    if (shape2.classList.contains("active")) {
        shape2.remove(); // يشيل الـ div من الصفحة نهائياً
        shape3.style.display = "flex"
        shape3.classList.add("animate");
    }
  });
    shape3.addEventListener("click", () => {
    shape3.classList.add("active");
  });

shape3.addEventListener("animationend", () => {
  if (shape3.classList.contains("active")) {
      shape3.remove(); // يشيل الـ div من الصفحة نهائياً
      shape5.style.display = "flex"
      shape5.classList.add("animate");
  }
});
});