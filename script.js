const messageBtn = document.querySelector(".messageBtn")

messageBtn.addEventListener("click", function () {
  alert("hello");
});

const toggleBtn = document.querySelector("#toggleBtn")
const toggleBtn1 = document.querySelector("#toggleBtn1")
const sidebar = document.querySelector("#sidebar")
const contentContainer = document.querySelector("#content-container")

toggleBtn.addEventListener('click', () => {
  if (sidebar.style.display === 'none') {
    sidebar.style.display = 'block'
    contentContainer.className = 'col-lg-9 h-100vh'
  } else {
    sidebar.style.display = 'none'
    contentContainer.className = 'col-12'
  }
})



toggleBtn1.addEventListener('click', () => {
  if (sidebar.style.display === 'none') {
    sidebar.style.display = 'block'
    contentContainer.className = 'col-lg-9 h-100vh'
  } else {
    sidebar.style.display = 'none'
    contentContainer.className = 'col-12'
  }
})