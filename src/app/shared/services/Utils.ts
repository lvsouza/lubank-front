import { IUrl } from "../interfaces/Utils";

export class Utils {
    /** Modifica o titulo da página na aba do navegador */
    public static setWindowTitle(title: string) {
        if (title !== "")
            window.document.title = title + " - Ordens de serviço";
        else
            window.document.title = "Ordens de serviço";
    }

    /**
     * Retorna um valor randomico.
     */
    public static getRandomId(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    /**
     * Valida um email por regex;
     */
    public static isValidEmail(email: string): boolean {
        const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
        return regex.test(email);
    }

    /**
     * parseUrl
     */
    public static parseUrl(location: any): IUrl {

        let domain: string = '';
        let subdomain: string = '';
        let maximalDomain: string = '';

        const arrayPath: string[] = location.host.split('.');

        if (arrayPath.length === 2) {
            domain = arrayPath[0];
            maximalDomain = arrayPath[1];
        } else if (arrayPath.length === 3) {
            subdomain = arrayPath[0];
            domain = arrayPath[1];
            maximalDomain = arrayPath[2];
        } else if (arrayPath.length === 4) {
            subdomain = arrayPath[0];
            domain = arrayPath[1];
            maximalDomain = arrayPath[2];
        } else {
            subdomain = arrayPath[0];
        }

        console.log({
            host: location.host,
            origin: location.origin,
            pathname: location.pathname,
            protocol: location.protocol,
            subdomain: subdomain,
            domain: domain,
            maximalDomain: maximalDomain
        });

        return {
            host: location.host,
            origin: location.origin,
            pathname: location.pathname,
            protocol: location.protocol,
            subdomain: subdomain,
            domain: domain,
            maximalDomain: maximalDomain
        }
    }

    /**
       * Formata campo Cnpj e remove tudo o que não for número!
       *    Ex: xx.xxx.xxx/xxxx-xx
       * 
       *    Ex: 12345678901234 => 12.345.678/9012-34
       *    Ex: 1q2w3e4r5t6y7u8i9o0p1q2w3e4r => 12.345.678/9012-34
       * 
       * @param numero A string completa para remover letras e caracteres e retornar número de cnpj formatado.
       * 
       * @returns String - Ex: xx.xxx.xxx/xxxx-xx
       */
    public static maskCnpj(numero: string = ""): string {
        const numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        let valorCorreto: any[] = [];
        let retorno = "";
        let numeroArray = numero.split(''); // Divide todoa os caracteres da string.
        numeroArray.forEach(caracter => {   // Remove tudo que não for número, e formata como telefone.
            numeros.forEach(num => {
                if (caracter === num) {
                    if (valorCorreto.length === 2) {
                        valorCorreto.push(".");
                        valorCorreto.push(caracter);
                    } else if (valorCorreto.length === 6) {
                        valorCorreto.push(".");
                        valorCorreto.push(caracter);
                    } else if (valorCorreto.length === 10) {
                        valorCorreto.push("/");
                        valorCorreto.push(caracter);
                    } else if (valorCorreto.length === 15) {
                        valorCorreto.push("-");
                        valorCorreto.push(caracter);
                    } else {
                        valorCorreto.push(caracter);
                    }
                };
            });
        });
        valorCorreto.forEach(caracter => {
            retorno = retorno + caracter;
        });
        return retorno;
    }

    /**
       * Formata campo Cep e remove tudo o que não for número!
       *    Ex: xx.xxx.xxx
       *    Ex: 12345678 => 12.345.678
       *    Ex: 1q2w3e4r5t6y7u8i => 12.345.678
       * 
       * @param numero A string completa para remover letras e caracteres e retornar número de cep formatado.
       * 
       * @returns String - Ex: xx.xxx.xxx
       */
    public static maskCep = (numero = "") => {
        const numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        let valorCorreto: any[] = [];
        let retorno = "";
        let numeroArray = numero.split(''); // Divide todoa os caracteres da string.
        numeroArray.forEach(caracter => {   // Remove tudo que não for número, e formata como telefone.
            numeros.forEach(num => {
                if (caracter === num) {
                    if (valorCorreto.length === 2) {
                        valorCorreto.push(".");
                        valorCorreto.push(caracter);
                    } else if (valorCorreto.length === 6) {
                        valorCorreto.push(".");
                        valorCorreto.push(caracter);
                    } else {
                        valorCorreto.push(caracter);
                    }
                };
            });
        });
        valorCorreto.forEach(caracter => {
            retorno = retorno + caracter;
        });
        return retorno;
    }

    /**
       * Formata campo Cpf e remove tudo o que não for número!
       *    Ex: 55987564312 => 559.875.643-12
       *    Ex: ad98756tr43ad45gdfg5ggdfg4 => 987.564.345-54
       * 
       * @param numero A string completa para remover letras e caracteres e retornar número de cpf formatado.
       * 
       * @returns String - Ex: 559.875.643-12
       */
    public static maskCpf = (numero = "") => {
        numero = numero.substr(0, 14);
        const numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        let valorCorreto: any[] = [];
        let retorno = "";
        let numeroArray = numero.split(''); // Divide todoa os caracteres da string.
        numeroArray.forEach(caracter => {   // Remove tudo que não for número, e formata como telefone.
            numeros.forEach(num => {
                if (caracter === num) {
                    if (valorCorreto.length === 3) {
                        valorCorreto.push(".");
                        valorCorreto.push(caracter);
                    } else if (valorCorreto.length === 7) {
                        valorCorreto.push(".");
                        valorCorreto.push(caracter);
                    } else if (valorCorreto.length === 11) {
                        valorCorreto.push("-");
                        valorCorreto.push(caracter);
                    } else {
                        valorCorreto.push(caracter);
                    }
                };
            });
        });
        valorCorreto.forEach(caracter => {
            retorno = retorno + caracter;
        });
        return retorno;
    }

    /**
     * Remove tudo o que não for numero inteiro!
     *    Ex: 1q2w3e4r5t6y7u8i9o0p => 1234567890
     *    Ex: 1!2@3#4$5%6¨7&8*9(0) => 1234567890
     * 
     * @param valor string - Remove todo tipo de caracter, deixando apenas numeros.
     * @returns string - Ex: 123456789
     */
    public static maskNumero = (valor = "") => {
        const numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        let retorno = "";
        // Divide todos os caracteres da string.
        let numeroArray = valor.split('');
        // Remove tudo que não for número.
        numeroArray.forEach(caracter => {
            numeros.forEach(num => {
                if (caracter === num) { retorno = retorno + caracter; }
            });
        });
        return retorno;
    }
}
