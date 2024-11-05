import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Asset } from 'src/entities/asset.entity';

const BaseApi = "https://669ce22d15704bb0e304842d.mockapi.io/"

@Injectable()
export class ApiService {
  async fetchData(): Promise<Asset[]> {
    try {
      const response = await axios.get(BaseApi + '/assets');
      return response.data;
    } catch (error) {
      throw new Error('API request failed: ' + error.message);
    }
  }
}
