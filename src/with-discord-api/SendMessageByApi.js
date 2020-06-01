import Http from '../http/Http';

/**
 * @param  {Object} message Message will be send: { content }
 * @returns {Boolean} Indicates if the message was sent
 */
export default async (message) => {
  try {
    const { data } = await Http.post(null, message)
    const isSuccess = (data && data.id)

    return isSuccess
  } catch (error) {
    throw new Error(error);
  }
}