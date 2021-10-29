import BaseClient from "./base-client";

class AddressTypeClient extends BaseClient {
  constructor(appUrl) {
    super();
    this.baseUrl = `${appUrl}/address-types`;
  }

  list() {
    return this.axios.get(this.baseUrl)
      .then(response => { return response; });
  }

  save(addressType) {
    return this.axios.post(this.baseUrl, addressType)
      .then(response => { return response; });
  }

  update(addressType) {
    return this.axios.put(`${this.baseUrl}/${addressType.id}`, addressType)
      .then(response => { return response; });
  }
}

export default AddressTypeClient;