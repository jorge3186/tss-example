/**
 * Copyright 2018 jordanalphonso.net
 * 
 * Unauthorized copying of this file, via any medium
 * is strictly prohibited.
 *
 * ---------------------------------------------------------
 * @author Jordan Alphonso
 * created: 06/13/2018 01:45:11
 * file: src/boot/SitecoreContentService.js
 * ---------------------------------------------------------
 */
import { dataApi } from '@sitecore-jss/sitecore-jss-react';

// Globals
declare const __SC_API_KEY__: string;
declare const __SC_API_HOST__: string;
declare const __TRANSLATION_PATH__: string;

const { fetchRouteData, fetchPlaceholderData, fetchItemData } = dataApi;

const getFetchOptions = (language: string, options: any = {}) => {
  const { params = {}, ...requestOptions } = options;
  if (language) {
    params.sc_lang = language;
  }
  params.sc_apikey = __SC_API_KEY__;

  return {
    layoutServiceConfig: {
      host: `${__SC_API_HOST__}`,
    },
    querystringParams: { ...params },
    requestConfig: { ...requestOptions },
  };
};

class SitecoreContentService {

  public initialRouteData: any;

  getRouteData(route, language?, options = {}) {
    return this.getInitialRouteData()
      .catch(() => {
        const fetchOptions = getFetchOptions(language, options);
        return fetchRouteData(route, fetchOptions);
      })
      .catch(() => null);
  }

  getPlaceholderData(placeholderName, route, language, options = {}) {
    const fetchOptions = getFetchOptions(language, options);
    return fetchPlaceholderData(placeholderName, route, fetchOptions);
  }

  getItemData(itemPath, language, options = {}) {
    const { layoutServiceConfig, ...otherOptions } = getFetchOptions(language, options);
    const fetchOptions = {
      contentServiceConfig: layoutServiceConfig,
      ...otherOptions,
    };

    return fetchItemData(itemPath, fetchOptions);
  }

  getTranslationPath() {
    const apiKeyParam = typeof __SC_API_KEY__ === 'undefined' ? '' : `?sc_apikey=${__SC_API_KEY__}`;
    return `${__SC_API_HOST__}${__TRANSLATION_PATH__}${apiKeyParam}`;
  }

  getInitialRouteData() {
    return new Promise((resolve, reject) => {
      // no initial data, reject (which will cause data fetch to occur)
      if (!this.initialRouteData) reject(new Error('No initial data'));

      // copy the initial state to a var, then empty it so it's not reused
      const data = this.initialRouteData;
      this.initialRouteData = null;

      // return the initial state
      resolve(data);
    });
  }

  setInitialRouteData(layoutServiceData) {
    this.initialRouteData = layoutServiceData;
  }
}

export default new SitecoreContentService();
