function greet(name) {
  return `Hello, ${name}!`;
}

if (typeof document !== "undefined") {
  const heading = document.getElementById("greeting");

  if (heading) {
    heading.textContent = greet("Hemayat");
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { greet };
}
