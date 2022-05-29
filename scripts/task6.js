const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    reset();
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
    let article = document.createElement("article");

    let name = document.createElement("h2");
    name.textContent = data.name;

    let latin_name = document.createElement("h3");
    latin_name.textContent = ("Latin Name: " + data.latin_name);

    let animal_type = document.createElement("h3");
    animal_type.textContent = ("Type of Animal: " + data.animal_type);

    let lifespan = document.createElement("h3");
    lifespan.textContent = ("Lifespan: " + data.lifespan);

    let habitat = document.createElement("h3");
    habitat.textContent = ("Habitat: " + data.habitat);
    
    let image_link = document.createElement("img");
    image_link.setAttribute("src", data.image_link);
    image_link.setAttribute("alt", data.name);
    
    article.appendChild(name);
    article.appendChild(latin_name);
    article.appendChild(animal_type);
    article.appendChild(lifespan);
    article.appendChild(habitat);
    article.appendChild(image_link);
        
    document.querySelector("#animal").appendChild(article);  
};

const reset = () => {
    document.querySelector('#animal').innerHTML = '';
  };
