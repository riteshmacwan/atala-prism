import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class PrismService {
  private readonly prismBaseUrl = 'https://prism-api.your-domain.com'; // Replace with actual PRISM API base URL

  async createDid() {
    const response = await axios.post(`${this.prismBaseUrl}/did/create`);
    return response.data;
  }

  async issueCredential(did: string, credential: any) {
    const response = await axios.post(
      `${this.prismBaseUrl}/credentials/issue`,
      {
        did,
        credential,
      },
    );
    return response.data;
  }

  async verifyCredential(credential: any) {
    const response = await axios.post(
      `${this.prismBaseUrl}/credentials/verify`,
      credential,
    );
    return response.data;
  }
}
