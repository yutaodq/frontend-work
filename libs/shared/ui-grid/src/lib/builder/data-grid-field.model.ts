export interface DataGridField {
    fieldId: string;
    headerNameId: string;
}

export interface DataGridFields { readonly [fieldKey: string]: DataGridField }
