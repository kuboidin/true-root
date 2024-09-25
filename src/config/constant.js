const constant = {
  ENV: {
    PRODUCTION: 'production',
    DEVELOPMENT: 'development',
    LOCAL: 'local'
  },
  RS: '₹',
  NONE: 'none',
  STR_EMPTY: "",
  NULL: null,
  SEX_MALE: 'male',
  SEX_FEMALE: 'female',
  DELETED: true,
  NOT_DELETED: false,
  NOTIFICATION_NOT_SENT: false,
  NOTIFICATION_SENT: true,
  COUNTRY: {
    INDIA: 'India',
    OTHER: 'Other'
  },
  MONTH_NAME: {
    JAN: 'January',
    FEB: 'February',
    MAR: 'March',
    APR: 'April',
    MAY: 'May',
    JUN: 'June',
    JUL: 'July',
    AUG: 'August',
    SEP: 'September',
    OCT: 'October',
    NOV: 'November',
    DEC: 'December'
  },
  MONTH: {
    JAN: 1,
    FEB: 2,
    MAR: 3,
    APR: 4,
    MAY: 5,
    JUN: 6,
    JUL: 7,
    AUG: 8,
    SEP: 9,
    OCT: 10,
    NOV: 11,
    DEC: 12
  },
  DAYS: {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday'
  },
  MONTHS_NUM: {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
  },
  WEEK_DAYS: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  WEEKENDS: [6, 7],
  TICKET_TYPE: {
    SUPPORT: 'support',
    FEATURE_SUGGESTION: 'feature_suggestion',
    ISSUE: 'issue',
    CUSTOM_QUOTE: 'custom_quote'
  },
  NOTIFICATION_TYPE: {
    WHOLE_SCHOOL: 'whole_school',
    STUDENTS: 'students',
    CLASSES: 'classes',
    TEACHERS: 'teachers'
  },
  NOTIFICATION_STATUS: {
    PENDING: 'pending',
    PROCESSING: 'processing',
    SUCCESS: 'success',
    FAILED: 'failed',
    CANCELLED: 'cancelled'
  },
  NOTIFICATION_SENT_BY: {
    SYSTEM: 'system',
    USER: 'user',
  },
};

export default constant;
