import { declareAction } from "@reatom/core";

import * as api from "./api";
import { parseClassicStats } from "./parsers";

export const getStatsFail = declareAction();
export const getStatsSuccess = declareAction();
export const getStats = declareAction(
  async (payload, store) =>
    await api
      .getClassicStats(payload.type, payload.monthDict)
      .then((res) => {
        if (res.data.code !== 0) {
          store.dispatch(getStatsFail(res.data.message));
        } else {
          store.dispatch(getStatsSuccess(parseClassicStats(res.data.stats)));
        }
      })
      .catch((err) => {
        if (
          (err.response && err.response.status) ||
          (err.request && err.request.status)
        ) {
          store.dispatch(getStatsFail(err.data));
        } else {
          store.dispatch(getStatsFail("no internet"));
        }
      })
);
