/**
 * Copyright 2018 jordanalphonso.net
 * 
 * Unauthorized copying of this file, via any medium
 * is strictly prohibited.
 *
 * ---------------------------------------------------------
 * @author Jordan Alphonso
 * created: 06/13/2018 01:43:27
 * file: src/boot/initialState.ts
 * ---------------------------------------------------------
 */
const initialState: any = () => ({
  sitecore: {
    context: {
      pageEditing: false,
      language: 'en',
    },
    route: {
      placeholders: {},
    },
  },
  viewBag: {},
});

// allows consumers to mutate the object without interfering with other imports
export default initialState;
