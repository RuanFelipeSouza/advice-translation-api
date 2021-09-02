import { ITranslateController } from "../protocols/ITranslateController";
import {TRANSLATE_URL} from '../../constants'
import axios from 'axios'

export class Translate implements ITranslateController {
  async handle(text: string, model: string): Promise<string> {
    const translatedText: string = await axios.post(TRANSLATE_URL, {text: text, modelId: model});
    return translatedText;
  }
}
