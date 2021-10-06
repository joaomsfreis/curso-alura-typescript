export function inspect(
    targe: any,
    propertKey: string,
    descriptor: PropertyDescriptor
) {
    const metodoOriginal = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`--- Método ${propertKey}`);
        console.log(`------ parametros ${JSON.stringify(args)}`);

        const retorno = metodoOriginal.apply(this, args);

        console.log(`------ retorno ${JSON.stringify(retorno)}`);

        return retorno;
    }

    return descriptor;
}