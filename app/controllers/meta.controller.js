import BaseController from './base.controller';

class MetaController extends BaseController {

  index = (req, res) => {
    res.render('index');
  }

  template = (req, res) => {
    res.render('templates/' + req.params[0]);
  }

}

export default new MetaController();
