import { LOCALE_TEXT_GRID } from '../util/locale-text-grid';

export const COLUMN_DEFAULT_VALUE = {
  floatingFilter: true, // 设置为true直接显示过滤器，如果为false 需要点击列头
  resizable: true,   // 允许拖动修改列宽
  sortable: true,
  filter: true
};


// export const COLUMN_DEFAULT_VALUE = {
//   resizable: true,   // 允许拖动修改列宽
//   sortable: true,
//   // suppressSizeToFit: true,    // 设置为true,则开启宽度自适应时这一栏宽度固定，否则，会按照各个栏的宽度比例自适应
//   filter: true
//   // headerComponent: 'sortableHeaderComponent',
//   // headerComponentParams: {
//   //   menuIcon: 'bars'
//   // }
// };
