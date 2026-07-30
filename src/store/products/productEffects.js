import axios from "axios";
import { resolveResponse } from "../../Helpers/APIHelper";
export default class ProductsEffects {
  static getProductsList = async () => await resolveResponse(axios.get("/data/data.json"));
}
