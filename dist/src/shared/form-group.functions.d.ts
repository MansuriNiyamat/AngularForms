import { AbstractControl } from '@angular/forms';
import { Pointer } from './jsonpointer.functions';
export declare function buildFormGroupTemplate(jsf: any, nodeValue?: any, setValues?: boolean, schemaPointer?: string, dataPointer?: string, templatePointer?: string): {
    controlType: string;
    controls: any;
    validators: any;
    value?: undefined;
} | {
    controlType: string;
    value: {
        value: any;
        disabled: any;
    };
    validators: any;
    controls?: undefined;
};
export declare function buildFormGroup(template: any): AbstractControl;
export declare function mergeValues(...valuesToMerge: any[]): any;
export declare function setRequiredFields(schema: any, formControlTemplate: any): boolean;
export declare function formatFormData(formData: any, dataMap: Map<string, any>, recursiveRefMap: Map<string, string>, arrayMap: Map<string, number>, returnEmptyFields?: boolean, fixErrors?: boolean): any;
export declare function getControl(formGroup: any, dataPointer: Pointer, returnGroup?: boolean): any;
