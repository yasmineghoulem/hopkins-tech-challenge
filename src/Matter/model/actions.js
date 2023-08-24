export const MATTERS = {
  FETCH: {
    REQUEST: 'MATTERS.FETCH.REQUEST',
    SUCCESS: 'MATTERS.FETCH.SUCCESS',
    ERROR: 'MATTERS.FETCH.ERROR',
  },
};

// example of an action creator
export const fetchMatters = () => ({
  type: MATTERS.FETCH.REQUEST,
});

// write your actions here
