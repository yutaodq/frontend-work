/*
ag-grid标签 gridOptions 属性中的通用属性
 */
export interface IDataGridCommonOptions {
    gridClass?: string;
    // setting suppressPropertyNamesCheck property to true to avoid warning messages for custom properties
    // https://github.com/ag-grid/ag-grid/issues/2320
    suppressPropertyNamesCheck: boolean;
    suppressSizeToFit?: boolean;
    rowHeight?: number; // 可以改变除了表头所有的行高
}

// const GridClass = 'ag-theme-blue';
const GridClass = 'ag-theme-alpine';

export const DataGridCommonOptions: IDataGridCommonOptions = {
    rowHeight: 30,    // 可以改变除了表头所有的行高
    gridClass: GridClass,
    suppressPropertyNamesCheck: true,
    suppressSizeToFit: true,    // 设置为true,则开启宽度自适应时这一栏宽度固定，否则，会按照各个栏的宽度比例自适应
};
