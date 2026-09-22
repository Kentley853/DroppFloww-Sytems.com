import React, { useState } from "react";
import { Truck, MapPin, AlertTriangle, CheckCircle2, ArrowRight, ShieldCheck, Fuel, Package, Send } from "lucide-react";

interface FleetTruck {
  id: string;
  name: string;
  maxWeightTons: number;
  fuelRateKmPerL: number;
  tollEstimateIDR: number;
  driverAllowanceIDR: number;
}

interface RouteOption {
  id: string;
  name: string;
  distanceKm: number;
  stops: string[];
  baseQuoteIDR: number;
}

export const LogisticsDemo: React.FC = () => {
  const trucks: FleetTruck[] = [
    {
      id: "t1",
      name: "Tronton Wing Box (24T)",
      maxWeightTons: 24,
      fuelRateKmPerL: 2.8,
      tollEstimateIDR: 1200000,
      driverAllowanceIDR: 1800000,
    },
    {
      id: "t2",
      name: "Fuso Heavy Box (14T)",
      maxWeightTons: 14,
      fuelRateKmPerL: 3.6,
      tollEstimateIDR: 950000,
      driverAllowanceIDR: 1400000,
    },
    {
      id: "t3",
      name: "CDD Long Box (7.5T)",
      maxWeightTons: 7.5,
      fuelRateKmPerL: 5.2,
      tollEstimateIDR: 650000,
      driverAllowanceIDR: 950000,
    },
  ];

  const routes: RouteOption[] = [
    {
      id: "r1",
      name: "Cikarang Hub ➔ Semarang DC ➔ Surabaya Port",
      distanceKm: 760,
      stops: [
        "Origin: Cikarang Distribution Hub (07:30 Load)",
        "Drop 1: Semarang Central Cross-dock (15:00)",
        "Drop 2: Tanjung Perak Port Container Terminal (21:30)",
      ],
      baseQuoteIDR: 19500000,
    },
    {
      id: "r2",
      name: "Jakarta West Hub ➔ Bandung Industrial Area",
      distanceKm: 180,
      stops: [
        "Origin: Jakarta West Logistics Depot (08:00)",
        "Drop 1: Karawang Parts Center (10:30)",
        "Drop 2: Gedebage Dry Port Bandung (14:00)",
      ],
      baseQuoteIDR: 6800000,
    },
    {
      id: "r3",
      name: "Surabaya Depot ➔ Denpasar Retail Hub",
      distanceKm: 420,
      stops: [
        "Origin: Rungkut Warehouse Surabaya (06:00)",
        "Ferry: Ketapang-Gilimanuk Crossing (13:00)",
        "Drop 1: Denpasar Sanur Distribution Center (19:00)",
      ],
      baseQuoteIDR: 13200000,
    },
  ];

  const [selectedTruck, setSelectedTruck] = useState<FleetTruck>(trucks[0]);
  const [selectedRoute, setSelectedRoute] = useState<RouteOption>(routes[0]);
  const [cargoWeightTons, setCargoWeightTons] = useState<number>(18.5);
  const [dieselPricePerLiter, setDieselPricePerLiter] = useState<number>(15400); // IDR
  const [isDispatched, setIsDispatched] = useState<boolean>(false);
  const [dispatchTime, setDispatchTime] = useState<string>("");

  // Weight guard
  const isOverweight = cargoWeightTons > selectedTruck.maxWeightTons;

  // Margin math
  const totalFuelLiters = selectedRoute.distanceKm / selectedTruck.fuelRateKmPerL;
  const totalFuelCostIDR = totalFuelLiters * dieselPricePerLiter;
  const totalTripCostIDR =
    totalFuelCostIDR + selectedTruck.tollEstimateIDR + selectedTruck.driverAllowanceIDR;
  const grossProfitIDR = selectedRoute.baseQuoteIDR - totalTripCostIDR;
  const grossMarginPercent = (grossProfitIDR / selectedRoute.baseQuoteIDR) * 100;

  const isMarginHealthy = grossMarginPercent >= 20 && !isOverweight;
  const isMarginWarning = grossMarginPercent < 15 || isOverweight;

  const handleDispatch = () => {
    setIsDispatched(true);
    const now = new Date();
    setDispatchTime(
      now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );
  };

  return (
    <div className="bg-[#FAFBFD] rounded-2xl border border-[#D8E0EA] overflow-hidden">
      {/* Workspace Top Bar */}
      <div className="bg-[#111827] text-white px-6 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-3 text-[15px]">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <span className="font-bold tracking-tight text-[16px]">Interactive Workspace: Freight Dispatch & Margin Guard Engine</span>
        </div>
        <div className="flex items-center gap-3 text-[14px] text-zinc-300">
          <span className="hidden sm:inline font-medium">Fleet Logic: Trans-Regional Telematics</span>
          <span className="px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-100 border border-zinc-700 font-mono text-[13px] font-semibold">
            ACTIVE ROUTE PLANNER
          </span>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        {/* Controls: Vehicle, Route, and Live Sliders */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          {/* Route selector */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            <label className="text-[14px] font-bold text-[#111827] uppercase tracking-wider">
              1. Select Delivery Corridor
            </label>
            <div className="flex flex-col gap-2.5">
              {routes.map((route) => {
                const isSelected = selectedRoute.id === route.id;
                return (
                  <button
                    key={route.id}
                    type="button"
                    onClick={() => {
                      setSelectedRoute(route);
                      setIsDispatched(false);
                    }}
                    className={`text-left p-3.5 rounded-xl border text-[15px] transition-all cursor-pointer ${
                      isSelected
                        ? "bg-white border-[#111827] shadow-xs ring-1 ring-[#111827]"
                        : "bg-white/60 border-[#D8E0EA] hover:bg-white text-[#4B5563]"
                    }`}
                  >
                    <div className="font-bold text-[#111827] flex items-center justify-between">
                      <span>{route.name}</span>
                    </div>
                    <div className="flex items-center justify-between text-[13px] text-[#4B5563] mt-1 font-medium">
                      <span>{route.distanceKm} km trip</span>
                      <span className="font-bold text-[#111827] text-[14px]">
                        Freight Quote: IDR {(route.baseQuoteIDR / 1000000).toFixed(1)}M
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Vehicle and Cargo Load */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <label className="text-[14px] font-bold text-[#111827] uppercase tracking-wider">
              2. Vehicle & Cargo Load
            </label>

            <div>
              <span className="block text-[13px] text-[#374151] mb-1.5 font-bold">Assigned Vehicle</span>
              <select
                value={selectedTruck.id}
                onChange={(e) => {
                  const t = trucks.find((tr) => tr.id === e.target.value);
                  if (t) {
                    setSelectedTruck(t);
                    setIsDispatched(false);
                  }
                }}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D8E0EA] text-[15px] font-bold text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#111827] cursor-pointer"
              >
                {trucks.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name} (Max {t.maxWeightTons}T)
                  </option>
                ))}
              </select>
            </div>

            <div className="bg-white p-4 rounded-xl border border-[#D8E0EA]">
              <div className="flex items-center justify-between text-[14px] mb-2">
                <span className="font-semibold text-[#374151]">Cargo Payload Weight:</span>
                <span className={`font-bold font-mono text-[15px] ${isOverweight ? "text-red-600" : "text-[#111827]"}`}>
                  {cargoWeightTons} Tons {isOverweight && "(OVERLOAD ALERT!)"}
                </span>
              </div>
              <input
                type="range"
                min="3.0"
                max="28.0"
                step="0.5"
                value={cargoWeightTons}
                onChange={(e) => {
                  setCargoWeightTons(parseFloat(e.target.value));
                  setIsDispatched(false);
                }}
                className="w-full accent-[#111827] cursor-pointer h-2"
              />
              <div className="flex justify-between text-[13px] text-[#4B5563] font-semibold mt-1.5">
                <span>Min: 3.0T</span>
                <span>Max rated capacity: {selectedTruck.maxWeightTons}T</span>
              </div>
            </div>
          </div>

          {/* Live Fuel Index Simulator */}
          <div className="lg:col-span-3 flex flex-col gap-2.5">
            <label className="text-[14px] font-bold text-[#111827] uppercase tracking-wider">
              3. Diesel Fuel Index
            </label>
            <div className="bg-white p-4 rounded-xl border border-[#D8E0EA] space-y-2.5">
              <div className="flex items-center justify-between text-[14px]">
                <span className="font-semibold text-[#374151]">Diesel / Liter:</span>
                <span className="font-bold text-[#111827] font-mono text-[15px]">
                  IDR {dieselPricePerLiter.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="13000"
                max="21000"
                step="200"
                value={dieselPricePerLiter}
                onChange={(e) => {
                  setDieselPricePerLiter(parseInt(e.target.value));
                  setIsDispatched(false);
                }}
                className="w-full accent-[#111827] cursor-pointer h-2"
              />
              <p className="text-[13px] text-[#4B5563] font-medium leading-normal">
                Margin Guard verifies if sudden fuel price spikes erode trip profit below safe operating limits.
              </p>
            </div>
          </div>
        </div>

        {/* Live Margin Guard Status Banner */}
        <div
          className={`p-5 sm:p-6 rounded-2xl border mb-6 transition-colors ${
            isOverweight
              ? "bg-red-50 border-red-200 text-red-950"
              : isMarginHealthy
              ? "bg-emerald-50 border-emerald-200 text-emerald-950"
              : isMarginWarning
              ? "bg-amber-50 border-amber-200 text-amber-950"
              : "bg-blue-50 border-blue-200 text-blue-950"
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div className="flex items-start gap-3.5">
              {isOverweight ? (
                <AlertTriangle className="w-7 h-7 text-red-600 shrink-0 mt-0.5" />
              ) : isMarginHealthy ? (
                <CheckCircle2 className="w-7 h-7 text-emerald-700 shrink-0 mt-0.5" />
              ) : (
                <AlertTriangle className="w-7 h-7 text-amber-600 shrink-0 mt-0.5" />
              )}
              <div>
                <span className="font-bold text-[18px] sm:text-[19px] block">
                  {isOverweight
                    ? "DISPATCH BLOCKED: Vehicle Axle Weight Limit Exceeded"
                    : isMarginHealthy
                    ? `MARGIN GUARD: APPROVED FOR DISPATCH (${grossMarginPercent.toFixed(1)}% Gross Margin)`
                    : `MARGIN GUARD WARNING: Low Gross Margin (${grossMarginPercent.toFixed(1)}%)`}
                </span>
                <p className="text-[14px] sm:text-[15px] mt-1 leading-relaxed opacity-90 font-medium">
                  {isOverweight
                    ? `Assigned vehicle capacity is ${selectedTruck.maxWeightTons}T, but current payload is ${cargoWeightTons}T. Reduce weight or assign heavy-duty truck.`
                    : isMarginHealthy
                    ? `Freight quote of IDR ${(selectedRoute.baseQuoteIDR / 1000000).toFixed(1)}M comfortably covers fuel, driver allowance, and tolls (Cost: IDR ${(totalTripCostIDR / 1000000).toFixed(1)}M).`
                    : `Current fuel prices reduce trip margin below the 15% threshold. Adjust pricing or consolidate with backhaul cargo.`}
                </p>
              </div>
            </div>

            <div className="text-left md:text-right shrink-0">
              <span className="text-[13px] font-bold uppercase tracking-wider block opacity-80">
                Net Trip Profit
              </span>
              <span className="text-[28px] sm:text-[32px] font-bold font-mono">
                IDR {(grossProfitIDR / 1000000).toFixed(2)}M
              </span>
            </div>
          </div>
        </div>

        {/* Sequenced Route Manifest & Dispatch Action */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#D8E0EA] flex flex-col md:flex-row md:items-center justify-between gap-5 shadow-xs">
          <div className="space-y-2">
            <h4 className="font-bold text-[17px] text-[#111827]">
              Sequenced Driver Route Manifest
            </h4>
            <div className="space-y-1.5 text-[14px] text-[#374151] font-medium">
              {selectedRoute.stops.map((st) => (
                <div key={st} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#111827]" />
                  <span>{st}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="shrink-0 flex flex-col items-start md:items-end gap-2">
            <button
              type="button"
              disabled={isOverweight}
              onClick={handleDispatch}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-[14px] sm:text-[15px] font-bold transition-all cursor-pointer ${
                isOverweight
                  ? "bg-zinc-300 text-zinc-500 cursor-not-allowed"
                  : isDispatched
                  ? "bg-emerald-700 text-white shadow-xs"
                  : "bg-[#617594] text-white hover:bg-[#50637F] shadow-[0_4px_14px_rgba(97,117,148,0.25)] hover:shadow-[0_6px_18px_rgba(97,117,148,0.35)]"
              }`}
            >
              {isDispatched ? (
                <>
                  <CheckCircle2 className="w-4.5 h-4.5" />
                  <span>Dispatched to Driver Hendra P.</span>
                </>
              ) : (
                <>
                  <Send className="w-4.5 h-4.5" />
                  <span>Dispatch Manifest to Mobile</span>
                </>
              )}
            </button>

            {isDispatched && (
              <span className="text-[13px] text-emerald-800 font-bold">
                ✓ Manifest #MF-7709 synchronized to driver phone at {dispatchTime}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
