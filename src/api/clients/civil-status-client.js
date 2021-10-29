import BaseClient from "./base-client";

class CivilStatusClient extends BaseClient {
  constructor(appUrl) {
    super();
    this.baseUrl = `${appUrl}/civil-statuses`;
  }

  list() {
    return this.axios.get(this.baseUrl)
      .then(response => { return response; });
  }

  save(civilStatus) {
    return this.axios.post(this.baseUrl, civilStatus)
      .then(response => { return response; });
  }

  update(civilStatus) {
    return this.axios.put(`${this.baseUrl}/${civilStatus.id}`, civilStatus)
      .then(response => { return response; });
  }
}

export default CivilStatusClient;