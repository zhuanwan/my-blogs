declare module 'slash2'
declare module '*.css'
declare module '*.less'
declare module '*.scss'
declare module '*.sass'
declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'
declare module 'omit.js'

declare module '@loadable/component'

declare const REACT_APP_ENV: 'dev' | 'test' | 'prod'
declare const REACT_APP_IS_BUILD: boolean

declare interface Window {
    less: any
}