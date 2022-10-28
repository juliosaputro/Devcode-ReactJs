import React from "react";
import { IsMobile } from "../helper/utils";
import ActivityMobile from "./mobile/ActivityMobile";
import ActivityWeb from "./web/ActivityWeb";

export default function Activity() {
  return <>{IsMobile() ? <ActivityMobile /> : <ActivityWeb />}</>;
}
