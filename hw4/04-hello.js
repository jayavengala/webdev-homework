// Add your code here
const main = document.querySelector("main");
let bold = document.createElement("strong");
const paragraph = document.createElement("p");

const image = document.createElement("img");
image.src = "http://placekitten.com/200/200";
image.style.height = "200px";
image.style.width = "200px";
image.style.borderRadius = "50%";

let node = document.createTextNode(
    "Hi! My name is Jaya Bhargavi Vengala."
  );
let text = "I am a Computer Science graduate student at Portland State University. My hobbies are cooking, cleaning, watching movies and listening songs. I enjoy hanging out with my friends.";

main.appendChild(image);
bold.appendChild(node);
paragraph.appendChild(bold);
paragraph.appendChild(document.createElement("br"));
paragraph.append(text);
paragraph.appendChild(document.createElement("br"));
main.appendChild(paragraph);
main.setAttribute("style", "text-align:center");