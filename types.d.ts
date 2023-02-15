declare module '*.png'
declare module '*.svg'
declare module '*.jpg'
declare module '*.gif'
declare module '*.jpeg'
declare module '*.module.less' {
    const classes: { readonly [key: string]: string };
    export default classes;
}
declare module '*.less'