const greeting: string = "Hello, TypeScript!";
console.log(greeting);

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById('app');
  if (app) {
    app.innerHTML = `<h1>${greeting}</h1>`;
  }
});
