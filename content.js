const body = document.querySelector("body");
const interval = setInterval(() => {
  const header = document.querySelector("._3auIg");
  if(header) {
    clearInterval(interval);

    const container = document.createElement("div")
    container.classList.add("container");

    const label = document.createElement("label");
    label.classList.add("switch"); 

    var input = document.createElement("input");
    var att = document.createAttribute("type")
    att.value = "checkbox"
    input.setAttributeNode(att);

    var att = document.createAttribute("id")
    att.value = "myCheck"
    input.setAttributeNode(att);
    input.addEventListener("click", verifyCheckBox);

    const span = document.createElement("span");
    span.classList.add("slider", "round");

    const paragrafo = document.createElement("p");
    paragrafo.innerHTML = "Dark mode";
    paragrafo.classList.add("txtDark");

    label.appendChild(input);
    label.appendChild(span);
    container.appendChild(label);
    container.appendChild(paragrafo);
    header.appendChild(container);
  }
})

function verifyCheckBox() {
  const checkBox = document.querySelector("#myCheck");

  if(checkBox.checked == true) {
    body.classList.add("dark")
  } else {
    body.classList.remove("dark")
  }
}