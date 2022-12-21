let btn = document.querySelector("#fetch-data");
let btn_loader = document.querySelector("#fetch-data div");

btn.addEventListener("click", hide_txt_show_animat);


async function hide_txt_show_animat() {

  btn.style.opacity = "0.7";
  btn.style.cursor = "not-allowed";
  btn_loader.classList.add("hide-text");

  try { /* Fetch Data */
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const users = await response.json();
    console.log(users[1].title);

    btn.style.opacity = "1";
    btn.style.cursor = "pointer";
    btn_loader.classList.remove("hide-text");
    
  } catch (err) {
    alert(err);
  }

}
