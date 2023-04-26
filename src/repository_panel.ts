/* eslint-disable no-debugger */
import { style } from '@vanilla-extract/css';

export enum VIEW_STATE2 {
    APPEND = 'append',
    PREPEND = 'prepend',
    REPLACE = 'replace',
  }
  export const container = style({
    padding: 10
  });
  // multiple matches needs to be handled
  // support index also

  export default {
    class: "flex bg-red-100",
    id: 'repository_panel',
    view: {
      className: '',
      items: [
        {
          target: {
            key:"id",
            valu:'respository-'
,          },
          component: 'widget',
          id: 'loading_shimmer',
          viewState: VIEW_STATE2.REPLACE,
          index:2,
        },
        {
          component: 'button',
          label: 'Close',
          'on-click': 'cancel',
          variant: 'secondary',
          quiet: true,
          index:20,
        },
        {
          label:"@testLabel",
          component:"label"
        }
      ],
    },
    controller: {
      cancel: function (args) {
        this.model.testLabel = 'testlabel2'
      },
    },
    model: {
      deps: ['testLabel'],
    },
  } 