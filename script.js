function changeGreeting() {
    const greetings = [
        "Hello, World!",
        "Hi there!",
        "Welcome!",
        "Howdy!",
        "Namaste!",
        "Bonjour!",
        "Hola!",
        "Ciao!"
    ];
    const greetingElem = document.getElementById('greeting');
    let current = greetingElem.textContent;
    let next = greetings[(greetings.indexOf(current) + 1) % greetings.length];
    greetingElem.textContent = next;
}
