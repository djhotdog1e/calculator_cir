import { profit } from "./baseProfit/profit";
import { totalCost } from "../../utils/strategies/totalCost";
import { netCost } from "../../utils/strategies/netCost";
import { ndsBuy20 } from "./ndsBuy20";
import { markup } from "./markup";
import { ndsSale } from "./ndsSale/ndsSale";
import { saleFields } from "./saleFields";
import { ndsSaleZaSkolko } from "./ndsSale/ndsSaleZaSkolko";
import { profitTaxBase } from "./baseProfit/profitTaxBase";
import { profitTaxBaseZaSkolko } from "./baseProfit/profitTaxBaseZaSkolko";
import { profitTaxBaseNdsBuy0 } from "./baseProfit/profitTaxBaseNdsBuy0";
import { nds20ToPay } from "./ndsToPay/nds20ToPay";
import { nds20ToPayZaSkolko } from "./ndsToPay/nds20ToPayZaSkolko";
import { ndsToPay } from "./ndsToPay/ndsToPay";
import { ndsToPayZaSkolko } from "./ndsToPay/ndsToPayZaSkolko";
import { profitRate6 } from "./profitRate/profitRate6";
import { profitRate7 } from "./profitRate/profitRate7";
import { profitRate25 } from "./profitRate/profitRate25";

export const strategies = [totalCost, 
    profit, netCost, ndsBuy20, markup, ndsSale, saleFields, ndsSaleZaSkolko, 
    profitTaxBase, profitTaxBaseZaSkolko, profitTaxBaseNdsBuy0, nds20ToPay,
    nds20ToPayZaSkolko, ndsToPay, ndsToPayZaSkolko, profitRate6, profitRate7,
    profitRate25];