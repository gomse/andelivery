export default class BaseController {

  filterParams(params, whitelist) {
    const filtered = {};
    for (const key in params) {
      if (whitelist.indexOf(key) > -1) {
        filtered[key] = params[key];
      }
    }
    return filtered;
  }

}
