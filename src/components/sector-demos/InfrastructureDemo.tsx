import React, { useState } from "react";
import { Check, Sliders, RefreshCw, FileText, CheckCircle2, ShieldCheck, Layers, ChevronRight } from "lucide-react";

interface CorridorOption {
  id: string;
  name: string;
  sheetCode: string;
  baseLengthKm: number;
  valvesCount: number;
  trenchVolM3: number;
  jointCount: number;
}

export const InfrastructureDemo: React.FC = () => {
  // Corridor Sheets
  const corridors: CorridorOption[] = [
    {
      id: "c1",
      name: "KP 00+000 to KP 14+200 (Corridor Alpha)",
      sheetCode: "DWG-PL-001/A",
      baseLengthKm: 14.2,
      valvesCount: 4,
      trenchVolM3: 17750,
      jointCount: 1180,
    },
    {
      id: "c2",
      name: "KP 14+200 to KP 28+500 (River & Marsh)",
      sheetCode: "DWG-PL-002/B",
      baseLengthKm: 14.3,
      valvesCount: 6,
      trenchVolM3: 21450,
      jointCount: 1195,
    },
    {
      id: "c3",
      name: "KP 28+500 to KP 48+000 (City Gate Corridor)",
      sheetCode: "DWG-PL-003/C",
      baseLengthKm: 19.5,
      valvesCount: 8,
      trenchVolM3: 24375,
      jointCount: 1625,
    },
  ];

  const [selectedCorridor, setSelectedCorridor] = useState<CorridorOption>(corridors[0]);

  // Parameters
  const [pipeDiameter, setPipeDiameter] = useState<string>("12"); // inches
  const [wallThickness, setWallThickness] = useState<string>("12.7"); // mm
  const [steelGrade, setSteelGrade] = useState<string>("API 5L X65");
  
  // Layer toggles
  const [includeCenterline, setIncludeCenterline] = useState<boolean>(true);
  const [includeValves, setIncludeValves] = useState<boolean>(true);
  const [includeCoating, setIncludeCoating] = useState<boolean>(true);
  const [includeTrenching, setIncludeTrenching] = useState<boolean>(true);

  // Sign-off state
  const [isSignedOff, setIsSignedOff] = useState<boolean>(false);
  const [signOffTime, setSignOffTime] = useState<string>("");

  // Rate calculations
  // Unit weight formula approximation: W (kg/m) = 0.0246615 * (OD - WT) * WT
  const odMm = pipeDiameter === "12" ? 323.8 : pipeDiameter === "16" ? 406.4 : 609.6;
  const wtNum = parseFloat(wallThickness);
  const weightKgPerMeter = 0.0246615 * (odMm - wtNum) * wtNum;

  const totalMeters = includeCenterline ? selectedCorridor.baseLengthKm * 1000 : 0;
  const totalTonnage = (totalMeters * weightKgPerMeter) / 1000;

  // Pricing constants (in IDR)
  const steelRatePerTon = steelGrade === "API 5L X70" ? 36500000 : steelGrade === "API 5L X65" ? 34200000 : 31800000;
  const pipeMaterialCost = totalTonnage * steelRatePerTon;

  const valveUnitCost = pipeDiameter === "12" ? 185000000 : pipeDiameter === "16" ? 275000000 : 450000000;
  const valvesCost = includeValves ? selectedCorridor.valvesCount * valveUnitCost : 0;

  const coatingRatePerMeter = pipeDiameter === "12" ? 380000 : pipeDiameter === "16" ? 490000 : 720000;
  const coatingCost = includeCoating ? totalMeters * coatingRatePerMeter : 0;

  const trenchingRatePerM3 = 145000;
  const trenchingCost = includeTrenching ? selectedCorridor.trenchVolM3 * trenchingRatePerM3 : 0;

  const grandTotalIDR = pipeMaterialCost + valvesCost + coatingCost + trenchingCost;
  const grandTotalUSD = grandTotalIDR / 15800;

  const handleSignOff = () => {
    setIsSignedOff(!isSignedOff);
    if (!isSignedOff) {
      const now = new Date();
      setSignOffTime(`${now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} • HASH #CAD-${Math.floor(100000 + Math.random() * 900000)}`);
    }
  };

  return (
    <div className="bg-[#FAFBFD] rounded-2xl border border-[#D8E0EA] overflow-hidden">
      {/* Workspace Top Bar */}
      <div className="bg-[#111827] text-white px-6 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-3 text-[15px]">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <span className="font-bold tracking-tight text-[16px]">Interactive Workspace: CAD Pipeline Takeoff & Pricing</span>
        </div>
        <div className="flex items-center gap-3 text-[14px] text-zinc-300">
          <span className="hidden sm:inline font-medium">Engine: Formula Verifier v4.2</span>
          <span className="px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-100 border border-zinc-700 font-mono text-[13px] font-semibold">
            {selectedCorridor.sheetCode}
          </span>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        {/* Controls Grid: Corridor Selection & Engineering Parameters */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          {/* Corridor selector */}
          <div className="lg:col-span-4 flex flex-col gap-2.5">
            <label className="text-[14px] font-bold text-[#111827] uppercase tracking-wider">
              1. Select CAD Alignment Sheet
            </label>
            <div className="flex flex-col gap-2.5">
              {corridors.map((corridor) => {
                const isSelected = selectedCorridor.id === corridor.id;
                return (
                  <button
                    key={corridor.id}
                    type="button"
                    onClick={() => {
                      setSelectedCorridor(corridor);
                      setIsSignedOff(false);
                    }}
                    className={`text-left p-3.5 rounded-xl border text-[15px] transition-all cursor-pointer ${
                      isSelected
                        ? "bg-white border-[#111827] shadow-xs ring-1 ring-[#111827]"
                        : "bg-white/60 border-[#D8E0EA] hover:bg-white text-[#4B5563]"
                    }`}
                  >
                    <div className="font-bold text-[#111827] flex items-center justify-between">
                      <span>{corridor.name}</span>
                      <span className="font-mono text-[13px] font-semibold text-[#4B5563]">{corridor.baseLengthKm} km</span>
                    </div>
                    <div className="text-[13px] font-medium text-[#4B5563] mt-1">
                      {corridor.valvesCount} Valves • {corridor.jointCount} Field Joints
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Specs & Dimensions */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <label className="text-[14px] font-bold text-[#111827] uppercase tracking-wider">
              2. Engineering Pipe Specs
            </label>
            
            <div className="grid grid-cols-3 gap-2.5">
              <div>
                <span className="block text-[13px] text-[#374151] mb-1.5 font-bold">Diameter</span>
                <select
                  value={pipeDiameter}
                  onChange={(e) => {
                    setPipeDiameter(e.target.value);
                    setIsSignedOff(false);
                  }}
                  className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#D8E0EA] text-[15px] font-bold text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#111827] cursor-pointer"
                >
                  <option value="12">12" (DN300)</option>
                  <option value="16">16" (DN400)</option>
                  <option value="24">24" (DN600)</option>
                </select>
              </div>

              <div>
                <span className="block text-[13px] text-[#374151] mb-1.5 font-bold">Wall Thick</span>
                <select
                  value={wallThickness}
                  onChange={(e) => {
                    setWallThickness(e.target.value);
                    setIsSignedOff(false);
                  }}
                  className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#D8E0EA] text-[15px] font-bold text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#111827] cursor-pointer"
                >
                  <option value="9.5">9.5 mm</option>
                  <option value="12.7">12.7 mm</option>
                  <option value="15.1">15.1 mm</option>
                </select>
              </div>

              <div>
                <span className="block text-[13px] text-[#374151] mb-1.5 font-bold">Steel Spec</span>
                <select
                  value={steelGrade}
                  onChange={(e) => {
                    setSteelGrade(e.target.value);
                    setIsSignedOff(false);
                  }}
                  className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#D8E0EA] text-[15px] font-bold text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#111827] cursor-pointer"
                >
                  <option value="API 5L X52">API 5L X52</option>
                  <option value="API 5L X65">API 5L X65</option>
                  <option value="API 5L X70">API 5L X70</option>
                </select>
              </div>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-[#D8E0EA] text-[14px] text-[#374151] flex items-center justify-between">
              <span className="font-medium">Calculated Unit Weight:</span>
              <span className="font-bold text-[#111827] font-mono text-[15px]">{weightKgPerMeter.toFixed(2)} kg/m</span>
            </div>
          </div>

          {/* Layer Toggles */}
          <div className="lg:col-span-3 flex flex-col gap-2.5">
            <label className="text-[14px] font-bold text-[#111827] uppercase tracking-wider">
              3. CAD Drawing Layers
            </label>
            <div className="space-y-2 bg-white p-3.5 rounded-xl border border-[#D8E0EA]">
              <label className="flex items-center gap-2.5 text-[14px] text-[#111827] cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={includeCenterline}
                  onChange={(e) => setIncludeCenterline(e.target.checked)}
                  className="w-4 h-4 rounded text-[#111827] focus:ring-[#111827]"
                />
                <span className="font-semibold">Centerline Alignment</span>
              </label>
              <label className="flex items-center gap-2.5 text-[14px] text-[#111827] cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={includeValves}
                  onChange={(e) => setIncludeValves(e.target.checked)}
                  className="w-4 h-4 rounded text-[#111827] focus:ring-[#111827]"
                />
                <span className="font-semibold">Class 600 Valves</span>
              </label>
              <label className="flex items-center gap-2.5 text-[14px] text-[#111827] cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={includeCoating}
                  onChange={(e) => setIncludeCoating(e.target.checked)}
                  className="w-4 h-4 rounded text-[#111827] focus:ring-[#111827]"
                />
                <span className="font-semibold">3LPE Heat Wrap Coating</span>
              </label>
              <label className="flex items-center gap-2.5 text-[14px] text-[#111827] cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={includeTrenching}
                  onChange={(e) => setIncludeTrenching(e.target.checked)}
                  className="w-4 h-4 rounded text-[#111827] focus:ring-[#111827]"
                />
                <span className="font-semibold">Trench Bedding Layer</span>
              </label>
            </div>
          </div>
        </div>

        {/* Live Bill of Quantities (BOQ) Table */}
        <div className="bg-white rounded-2xl border border-[#D8E0EA] overflow-hidden mb-6 shadow-xs">
          <div className="px-5 sm:px-6 py-3.5 border-b border-[#E7EDF5] bg-[#FAFBFD] flex items-center justify-between">
            <span className="font-bold text-[15px] sm:text-[16px] text-[#111827]">
              Audited Bill of Quantities (Takeoff Output)
            </span>
            <span className="text-[13px] text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 font-bold">
              Live Verified Math
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-[14px] sm:text-[15px]">
              <thead className="bg-[#FAFBFD] text-[#374151] text-[12px] uppercase font-bold border-b border-[#E7EDF5] tracking-wider">
                <tr>
                  <th className="py-3 px-4 sm:px-5">Line Item Description</th>
                  <th className="py-3 px-4 sm:px-5">Layer Source</th>
                  <th className="py-3 px-4 sm:px-5 text-right">Extracted Qty</th>
                  <th className="py-3 px-4 sm:px-5 text-right">Unit Rate (IDR)</th>
                  <th className="py-3 px-4 sm:px-5 text-right">Subtotal (IDR)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E7EDF5]">
                <tr className={includeCenterline ? "" : "opacity-40"}>
                  <td className="py-3.5 px-4 sm:px-5 font-bold text-[#111827]">
                    Carbon Steel Line Pipe ({pipeDiameter}", WT {wallThickness}mm, {steelGrade})
                  </td>
                  <td className="py-3.5 px-4 sm:px-5 text-[#4B5563] font-mono text-[13px] font-semibold">LAY_CENTERLINE</td>
                  <td className="py-3.5 px-4 sm:px-5 text-right font-mono font-bold text-[#111827]">
                    {totalMeters.toLocaleString()} m ({totalTonnage.toFixed(1)} MT)
                  </td>
                  <td className="py-3.5 px-4 sm:px-5 text-right font-mono text-[13px] text-[#4B5563] font-medium">
                    {(steelRatePerTon / 1000).toLocaleString()}k / MT
                  </td>
                  <td className="py-3.5 px-4 sm:px-5 text-right font-bold text-[#111827] text-[15px]">
                    IDR {(pipeMaterialCost / 1000000000).toFixed(2)} B
                  </td>
                </tr>

                <tr className={includeValves ? "" : "opacity-40"}>
                  <td className="py-3.5 px-4 sm:px-5 font-bold text-[#111827]">
                    ANSI Class 600 Ball Valve Stations
                  </td>
                  <td className="py-3.5 px-4 sm:px-5 text-[#4B5563] font-mono text-[13px] font-semibold">LAY_VALVES_600</td>
                  <td className="py-3.5 px-4 sm:px-5 text-right font-mono font-bold text-[#111827]">
                    {includeValves ? selectedCorridor.valvesCount : 0} units
                  </td>
                  <td className="py-3.5 px-4 sm:px-5 text-right font-mono text-[13px] text-[#4B5563] font-medium">
                    {(valveUnitCost / 1000000).toLocaleString()} M / unit
                  </td>
                  <td className="py-3.5 px-4 sm:px-5 text-right font-bold text-[#111827] text-[15px]">
                    IDR {(valvesCost / 1000000000).toFixed(2)} B
                  </td>
                </tr>

                <tr className={includeCoating ? "" : "opacity-40"}>
                  <td className="py-3.5 px-4 sm:px-5 font-bold text-[#111827]">
                    3LPE Anti-Corrosion Coating & Field Wrap
                  </td>
                  <td className="py-3.5 px-4 sm:px-5 text-[#4B5563] font-mono text-[13px] font-semibold">LAY_COAT_SPEC</td>
                  <td className="py-3.5 px-4 sm:px-5 text-right font-mono font-bold text-[#111827]">
                    {includeCoating ? totalMeters.toLocaleString() : 0} m
                  </td>
                  <td className="py-3.5 px-4 sm:px-5 text-right font-mono text-[13px] text-[#4B5563] font-medium">
                    {coatingRatePerMeter.toLocaleString()} / m
                  </td>
                  <td className="py-3.5 px-4 sm:px-5 text-right font-bold text-[#111827] text-[15px]">
                    IDR {(coatingCost / 1000000000).toFixed(2)} B
                  </td>
                </tr>

                <tr className={includeTrenching ? "" : "opacity-40"}>
                  <td className="py-3.5 px-4 sm:px-5 font-bold text-[#111827]">
                    Corridor Trench Excavation, Bedding & Reinstatement
                  </td>
                  <td className="py-3.5 px-4 sm:px-5 text-[#4B5563] font-mono text-[13px] font-semibold">LAY_SURVEY_TRENCH</td>
                  <td className="py-3.5 px-4 sm:px-5 text-right font-mono font-bold text-[#111827]">
                    {includeTrenching ? selectedCorridor.trenchVolM3.toLocaleString() : 0} m³
                  </td>
                  <td className="py-3.5 px-4 sm:px-5 text-right font-mono text-[13px] text-[#4B5563] font-medium">
                    {trenchingRatePerM3.toLocaleString()} / m³
                  </td>
                  <td className="py-3.5 px-4 sm:px-5 text-right font-bold text-[#111827] text-[15px]">
                    IDR {(trenchingCost / 1000000000).toFixed(2)} B
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Summary & Sign-off Action Bar */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#D8E0EA] flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div>
            <span className="text-[13px] font-bold uppercase tracking-wider text-[#4B5563] block mb-1">
              Total Audited Tender Estimate
            </span>
            <div className="flex flex-wrap items-baseline gap-2.5">
              <span className="text-[30px] sm:text-[36px] font-bold text-[#111827] tracking-tight leading-none">
                IDR {(grandTotalIDR / 1000000000).toFixed(2)} Billion
              </span>
              <span className="text-[16px] text-[#4B5563] font-semibold">
                (~${grandTotalUSD.toLocaleString("en-US", { maximumFractionDigits: 0 })} USD)
              </span>
            </div>
            <p className="text-[13px] text-[#4B5563] font-medium mt-1.5">
              Extracted from {selectedCorridor.sheetCode} • Calculated in 0.12 seconds
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              type="button"
              onClick={handleSignOff}
              className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-[14px] sm:text-[15px] font-bold transition-all cursor-pointer ${
                isSignedOff
                  ? "bg-emerald-700 text-white hover:bg-emerald-800 shadow-xs"
                  : "bg-[#617594] text-white hover:bg-[#50637F] shadow-[0_4px_14px_rgba(97,117,148,0.25)] hover:shadow-[0_6px_18px_rgba(97,117,148,0.35)]"
              }`}
            >
              {isSignedOff ? (
                <>
                  <CheckCircle2 className="w-4.5 h-4.5" />
                  <span>Tender Signed Off by Chief Estimator</span>
                </>
              ) : (
                <>
                  <ShieldCheck className="w-4.5 h-4.5" />
                  <span>Simulate Chief Estimator Sign-Off</span>
                </>
              )}
            </button>
          </div>
        </div>

        {isSignedOff && (
          <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-[14px] font-medium flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="flex items-center gap-2.5">
              <Check className="w-5 h-5 text-emerald-700 stroke-[3] shrink-0" />
              <span>Signed-off and locked into tender archive by Ir. H. Prabowo</span>
            </span>
            <span className="font-mono text-[13px] text-emerald-800 font-bold">{signOffTime}</span>
          </div>
        )}
      </div>
    </div>
  );
};
