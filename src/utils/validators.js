export const required = value => (value ? undefined : 'Field is required');
export const minValue = min => value =>
    value && value.length >= min ? undefined : `Should be greater than ${min}`

export const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)