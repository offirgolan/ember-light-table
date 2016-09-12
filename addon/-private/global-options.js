import Ember from 'ember';
import config from 'ember-get-config';

const {
  assign
} = Ember;

const globalOptions = config['ember-light-table'] || {};

export default globalOptions;

export function mergeOptionsWithGlobals(options) {
  return assign(assign({}, globalOptions, options));
}
