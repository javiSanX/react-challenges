const CAT_RANDOM_FACT = "https://catfact.ninja/fact";
const CAT_IMAGE_BASE = "https://cataas.com/cat/says";
const CAT_PREFIX_IMAGE_URL = "https://cataas.com";

async function fetchFacts(): Promise<string> {
   const response = await fetch(CAT_RANDOM_FACT);
   if (!response.ok) {
      throw new Error("Network response was not ok");
   }
   const data = await response.json();
   console.log(data);
   return data.fact;
}

async function fetchCatImage(threeFirstWords: string): Promise<string> {
   const response = await fetch(
      `${CAT_IMAGE_BASE}/${threeFirstWords}?size=50&color=red&json=true`,
   );
   if (!response.ok) {
      throw new Error("Network response was not ok");
   }
   const data = await response.json();
   const _id = data.id;
   const url = `/cat/${_id}/says/${threeFirstWords}`;
   // Espera a que la imagen esté completamente descargada
   await new Promise<void>((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => reject(new Error("Error loading image"));
      img.src = `${CAT_PREFIX_IMAGE_URL}${url}`;
   });
   return `${CAT_PREFIX_IMAGE_URL}${url}`;
}

export function createPromises() {
   const factsPromise = fetchFacts();
   const imagePromise = factsPromise.then((fact) => {
      const threeFirstWords = fact.split(" ", 3).join("");
      return fetchCatImage(threeFirstWords);
   });
   return { factsPromise, imagePromise };
}
