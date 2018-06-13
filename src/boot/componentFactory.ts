/**
 * Copyright 2018 jordanalphonso.net
 * 
 * Unauthorized copying of this file, via any medium
 * is strictly prohibited.
 *
 * ---------------------------------------------------------
 * @author Jordan Alphonso
 * created: 06/13/2018 01:43:06
 * file: src/boot/componentFactory.ts
 * ---------------------------------------------------------
 */
import Welcome from '../app/components/Welcome';

const components = new Map();
components.set('Welcome', Welcome);

const componentFactory = (componentName) => components.get(componentName);

export default componentFactory;
