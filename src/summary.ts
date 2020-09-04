import "./common";
import { config } from "@anandchowdhary/cosmic";

import { summary as spotify } from "./api/spotify";
import { summary as rescueTime } from "./api/rescue-time";
import { summary as lastFm } from "./api/last-fm";
import { summary as pocketCasts } from "./api/pocket-casts";
import { summary as wakatime } from "./api/wakatime";
import { summary as clockify } from "./api/clockify";
import { summary as googleFit } from "./api/google-fit";
import { summary as ouraRing } from "./api/oura-ring";
import { summary as goodreads } from "./api/goodreads";

(async () => {
  if (config("daily").includes("spotify")) await spotify();
  if (config("daily").includes("rescueTime")) await rescueTime();
  if (config("daily").includes("pocketCasts")) await pocketCasts();
  if (config("daily").includes("wakatime")) await wakatime();
  if (config("daily").includes("lastFm")) await lastFm();
  if (config("daily").includes("clockify")) await clockify();
  if (config("daily").includes("googleFit")) await googleFit();
  if (config("daily").includes("ouraRing")) await ouraRing();
  if (config("daily").includes("goodreads")) await goodreads();
})();
