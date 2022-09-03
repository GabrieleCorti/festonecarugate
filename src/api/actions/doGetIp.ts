import { getIp } from "../calls/ipApi";
import { prepareIp } from "../dataHandlers/ipHandler";
import { ErrorGetIp } from "../Errors/ipCallErrors";

export const doGetIp = async () => {
  try {
    const ip = await getIp();
    return prepareIp(ip);
  } catch (_error) {
    throw new ErrorGetIp();
  }
};
