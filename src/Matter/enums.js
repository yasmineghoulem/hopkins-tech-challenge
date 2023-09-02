import {
  format,
} from 'date-fns';


export const AREAS_OF_LAW = {
  ALL: {
    label: 'Alle',
    value: '',
  },
  LABOR: {
    label: 'Arbeitsrecht',
    value: 'Arbeitsrecht',
  },
  TAX: {
    label: 'Steuerrecht',
    value: 'Steuerrecht',
  },
  SOCIAL: {
    label: 'Sozialrecht',
    value: 'Sozialrecht',
  },
};

export const MATTER_URL = process.env.REACT_APP_MATTER_URL;

export const AREAS_OF_LAW_VALUES = Object.values(AREAS_OF_LAW);

export const COLUMNS = [{
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Area of Law',
    dataIndex: 'areaOfLaw',
    key: 'areaOfLaw',
  },
  {
    title: 'Created At',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (createdAt) => formatCreatedAt(createdAt),
  },
];


// Format the date to a human-readable format
const formatCreatedAt = (createdAt) => {
  return format(new Date(createdAt), 'MMM dd, yyyy HH:mm ');
};