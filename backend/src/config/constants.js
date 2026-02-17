// Application constants - roles, request types, statuses

module.exports = {
  // User Roles
  ROLES: {
    RECEPTION: 'RECEPTION',
    ROOM: 'ROOM'
  },

  // Request Types
  REQUEST_TYPES: {
    COMPLAINT: 'COMPLAINT',
    MAINTENANCE: 'MAINTENANCE',
    HOUSEKEEPING: 'HOUSEKEEPING'
  },

  // Request Statuses
  REQUEST_STATUSES: {
    OPEN: 'OPEN',
    IN_PROGRESS: 'IN_PROGRESS',
    COMPLETED: 'COMPLETED',
    CANCELLED: 'CANCELLED'
  },

  // Stay Statuses
  STAY_STATUSES: {
    CHECKED_IN: 'CHECKED_IN',
    CHECKED_OUT: 'CHECKED_OUT'
  }
};
