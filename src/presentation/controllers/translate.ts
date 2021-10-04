import { ITranslateController } from "../protocols/ITranslateController";
import {TRANSLATE_URL,MODEL_REGEX} from '../../constants'
import {invalidParamError} from '../errors/invalid-param-error'
import axios from 'axios'

export class Translate implements ITranslateController {
  async handle(text: string, model: string): Promise<string> {
    if(!model.match(MODEL_REGEX)) return invalidParamError('model');
    const translatedText: string = await axios.post(TRANSLATE_URL, {text: text, modelId: model});
    return translatedText;
  }
}