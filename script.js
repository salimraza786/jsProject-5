var arr = [
  {
    dp: "https://images.unsplash.com/photo-1552954277-0c45bd503b54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    story:
      "https://images.unsplash.com/photo-1575439462433-8e1969065df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  },
  {
    dp: "https://plus.unsplash.com/premium_photo-1674129670427-98e71734a581?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
    story:
      "https://images.unsplash.com/photo-1508606572321-901ea443707f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1885&q=80",
  },
  {
    dp: "https://images.unsplash.com/photo-1610932146070-28464a974a7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1902&q=80",
    story:
      "https://images.unsplash.com/photo-1603771550805-abcf98e420e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  },
  {
    dp: "https://images.unsplash.com/photo-1541257710737-06d667133a53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1885&q=80",
    story:
      "https://images.unsplash.com/photo-1535418193292-403b64871181?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1885&q=80",
  },
];

var storiyan = document.querySelector("#storiyan")
var clutter = "";
arr.forEach(function (elem, idx) {
  clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>
`;
});

storiyan.innerHTML=clutter;
storiyan.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display="block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
   
    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none"
    },2000)
})