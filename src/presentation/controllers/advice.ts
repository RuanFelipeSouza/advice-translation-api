import {IAdviceController } from "../protocols/IAdviceController";
import {API_URL} from '../../constants'
import axios from 'axios'

export class Advice implements IAdviceController {
  async getAdvice(): Promise<string> {
    const {data} = await axios.get(API_URL);    
    return data.slip.advice;
  }
  async getAdviceId(): Promise<string>{
    const {data} = await axios.get(API_URL);
    return data.slip.id;
  }
}