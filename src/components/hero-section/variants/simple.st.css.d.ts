/* THIS FILE IS AUTO GENERATED DO NOT MODIFY */
declare const namespace = "simple4115736145";

type states = {};

declare const classes: {
    "root": "simple4115736145__root";
    "simple": "simple4115736145__simple";
};

declare const vars: {};

declare const stVars: {
    "bg": string;
    "cta-color": string;
    "text-color": string;
    "template": string;
    "strips-color": string;
    "strips-distance": string;
};

declare const keyframes: {};

declare function st<T extends string = keyof states>(
    ctx: T | NullableString,
    s?: T extends keyof states ? states[T] | NullableString : NullableString,
    ...rest: NullableString[]
): string;

declare const style: typeof st;

declare function cssStates<T extends string = keyof states>(
    s: T extends keyof states ? states[T] : never,
    ctx?: T | string
): string;

export { 
    classes,
    vars,
    stVars,
    keyframes,
    namespace,
    st,
    style,
    cssStates
};

/* HELPERS */
type NullableString = string | undefined | null;
