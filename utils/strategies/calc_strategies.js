import { profit } from "../../utils/strategies/profit";
import { totalCost } from "../../utils/strategies/totalCost";
import { netCost } from "../../utils/strategies/netCost";
import { ndsBuy20 } from "./ndsBuy20";
import { markup } from "./markup";
import { ndsSale } from "./ndsSale";
import { saleFields } from "./saleFields";

export const strategies = [totalCost, profit, netCost, ndsBuy20, markup, ndsSale, saleFields];