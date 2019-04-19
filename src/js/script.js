export default {
    showSomething() {
        console.log("Wat?");
    },
    intersection(first, second) {
        return [... new Set(first)].filter(el => new Set(second).has(el));
    } 
}