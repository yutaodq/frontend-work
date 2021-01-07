import { LOCALE_TEXT_GRID } from '../util/locale-text-grid';

export const COLUMN_DEFAULT_VALUE = {
  wrapText: true,
  resizable: true,   // 允许拖动修改列宽
  sortable: true,
  filter: true,
  floatingFilter: true, // 设置为true直接显示过滤器，如果为false 需要点击列头

};
export const ROW_HEIGHT = 40;  // 行高

// autoHeight: true,  // 行高设置为自动

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
