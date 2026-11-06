export interface ModuleData {
  id: string;
  week: string;
  titleTh: string;
  titleEn: string;
  description: string;
  clo: string;
  hoursT: number;
  hoursP: number;
  topics: string[];
  labTitle: string;
  labCount: number;
  reviewSheet: string;
  icon: string;
  color: string;
}

// 10 หน่วยเรียน ตามเอกสารประกอบการสอน EN-132-003 (สัปดาห์ ชั่วโมง ท/ป ตามกำหนดการสอน)
export const modules: ModuleData[] = [
  {
    id: "01",
    week: "1",
    titleTh: "ความรู้เบื้องต้นเกี่ยวกับเซนเซอร์และทรานสดิวเซอร์",
    titleEn: "Introduction to Sensors and Transducers",
    description:
      "เซนเซอร์ (Sensor) คืออุปกรณ์ที่ทำหน้าที่ตรวจจับปริมาณทางกายภาพ เช่น อุณหภูมิ แสง แรง การเคลื่อนที่ การไหล และปฏิกิริยาทางเคมี แล้วแปลงให้อยู่ในรูปสัญญาณไฟฟ้าที่สามารถนำไปประมวลผลต่อได้ ส่วนทรานสดิวเซอร์ (Transducer) …",
    clo: "CLO2, CLO3",
    hoursT: 2,
    hoursP: 2,
    topics: ["1.1 นิยาม หน้าที่ และชนิดของเซนเซอร์และทรานสดิวเซอร์", "1.2 การแปลงสัญญาณและการเลือกใช้เซนเซอร์", "1.3 การสำรวจและจำแนกประเภทเซนเซอร์ในชุดฝึกปฏิบัติการเมคคาทรอนิกส์"],
    labTitle: "การสำรวจและจำแนกประเภทเซนเซอร์ในชุดฝึกปฏิบัติการ เมคคาทรอนิกส์",
    labCount: 1,
    reviewSheet: "review_sheet_01.html",
    icon: "Radar",
    color: "slate",
  },
  {
    id: "02",
    week: "2",
    titleTh: "เซนเซอร์รับสัญญาณความร้อน",
    titleEn: "Thermal Sensors",
    description:
      "เซนเซอร์รับสัญญาณความร้อน (Thermal Sensor) เป็นอุปกรณ์ที่ใช้ตรวจวัดอุณหภูมิโดยอาศัยหลักการทางฟิสิกส์ที่แตกต่างกัน แบ่งเป็น 3 กลุ่มหลัก ได้แก่ เทอร์โมคัปเปิล (Thermocouple) ซึ่งอาศัยปรากฏการณ์ซีเบค (Seebeck Effect) …",
    clo: "CLO2, CLO3",
    hoursT: 2,
    hoursP: 2,
    topics: ["2.1 ภาพรวมและเทอร์โมคัปเปิล", "2.2 RTD เทอร์มิสเตอร์ เซนเซอร์อินฟราเรด และวงจรเชื่อมต่อ", "2.3 การวัดและเปรียบเทียบอุณหภูมิด้วยเซนเซอร์รับสัญญาณความร้อน"],
    labTitle: "การวัดและเปรียบเทียบอุณหภูมิด้วยเซนเซอร์รับสัญญาณความร้อน",
    labCount: 1,
    reviewSheet: "review_sheet_02.html",
    icon: "Thermometer",
    color: "blue",
  },
  {
    id: "03",
    week: "3",
    titleTh: "เซนเซอร์รับสัญญาณทางแสง",
    titleEn: "Optical Sensors",
    description:
      "เซนเซอร์รับสัญญาณทางแสง (Optical Sensor) เป็นเซนเซอร์ที่ตรวจจับปริมาณแสงหรือการเปลี่ยนแปลงของแสงแล้วแปลงเป็นสัญญาณไฟฟ้า แบ่งได้เป็น 3 กลุ่มหลักตามหน้าที่การใช้งาน ได้แก่ …",
    clo: "CLO2, CLO3",
    hoursT: 2,
    hoursP: 2,
    topics: ["3.1 ภาพรวม โฟโต้ไดโอด โฟโต้ทรานซิสเตอร์ และ LDR", "3.2 ตัวเข้ารหัสตำแหน่งเชิงแสงและวงจรเชื่อมต่อ", "3.3 การวัดความเข้มแสงด้วย LDR ผ่านบอร์ด ESP32"],
    labTitle: "การวัดความเข้มแสงด้วย LDR ผ่านบอร์ด ESP32",
    labCount: 1,
    reviewSheet: "review_sheet_03.html",
    icon: "Sun",
    color: "green",
  },
  {
    id: "04",
    week: "4",
    titleTh: "เซนเซอร์รับสัญญาณแรงและความดัน",
    titleEn: "Force and Pressure Sensors",
    description:
      "เซนเซอร์รับสัญญาณแรงและความดัน (Force and Pressure Sensor) เป็นกลุ่มเซนเซอร์ที่แปลงแรงกล ความเครียด หรือความดัน ให้เป็นสัญญาณไฟฟ้าที่วัดค่าได้ หัวใจสำคัญของเซนเซอร์กลุ่มนี้คือ Strain Gauge …",
    clo: "CLO2, CLO3",
    hoursT: 2,
    hoursP: 2,
    topics: ["4.1 ภาพรวมและสเตรนเกจ", "4.2 โหลดเซลล์ วงจรบริดจ์วีตสโตน และเซนเซอร์วัดความดัน", "4.3 การวัดน้ำหนักด้วยโหลดเซลล์และโมดูล HX711"],
    labTitle: "การวัดน้ำหนักด้วยโหลดเซลล์และโมดูล HX711",
    labCount: 1,
    reviewSheet: "review_sheet_04.html",
    icon: "Gauge",
    color: "yellow",
  },
  {
    id: "05",
    week: "5",
    titleTh: "เซนเซอร์รับสัญญาณการเคลื่อนที่",
    titleEn: "Motion Sensors",
    description:
      "เซนเซอร์รับสัญญาณการเคลื่อนที่ (Motion Sensor) เป็นกลุ่มเซนเซอร์ที่ตรวจจับความเร่ง ความเร็วเชิงมุม ระยะใกล้ หรือความเร็วรอบของวัตถุ แล้วแปลงเป็นสัญญาณไฟฟ้าที่วัดค่าได้ กลุ่มแรกคือ Accelerometer และ Gyroscope …",
    clo: "CLO2, CLO3",
    hoursT: 2,
    hoursP: 2,
    topics: ["5.1 ภาพรวม แอคเซเลอโรมิเตอร์ และไจโรสโคปแบบ MEMS", "5.2 เซนเซอร์ตรวจจับความใกล้ ตัวเข้ารหัสมุมหมุน และวงจรเชื่อมต่อ", "5.3 การวัดค่าความเร่งและมุมเอียงด้วยโมดูล MPU6050"],
    labTitle: "การวัดค่าความเร่งและมุมเอียงด้วยโมดูล MPU6050",
    labCount: 1,
    reviewSheet: "review_sheet_05.html",
    icon: "Move",
    color: "red",
  },
  {
    id: "06",
    week: "6",
    titleTh: "เซนเซอร์รับสัญญาณการไหลและระดับของไหล",
    titleEn: "Flow and Level Sensors",
    description:
      "เซนเซอร์รับสัญญาณการไหลและระดับของไหล (Flow and Level Sensor) เป็นกลุ่มเซนเซอร์ที่ใช้ตรวจวัดปริมาณการไหลและระดับของของไหลในระบบท่อและถังเก็บ ซึ่งมีความสำคัญอย่างยิ่งในระบบควบคุมกระบวนการผลิตทางอุตสาหกรรม เซนเซอร์วัดอัตราการไหล …",
    clo: "CLO2, CLO3",
    hoursT: 2,
    hoursP: 2,
    topics: ["6.1 ภาพรวมและเซนเซอร์วัดอัตราการไหล", "6.2 เซนเซอร์วัดระดับของไหลและวงจรเชื่อมต่อ", "6.3 การวัดอัตราการไหลของน้ำด้วยเซนเซอร์ YF-S201"],
    labTitle: "การวัดอัตราการไหลของน้ำด้วยเซนเซอร์ YF-S201",
    labCount: 1,
    reviewSheet: "review_sheet_06.html",
    icon: "Droplets",
    color: "purple",
  },
  {
    id: "07",
    week: "7",
    titleTh: "เซนเซอร์ตรวจจับปฏิกิริยาทางเคมี",
    titleEn: "Chemical Sensors",
    description:
      "เซนเซอร์ตรวจจับปฏิกิริยาทางเคมีแปลงปริมาณทางเคมี (ความเป็นกรด-ด่าง, การนำไฟฟ้า, ความเข้มข้นแก๊ส, ความชื้น) เป็นสัญญาณไฟฟ้าโดยอาศัยปฏิกิริยาเคมีไฟฟ้าหรือการเปลี่ยนแปลงคุณสมบัติทางไฟฟ้าของวัสดุตรวจจับเมื่อสัมผัสสารเป้าหมาย …",
    clo: "CLO2, CLO3",
    hoursT: 2,
    hoursP: 2,
    topics: ["7.1 ภาพรวม เซนเซอร์วัดค่า pH และเซนเซอร์วัดค่าการนำไฟฟ้า", "7.2 เซนเซอร์ตรวจจับแก๊ส เซนเซอร์วัดความชื้น และวงจรเชื่อมต่อ", "7.3 การตรวจวัดความเข้มข้นแก๊สด้วยเซนเซอร์ MQ-2"],
    labTitle: "การตรวจวัดความเข้มข้นแก๊สด้วยเซนเซอร์ MQ-2",
    labCount: 1,
    reviewSheet: "review_sheet_07.html",
    icon: "FlaskConical",
    color: "teal",
  },
  {
    id: "08",
    week: "9–10",
    titleTh: "วงจรปรับแต่งสัญญาณสำหรับเซนเซอร์",
    titleEn: "Signal Conditioning Circuits for Sensors",
    description:
      "วงจรปรับแต่งสัญญาณ (Signal Conditioning Circuit) ทำหน้าที่ขยาย กรอง และปรับระดับสัญญาณอ่อนหรือมีสัญญาณรบกวนจากเซนเซอร์ให้อยู่ในรูปแบบและช่วงที่เหมาะสมก่อนป้อนเข้าวงจรแปลงสัญญาณอนาล็อกเป็นดิจิทัล (ADC) ของไมโครคอนโทรลเลอร์ …",
    clo: "CLO2, CLO3",
    hoursT: 4,
    hoursP: 4,
    topics: ["8.1 ภาพรวม ออปแอมป์ และวงจรขยายสัญญาณแบบไม่กลับเฟส", "8.2 การขยายสัญญาณจากเซนเซอร์ LDR ด้วยวงจรขยายแบบไม่กลับเฟส", "8.3 วงจรขยายแบบอินสทรูเมนเทชัน วงจรกรองสัญญาณ และการจับคู่อิมพีแดนซ์", "8.4 การกรองสัญญาณรบกวนจากเซนเซอร์ด้วยวงจรกรองความถี่ต่ำผ่าน"],
    labTitle: "การขยายสัญญาณจากเซนเซอร์ LDR ด้วยวงจรขยายแบบไม่กลับเฟส / การกรองสัญญาณรบกวนจากเซนเซอร์ด้วยวงจรกรองความถี่ต่ำผ่าน",
    labCount: 2,
    reviewSheet: "review_sheet_08.html",
    icon: "Activity",
    color: "indigo",
  },
  {
    id: "09",
    week: "11–14",
    titleTh: "เซนเซอร์อัจฉริยะ การเชื่อมต่อ IoT และการบูรณาการระบบเซนเซอร์",
    titleEn: "Smart Sensors, IoT Connectivity and System Integration",
    description:
      "สมาร์ทเซนเซอร์ (Smart Sensor) คือเซนเซอร์ที่รวมองค์ประกอบตรวจจับ วงจรปรับแต่งสัญญาณ วงจรแปลงสัญญาณอนาล็อกเป็นดิจิทัล และหน่วยประมวลผลไว้ในตัว ให้เอาต์พุตเป็นข้อมูลดิจิทัลผ่านมาตรฐานการสื่อสาร เช่น I2C, SPI หรือ UART …",
    clo: "CLO2, CLO3",
    hoursT: 8,
    hoursP: 8,
    topics: ["9.1 แนวคิดสมาร์ทเซนเซอร์และมาตรฐานการสื่อสารดิจิทัล", "9.2 การอ่านค่าสมาร์ทเซนเซอร์ผ่านบัส I2C ด้วย ESP32", "9.3 สถาปัตยกรรมระบบ IoT และโปรโตคอล MQTT", "9.4 การรับส่งข้อมูลเซนเซอร์ BME280 ผ่านโปรโตคอล MQTT", "9.5 หลักการออกแบบระบบเซนเซอร์แบบบูรณาการ", "9.6 การบูรณาการเซนเซอร์หลายชนิดเข้ากับ ESP32", "9.7 การหลอมรวมข้อมูลเซนเซอร์และการประยุกต์ใช้งานระบบบูรณาการ", "9.8 การหลอมรวมข้อมูลเซนเซอร์เพื่อควบคุมอุปกรณ์อัตโนมัติ"],
    labTitle: "การอ่านค่าสมาร์ทเซนเซอร์ผ่านบัส I2C ด้วย ESP32 / การรับส่งข้อมูลเซนเซอร์ BME280 ผ่านโปรโตคอล MQTT / การบูรณาการเซนเซอร์หลายชนิดเข้ากับ ESP32 / การหลอมรวมข้อมูลเซนเซอร์เพื่อควบคุมอุปกรณ์อัตโนมัติ",
    labCount: 4,
    reviewSheet: "review_sheet_09.html",
    icon: "Wifi",
    color: "orange",
  },
  {
    id: "10",
    week: "15–16",
    titleTh: "เซนเซอร์และทรานสดิวเซอร์ในงานอุตสาหกรรม 4.0",
    titleEn: "Sensors and Transducers in Industry 4.0",
    description:
      "อุตสาหกรรม 4.0 คือการนำเทคโนโลยีดิจิทัล เซนเซอร์ และการเชื่อมต่อเครือข่ายมาบูรณาการเข้ากับกระบวนการผลิต เพื่อให้เครื่องจักรและระบบต่างๆ สามารถเก็บข้อมูล วิเคราะห์ และตัดสินใจได้อย่างชาญฉลาด …",
    clo: "CLO2, CLO3",
    hoursT: 4,
    hoursP: 4,
    topics: ["10.1 แนวคิดอุตสาหกรรม 4.0 และอินเทอร์เน็ตของสรรพสิ่งในภาคอุตสาหกรรม", "10.2 การสร้างระบบเฝ้าติดตามสถานะเครื่องจักรแบบ IIoT", "10.3 การบำรุงรักษาเชิงพยากรณ์และมาตรฐานการสื่อสารในงานอุตสาหกรรม", "10.4 ระบบสาธิตการบำรุงรักษาเชิงพยากรณ์ด้วย ESP32"],
    labTitle: "การสร้างระบบเฝ้าติดตามสถานะเครื่องจักรแบบ IIoT / ระบบสาธิตการบำรุงรักษาเชิงพยากรณ์ด้วย ESP32",
    labCount: 2,
    reviewSheet: "review_sheet_10.html",
    icon: "Factory",
    color: "rose",
  },
];

export function getModuleById(id: string): ModuleData | undefined {
  return modules.find((m) => m.id === id);
}

export const colorMap: Record<string, { bg: string; text: string; border: string; accent: string }> = {
  slate: { bg: "bg-slate-100 dark:bg-slate-800/40", text: "text-slate-700 dark:text-slate-300", border: "border-slate-200 dark:border-slate-700", accent: "from-slate-500 to-gray-500" },
  blue: { bg: "bg-blue-50 dark:bg-blue-900/20", text: "text-blue-700 dark:text-blue-300", border: "border-blue-200 dark:border-blue-800", accent: "from-blue-500 to-cyan-500" },
  green: { bg: "bg-green-50 dark:bg-green-900/20", text: "text-green-700 dark:text-green-300", border: "border-green-200 dark:border-green-800", accent: "from-green-500 to-emerald-500" },
  yellow: { bg: "bg-yellow-50 dark:bg-yellow-900/20", text: "text-yellow-700 dark:text-yellow-300", border: "border-yellow-200 dark:border-yellow-800", accent: "from-yellow-500 to-orange-500" },
  red: { bg: "bg-red-50 dark:bg-red-900/20", text: "text-red-700 dark:text-red-300", border: "border-red-200 dark:border-red-800", accent: "from-red-500 to-pink-500" },
  purple: { bg: "bg-purple-50 dark:bg-purple-900/20", text: "text-purple-700 dark:text-purple-300", border: "border-purple-200 dark:border-purple-800", accent: "from-purple-500 to-violet-500" },
  teal: { bg: "bg-teal-50 dark:bg-teal-900/20", text: "text-teal-700 dark:text-teal-300", border: "border-teal-200 dark:border-teal-800", accent: "from-teal-500 to-cyan-500" },
  indigo: { bg: "bg-indigo-50 dark:bg-indigo-900/20", text: "text-indigo-700 dark:text-indigo-300", border: "border-indigo-200 dark:border-indigo-800", accent: "from-indigo-500 to-blue-500" },
  orange: { bg: "bg-orange-50 dark:bg-orange-900/20", text: "text-orange-700 dark:text-orange-300", border: "border-orange-200 dark:border-orange-800", accent: "from-orange-500 to-amber-500" },
  rose: { bg: "bg-rose-50 dark:bg-rose-900/20", text: "text-rose-700 dark:text-rose-300", border: "border-rose-200 dark:border-rose-800", accent: "from-rose-500 to-pink-500" },
};
