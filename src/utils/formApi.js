import Api from './'

class FormApi extends Api {
  entityName = 'form'
  sendForm(form) {
    return this.request('POST', '', form)
  }
}

export default FormApi
