import { qtDays } from "./dateDif";
import { totalDay } from "./totalDay";
import { totalDebtPercent } from "./totalDebtPercent";
import { limitPercent } from "./limitPercent";
import { limitTotalDebtPercent } from "./limitTotalDebtPercent";
import { fixedLimitPercent } from "./fixedLimitPercent";
import { totalDayFixed } from "./totalDayFixed";
import { totalDebtFixed } from "./totalDebtFixed";
import { limitFixed } from "./limitFixed";
import { limitTotalDebtFixed } from "./limitTotalDebtFixed";
import { fixedLimitFixed } from "./fixedLimitFixed";

export const fineStrategies = [qtDays, totalDay, totalDebtPercent, limitPercent, limitTotalDebtPercent, fixedLimitPercent,
     totalDayFixed, totalDebtFixed, limitFixed, limitTotalDebtFixed, fixedLimitFixed];