import {Translate} from '../controllers/translate';
import {ITranslateController} from '../protocols/ITranslateController'

const makeTranslate =(): ITranslateController=> {return new Translate()}

describe("Translate Controller", () => {
    test("Should return a body when called", async() => {
        const translate = makeTranslate();
        const mockedText = "This is a fake test";
        const mockedModel = "en-pt"
        const translatedText = translate.handle(mockedText, mockedModel);
        expect(translatedText).not.toBe(undefined);
    });
    test("Should return a different text", async() => {
        const translate = makeTranslate();
        const mockedText = "This is a fake test";
        const mockedModel = "en-pt"
        const translatedText = translate.handle(mockedText, mockedModel);
        expect(translatedText).not.toBe(mockedText);
    });
    test("Should call Translate with the correct text", async() => {
        const translate = makeTranslate();
        const tanslateSpy = jest.spyOn(translate, 'handle');
        const mockedText = "This is a fake test";
        const mockedModel = "en-pt"
        await translate.handle(mockedText, mockedModel);
        expect(tanslateSpy).toBeCalledWith(mockedText, mockedModel)
    });
    test("Should return an error when an invalid model is provided", async() => {
        const translate = makeTranslate();
        const mockedText = "This is a fake test";
        const mockedModel = "invalid model"
        const invalidTranslation = await translate.handle(mockedText, mockedModel);
        expect(invalidTranslation).toBe(`Invalid Param model`);
    })
  });