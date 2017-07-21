// BEGIN-SNIPPET scrolling-table
import Ember from 'ember';
import TableCommon from '../mixins/table-common';

const { Component, computed } = Ember;

export default Component.extend(TableCommon, {
  currentScrollOffset: 0,
  scrollTo: 0,
  scrollToRow: null,

  columns: computed(function() {
    return [
      {
        label: 'Avatar',
        valuePath: 'avatar',
        width: '60px',
        sortable: false,
        cellComponent: 'user-avatar'
      },
      {
        label: 'First Name',
        valuePath: 'firstName',
        width: '150px'
      },
      {
        label: 'Last Name',
        valuePath: 'lastName',
        width: '150px'
      },
      {
        label: 'Address',
        valuePath: 'address'
      },
      {
        label: 'State',
        valuePath: 'state'
      },
      {
        label: 'Country',
        valuePath: 'country'
      }
    ];
  })
});
// END-SNIPPET
