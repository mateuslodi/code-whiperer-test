/* 
	Criar Logger para fornecer informações uteis para análise de fluxo durante o processo	
	- Logar mensagens
	- Logar erros
	- Logar avisos
*/

export interface ILogger {
	debug(message: string): void;
	info(message: string): void;
	warn(message: string): void;
	error(message: string, error: string): void;
}
