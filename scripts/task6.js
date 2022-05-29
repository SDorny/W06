const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  let url = "https://zoo-animal-api.herokuapp.com/animals/rand";
  getAnimal(url);
});

async function getAnimal(URL) {
  let response = await fetch(URL);
  if (response.ok) {
    let data = await response.json();
    console.log(data);
    animal(data);
  }
}

function animal(data) {
    let article = document.createAttribute("article");

    let name = document.createAttribute("h1");
    name.textContent = data.name;

    let latin_name = document.createAttribute("h3");
    latin_name.textContent = data.latin_name;

    let animal_type = document.createAttribute("h4");
    animal_type.textContent = data.animal_type;

    let lifespan = document.createAttribute("h4");
    lifespan.textContent = data.lifespan;

    let habitat = document.createAttribute("h4");
    habitat.textContent = data.habitat;
    
    let image_link = document.createAttribute("img");
    img.setAttribute("src", data.image_link);
    img.setAttribute("alt", data.name);
    
    article.appendChild(name);
    article.appendChild(latin_name);
    article.appendChild(animal_type);
    article.appendChild(lifespan);
    article.appendChild(habitat);
    article.appendChild(image_link);
        
    document.querySelector("#animal").appendChild(article);  
};
