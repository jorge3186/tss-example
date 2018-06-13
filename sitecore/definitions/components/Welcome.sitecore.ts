/**
 * Copyright 2018 jordanalphonso.net
 * 
 * Unauthorized copying of this file, via any medium
 * is strictly prohibited.
 *
 * ---------------------------------------------------------
 * @author Jordan Alphonso
 * created: 06/13/2018 11:15:04
 * file: sitecore/definitions/components/Welcome.sitecore.js
 * ---------------------------------------------------------
 */
import { addComponent, CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

export default (manifest: Manifest) => {
  addComponent(manifest, {
    name: 'Welcome',
    displayName: 'Welcome',
    // totally optional, but fun
    icon: SitecoreIcon.EmoticonSmile,
    fields: [
      { name: 'title', type: CommonFieldTypes.SingleLineText },
      { name: 'text', type: CommonFieldTypes.RichText },
      { name: 'logoImage', type: CommonFieldTypes.Image },
      { name: 'anotherMessage', type: CommonFieldTypes.RichText }
    ],
  });
};
