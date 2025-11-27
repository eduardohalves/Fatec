export class Meteo {
  constructor(
    public Date: string,
    public Time: string,
    public Temp_C: number,
    public Hum_pct: number,
    public Press_Bar: number,
    public TempCabine_C: number,
    public Charge: number,
    public SR_Wm2: number,
    public WindPeak_ms: number,
    public WindSpeed_Inst: number,
    public WindSpeed_Avg: number,
    public WindDir_Inst: number,
    public WindDir_Avg: number
  ) {}
}
