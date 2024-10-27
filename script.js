document.addEventListener("click", e => {
  if (e.target.matches('.share')) {
    e.target.parentElement.classList.toggle('active');
  }
})