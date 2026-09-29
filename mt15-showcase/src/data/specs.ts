export interface SpecRow {
  label: string;
  value: string;
}

export interface SpecGroup {
  title: string;
  rows: SpecRow[];
}

/**
 * Figures as published by Yamaha Motor India for the MT-15 V2 (BS6).
 * Always re-verify against the current official spec sheet before shipping.
 */
export const specGroups: SpecGroup[] = [
  {
    title: 'Engine',
    rows: [
      { label: 'Type', value: '155 cc, liquid-cooled, 4-stroke, SOHC, 4-valve' },
      { label: 'Displacement', value: '155 cc' },
      { label: 'Maximum power', value: '18.4 PS @ 10,000 rpm' },
      { label: 'Maximum torque', value: '14.1 Nm @ 7,500 rpm' },
      { label: 'Bore × stroke', value: '58.0 × 58.7 mm' },
      { label: 'Compression ratio', value: '11.6 : 1' },
      { label: 'Valve train', value: 'VVA (Variable Valve Actuation)' },
      { label: 'Clutch', value: 'Assist & Slipper Clutch' },
    ],
  },
  {
    title: 'Dimensions',
    rows: [
      { label: 'Kerb weight', value: '141 kg' },
      { label: 'Seat height', value: '810 mm' },
      { label: 'Wheelbase', value: '1,325 mm' },
      { label: 'Ground clearance', value: '170 mm' },
      { label: 'Overall (L × W × H)', value: '2,015 × 800 × 1,070 mm' },
    ],
  },
  {
    title: 'Chassis',
    rows: [
      { label: 'Frame', value: 'Deltabox' },
      { label: 'Front brake', value: '282 mm hydraulic disc · single-channel ABS' },
      { label: 'Rear brake', value: '220 mm hydraulic disc' },
    ],
  },
  {
    title: 'Suspension',
    rows: [
      { label: 'Front', value: '37 mm USD fork' },
      { label: 'Rear', value: 'Linked-type Monocross suspension' },
    ],
  },
  {
    title: 'Tyres',
    rows: [
      { label: 'Front', value: '110/70 R17' },
      { label: 'Rear', value: '140/70 R17' },
    ],
  },
  {
    title: 'Electrical',
    rows: [
      { label: 'Headlight', value: 'Bi-functional LED projector' },
      { label: 'Display', value: 'LCD multi-function with Y-Connect' },
    ],
  },
  {
    title: 'Capacity',
    rows: [{ label: 'Fuel tank', value: '10 L' }],
  },
];
