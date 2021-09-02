export interface IAdviceController{
    getAdvice(): Promise<string>,
    getAdviceId(): Promise<string>
}