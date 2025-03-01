import { ColumnType } from 'antd/es/table';
import { UserCategory } from '../enums/user';
import { SlabType } from '../types/slabType';

const CostumUIKeys = ['location', 'rebarRenderer', 'type', 'weight'];
const PartTypeKeys = [
  'id',
  'planReference',
  'location_x',
  'location_y',
  'location_z',
  'strength',
  'dimensions_l',
  'dimensions_w',
  'dimensions_h',
  'liveload',
  'typeOfElement',
  'rebarDiameterTop',
  'rebarAmountTop',
  'rebarDiameterBottom',
  'rebarAmountBottom',
];

export const AllAvailableColumns = [...CostumUIKeys, ...PartTypeKeys];

const local: Record<string, string> = {
  id: 'Id',
  planReference: 'Plan Reference',
  type: 'Type',
  location_x: 'X Coordinate',
  location_y: 'Y Coordinate',
  location_z: 'Z Coordinate',
  strength: 'Strength',
  dimensions_l: 'Length',
  dimensions_w: 'Width',
  dimensions_h: 'Height',
  weight: 'Weight',
  liveload: 'Live Load',
  typeOfElement: 'Element Type',
  rebarDiameterTop: 'Rebar Diameter Top',
  rebarAmountTop: 'Rebar Amount Top',
  rebarDiameterBottom: 'Rebar Diameter Bottom',
  rebarAmountBottom: 'Rebar Diameter Bottom',
  location: 'Location',
  rebarRenderer: 'Rebar',
};

const columnTypeMap: { [attribute: string]: ColumnType<SlabType> } = {
  ...Object.fromEntries(
    PartTypeKeys.map((dataIndex) => [
      dataIndex,
      {
        title: local[dataIndex],
        dataIndex,
        key: dataIndex,
      },
    ])
  ),
  location: {
    title: local['location'],
    key: 'location',
    render: (_, element) => `(${element.location_x.toFixed(2)}, ${element.location_y.toFixed(2)}, ${element.location_z.toFixed(2)})`,
  },
  rebarRenderer: {
    title: local['rebarRenderer'],
    key: 'rebarRenderer',
    render: (_, element) =>
      `${element.rebarAmountBottom.toFixed(0)}ø${element.rebarDiameterBottom.toFixed(1)} Bottom, ${element.rebarAmountTop.toFixed(
        0
      )}ø${element.rebarDiameterTop.toFixed(1)} Top`,
  },
  type: {
    title: local['title'],
    key: 'title',
    render: (_, element) => '',
  },
  weight: {},
};

const architect = CostumUIKeys;

export const columns: Record<UserCategory, ColumnType<SlabType>[]> = {
  [UserCategory.Architect]: architect.map((s) => columnTypeMap[s]),
  [UserCategory.Engineer]: [],
  [UserCategory.Client]: [],
  [UserCategory.Contracter]: [],
};
