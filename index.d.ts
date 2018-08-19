
/**
 * 注册一个 store
 * @param{String} name - store 名称
 * @param{Object} obj - store 对象，必须具备 state, computed, action 属性
 */
export function register(name: string, obj: {
    state: object,
    computed: object,
    action: object,
}): any;

/**
 * 返回指定的 store
 * @param{String} name - store 名称
 */
export function store(name?: string): object;

/**
 * 返回指定的 state
 * @param{String} name - store 名称
 */
export function state(name?: string): object;

/**
 * 返回指定的 action
 * @param{String} name - stroe 名称
*/
export function action(name?: string): object;

/**
 * 返回指定的 computed
 * @param{String} name - store 名称
 */
export function computed(name?: string): object;

/**
 * 合并 state, computed, action
 */
export function assign(obj: {
    state: object,
    computed: object,
    action: object,
}): object;

/** 初始化 Free */
export function init(cb: (obj: {
    store: object,
    state: object,
    action: object,
    computed: object,
    helper: object,
}) => {}): void;

/**
 * 添加/获取辅助函数
 * @param{String} key -
 * @param{Function} value -
 * @return{Function|void}
 */
export function helper(key: string, value: string): any;

/** 在 action 执行一个异步函数 */
export function runInAction(): any;
