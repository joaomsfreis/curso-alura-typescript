export function domInjector(seletor: string) {
    return function (
        target: any,
        propertKey: string
    ) {
        let elemento: HTMLElement;
        
        const getter = function () {
            if(!elemento) {
                elemento = <HTMLElement> document.querySelector(seletor);
                console.log(`Injetando o seletor ${seletor} do DOM em ${propertKey}`);
            }
 
            return elemento;
        }

        Object.defineProperty(target, propertKey, { get: getter })
    }
}