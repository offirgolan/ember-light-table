import Component from '@ember/component';
import layout from '../templates/components/lt-infinity';
import InViewportMixin from 'ember-in-viewport';

export default Component.extend(InViewportMixin, {
  classNames: ['lt-infinity'],
  classNameBindings: ['viewportEntered:in-viewport'],
  layout,

  rows: null,
  scrollableContent: null,
  scrollBuffer: 0,

  didInsertElement() {
    this._super(...arguments);

    let scrollBuffer = this.get('scrollBuffer');
    let width = this.$().width();
    let scrollableContent = this.get('scrollableContent');

    this.setProperties({
      viewportSpy: true,
      viewportTolerance: {
        left: width,
        right: width,
        bottom: scrollBuffer,
        top: 0
      },
      scrollableArea: scrollableContent
    });
  },

  willDestroyElement() {
    this._super(...arguments);
  },

  didEnterViewport() {
    this.sendAction('onScrolledToBottom');
  }
});
