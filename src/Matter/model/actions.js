// just an example, feel free to use your own constants
export const MATTER = {
  FETCH_LIST: {
    REQUEST: 'MATTER.FETCH_LIST.REQUEST',
    SUCCESS: 'MATTER.FETCH_LIST.SUCCESS',
    ERROR: 'MATTER.FETCH_LIST.ERROR',
  },
};

// example of an action creator
export const fetchMatterList = () => ({
  type: MATTER.FETCH_LIST.REQUEST,
});

// write your actions here
