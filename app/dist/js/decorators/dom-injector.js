export function domInjector(seletor) {
    return function (target, propertKey) {
        let elemento;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(seletor);
                console.log(`Injetando o seletor ${seletor} do DOM em ${propertKey}`);
            }
            return elemento;
        };
        Object.defineProperty(target, propertKey, { get: getter });
    };
}
//# sourceMappingURL=dom-injector.js.map