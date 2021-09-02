import { IAdviceController } from "../protocols/IAdviceController";
import {Advice} from './advice'

const makeAdviceGetter = (): IAdviceController => {
  return new Advice();
};

describe("Advice Controller", () => {
  test("Should return a body when called", async() => {
    const adviceGetter = makeAdviceGetter();
    const adviceBody = await adviceGetter.getAdvice();
    expect(adviceBody).not.toBe(undefined);
  });
  test("Should return a advice id when called", async() => {
    const adviceGetter = makeAdviceGetter();
    const adviceId = await adviceGetter.getAdviceId();
    expect(adviceId).not.toBe(undefined);
  });
});
