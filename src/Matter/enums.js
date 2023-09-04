import { format } from 'date-fns';

// Define a constant object representing different areas of law
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

// Get the Matter URL from environment variables
export const MATTER_URL = process.env.REACT_APP_MATTER_URL;

// Create an array of values from the AREAS_OF_LAW object
export const AREAS_OF_LAW_VALUES = Object.values(AREAS_OF_LAW);

// Format the date to a human-readable format
export const formatCreatedAt = (createdAt) => {
  return format(new Date(createdAt), 'MMM dd, yyyy HH:mm ');
};

// Define columns for a the matter list table
export const COLUMNS = [
  {
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

// Define columns for a details table
export const DETAILSCOLUMNS = [
  {
    title: 'Task Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
];
