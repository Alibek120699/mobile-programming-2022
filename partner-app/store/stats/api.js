import { request } from "../axios";

const types = {
  7: "week",
  30: "month",
  365: "year",
};

export const getStats = (type, monthDict) => {
  return request.get(`/moderators/statistics/?${monthDict[type]}`);
};
