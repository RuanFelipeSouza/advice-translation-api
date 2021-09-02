export interface ITranslateController{
    handle(text: string,model: string):Promise<string>
}