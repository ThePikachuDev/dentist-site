function mouseFollower() {
  // console.log("func ran");
  window.addEventListener("mousemove", (details) => {
    document.querySelector(".mouse-following-circle").style.transform =
      `translate(${details.clientX}px,${details.clientY}px)`;
    // console.log(details.clientX, details.clientY);
  });
}

mouseFollower();
