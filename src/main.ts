import { 
  FASTDesignSystemProvider, 
  FASTCard, 
  FASTButton 
} from '@microsoft/fast-components';

/*
 * Ensure that tree-shaking doesn't remove these components from the bundle.
 * There are multiple ways to prevent tree shaking, of which this is one.
 */
FASTDesignSystemProvider;
FASTCard;
FASTButton;

// ISSUE: Importing the FastCompWithRepeat from here in main makes everything OK
// import { FastCompWithRepeat } from './fast-comp-with-repeat';
// FastCompWithRepeat

import Aurelia from 'aurelia';
import { MyApp } from './my-app';

Aurelia
  .app(MyApp)
  .start();
