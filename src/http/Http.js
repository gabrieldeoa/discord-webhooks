import axios from 'axios'
import dotenv from 'dotenv';
dotenv.config();

if (!process.env.BASE_URL) throw new Error('URL ON .ENV IS NOT DEFINED');

const wait = (process.env.WAIT) ? '?wait=true' : '?wait=false'
const URL = `${process.env.BASE_URL}/${process.env.DWB_ID}/${process.env.DWB_TOKEN}${wait}`

/**
 * Helper do axios
 */
export default axios.create(
  {
    baseURL: URL,
    timeout: 3000
  }
);
