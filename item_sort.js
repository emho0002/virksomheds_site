//
// vha. Nodws (account) "CodePen,
// Gallery Item filter" samt. chatgpt.
//

// Click event for elements with class 'filter' and 'a' tag inside
document.querySelectorAll(".filter a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    var a = link.getAttribute("href").substr(1);
    document.querySelectorAll(".items a").forEach((itemsLink) => {
      if (!itemsLink.classList.contains(a) && a !== "all") itemsLink.classList.add("hide");
      else itemsLink.classList.remove("hide");
    });
  });
});
