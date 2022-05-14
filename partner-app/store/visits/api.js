import { request } from "../axios";

export const getVisits = ({ dateRange, status, page }) => {
  const queryParams = `date_range=${dateRange}&status=${status}&page=${page}&limit=${10}`;
  const getVisitsUrl = `/moderators/visits/v2/?${queryParams}`;

  return request.get(getVisitsUrl);
};

export const getVisitsCounters = (dateRange) => {
  const getVisitsCountersUrl = `/moderators/visits/v2/preview/?date_range=${dateRange}`;

  return request.get(getVisitsCountersUrl);
};
