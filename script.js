function toggleMode() {
  const html = document.documentElement
  //if(html.classList.contains('light')) { //se na minha lista de documento contém uma classe light
  // html.classList.remove('light')//se houver, eu vou pegar a lista do html e vou remover a classe light
  // } else { //se não existe, adiciona
  //   html.classList.add('light')
  // }
  html.classList.toggle("light") //faz parte das ferramentas que substituem os comandos acima
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/lais.png")
  } else {
    img.setAttribute("src", "./assets/laiss.png")
  }
}
