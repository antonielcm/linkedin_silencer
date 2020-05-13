let names = document.getElementsByClassName("feed-shared-actor__name");

for (let index = 0; index < names.length; index++) {
  if (index % 2 == 0) {
    names[index].closest(".feed-shared-update-v2").style.display = "none"
  } else {
    console.log(index)
  }
}