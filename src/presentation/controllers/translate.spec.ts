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
    test("Should return a different value of t", async() => {
        const translate = makeTranslate();
        const mockedText = "This is a fake test";
        const mockedModel = "en-pt"
        const translatedText = translate.handle(mockedText, mockedModel);
        expect(translatedText).not.toBe(mockedText);
    });
  });