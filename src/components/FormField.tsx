import React, {ChangeEvent} from "react";
import {Field} from "react-final-form";
import {TextField} from "@mui/material";
import {FieldState} from "final-form";

type FormFieldProps = {
    label: string, name: string, required?: boolean, multiline?: boolean, type?: string, children?: React.ReactNode
}

export default function FormField(props: FormFieldProps) {
    let isSelect = props.type === 'select';

    const validate = (value: any, allValues: Object, meta?: FieldState<string>) => {
        if (props.required && !value) {
            return 'Value is required!'
        }
        return undefined
    }

    return <Field name={props.name} validate={validate}>
        {
            fieldProps => {
                function handleChange(event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
                    fieldProps.input.onChange(event)
                }

                let {invalid, error, touched} = fieldProps.meta
                return <TextField
                    error={invalid && touched}
                    helperText={invalid && touched && error}
                    label={props.label}
                    name={fieldProps.input.name}
                    value={fieldProps.input.value}
                    onChange={handleChange}
                    onBlur={fieldProps.input.onBlur}
                    variant="outlined"
                    multiline={props.multiline}
                    rows={props.multiline ? 3 : 1}
                    fullWidth
                    type={props.type}
                    margin={"normal"}
                    select={isSelect || undefined}
                    InputProps={{sx: {bgcolor: 'white'}}}
                >
                    {props.children || null}
                </TextField>

            }}
    </Field>
}
