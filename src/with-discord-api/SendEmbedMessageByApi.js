import Http from '../http/Http';

/**
 * @param  {Array} embed Message will be send: { title, type, description, color }
 * @returns {Boolean} Indicates if the message was sent
 */
export default async (embed) => {
  try {
    
    const embeds = { embeds: [embed] }
    const { data } = await Http.post(null, embeds)
    const isSuccess = (data && data.id)
    
    return isSuccess
  } catch (error) {
    throw new Error(error);
  }
}