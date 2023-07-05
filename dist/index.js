// https://lottiefiles.github.io/lottie-docs/advanced_interactions/
/*
  Note that re-exported types should be explicitly and separately exported
  as types because of issues with parceljs

  The error messages will be very perplexing

  https://github.com/parcel-bundler/parcel/issues/4796
  https://github.com/parcel-bundler/parcel/issues/4240
  https://devblogs.microsoft.com/typescript/announcing-typescript-3-8/#type-only-imports-exports
*/ const $519f1ddd575d759f$export$a5a6e0b888b2c992 = {
    debug: false,
    perf: false
};
function $519f1ddd575d759f$var$$5165f04a46b33615$export$b7d58db314e0ac27(obj) {
    if (obj == null || typeof obj !== "object") return obj;
    if (Array.isArray(obj)) return obj.map($519f1ddd575d759f$var$$5165f04a46b33615$export$b7d58db314e0ac27);
    const clone = {};
    for(const key in obj){
        const val = obj[key];
        if (obj != null && typeof obj === "object") clone[key] = $519f1ddd575d759f$var$$5165f04a46b33615$export$b7d58db314e0ac27(val);
        else clone[key] = val;
    }
    return clone;
}
const $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$c6592bbc1eebb717 = "-xin-data";
const $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$4c0223f67078aeac = `.${$519f1ddd575d759f$var$$e921b0bd4f6415ab$export$c6592bbc1eebb717}`;
const $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$6a7099543a9795c7 = "-xin-event";
const $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$21d9322c3477441b = `.${$519f1ddd575d759f$var$$e921b0bd4f6415ab$export$6a7099543a9795c7}`;
const $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$a3622eb3b5dd592a = Symbol("xin-path");
const $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$bdd0d039ad781534 = Symbol("xin-value");
const $519f1ddd575d759f$export$40700dafb97c3799 = (x)=>{
    return x[$519f1ddd575d759f$var$$e921b0bd4f6415ab$export$a3622eb3b5dd592a];
};
function $519f1ddd575d759f$export$5dcba2d45033d435(x) {
    // eslint-disable-next-line
    return typeof x === "object" && x !== null ? x[$519f1ddd575d759f$var$$e921b0bd4f6415ab$export$bdd0d039ad781534] || x : x;
}
const $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$fe712848e6e66613 = new WeakMap();
const $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$1f922de8d0ecbb7e = new WeakMap();
const $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$4cac8128ba61a55f = (element)=>{
    return {
        eventBindings: $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$fe712848e6e66613.get(element),
        dataBindings: $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$1f922de8d0ecbb7e.get(element)
    };
};
const $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$fa8cc6a36b1ccd7f = (element)=>{
    const cloned = element.cloneNode();
    if (cloned instanceof HTMLElement) {
        const dataBindings = $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$1f922de8d0ecbb7e.get(element);
        const eventHandlers = $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$fe712848e6e66613.get(element);
        if (dataBindings != null) $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$1f922de8d0ecbb7e.set(cloned, $519f1ddd575d759f$var$$5165f04a46b33615$export$b7d58db314e0ac27(dataBindings));
        if (eventHandlers != null) $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$fe712848e6e66613.set(cloned, $519f1ddd575d759f$var$$5165f04a46b33615$export$b7d58db314e0ac27(eventHandlers));
    }
    for (const node of element instanceof HTMLTemplateElement ? element.content.childNodes : element.childNodes)if (node instanceof HTMLElement || node instanceof DocumentFragment) cloned.appendChild($519f1ddd575d759f$var$$e921b0bd4f6415ab$export$fa8cc6a36b1ccd7f(node));
    else cloned.appendChild(node.cloneNode());
    return cloned;
};
const $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$86caed35dd837d06 = new WeakMap();
const $519f1ddd575d759f$export$4c309843c07ce679 = (element)=>{
    const html = document.body.parentElement;
    while(element.parentElement != null && element.parentElement !== html){
        const item = $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$86caed35dd837d06.get(element);
        if (item != null) return item;
        element = element.parentElement;
    }
    return false;
};
const $519f1ddd575d759f$export$253d09664e30b967 = Symbol("observer should be removed");
const $519f1ddd575d759f$var$$f0b099915f91bd21$export$58bed631278dbc67 = [] // { path_string_or_test, callback }
;
const $519f1ddd575d759f$var$$f0b099915f91bd21$var$touchedPaths = [];
let $519f1ddd575d759f$var$$f0b099915f91bd21$var$updateTriggered = false;
let $519f1ddd575d759f$var$$f0b099915f91bd21$var$updatePromise;
let $519f1ddd575d759f$var$$f0b099915f91bd21$var$resolveUpdate;
class $519f1ddd575d759f$var$$f0b099915f91bd21$export$c92b1d5f43586026 {
    constructor(test, callback){
        const callbackDescription = typeof callback === "string" ? `"${callback}"` : `function ${callback.name}`;
        let testDescription;
        if (typeof test === "string") {
            this.test = (t)=>typeof t === "string" && t !== "" && (test.startsWith(t) || t.startsWith(test));
            testDescription = `test = "${test}"`;
        } else if (test instanceof RegExp) {
            this.test = test.test.bind(test);
            testDescription = `test = "${test.toString()}"`;
        } else if (test instanceof Function) {
            this.test = test;
            testDescription = `test = function ${test.name}`;
        } else throw new Error("expect listener test to be a string, RegExp, or test function");
        this.description = `${testDescription}, ${callbackDescription}`;
        if (typeof callback === "function") this.callback = callback;
        else throw new Error("expect callback to be a path or function");
        $519f1ddd575d759f$var$$f0b099915f91bd21$export$58bed631278dbc67.push(this);
    }
}
const $519f1ddd575d759f$var$$f0b099915f91bd21$export$1c2919332513559b = async ()=>{
    if ($519f1ddd575d759f$var$$f0b099915f91bd21$var$updatePromise === undefined) return;
    await $519f1ddd575d759f$var$$f0b099915f91bd21$var$updatePromise;
};
const $519f1ddd575d759f$var$$f0b099915f91bd21$var$update = ()=>{
    if ($519f1ddd575d759f$export$a5a6e0b888b2c992.perf) console.time("xin async update");
    const paths = [
        ...$519f1ddd575d759f$var$$f0b099915f91bd21$var$touchedPaths
    ];
    for (const path of paths)$519f1ddd575d759f$var$$f0b099915f91bd21$export$58bed631278dbc67.filter((listener)=>{
        let heard;
        try {
            heard = listener.test(path);
        } catch (e) {
            throw new Error(`Listener ${listener.description} threw "${e}" at "${path}"`);
        }
        if (heard === $519f1ddd575d759f$export$253d09664e30b967) {
            $519f1ddd575d759f$export$23a2283368c55ea2(listener);
            return false;
        }
        return heard;
    }).forEach((listener)=>{
        let outcome;
        try {
            outcome = listener.callback(path);
        } catch (e) {
            console.error(`Listener ${listener.description} threw "${e}" handling "${path}"`);
        }
        if (outcome === $519f1ddd575d759f$export$253d09664e30b967) $519f1ddd575d759f$export$23a2283368c55ea2(listener);
    });
    $519f1ddd575d759f$var$$f0b099915f91bd21$var$touchedPaths.splice(0);
    $519f1ddd575d759f$var$$f0b099915f91bd21$var$updateTriggered = false;
    if (typeof $519f1ddd575d759f$var$$f0b099915f91bd21$var$resolveUpdate === "function") $519f1ddd575d759f$var$$f0b099915f91bd21$var$resolveUpdate();
    if ($519f1ddd575d759f$export$a5a6e0b888b2c992.perf) console.timeEnd("xin async update");
};
const $519f1ddd575d759f$export$d0b7ea69ab6056df = (touchable)=>{
    const path = typeof touchable === "string" ? touchable : $519f1ddd575d759f$export$40700dafb97c3799(touchable);
    if (path === undefined) {
        console.error("touch was called on an invalid target", touchable);
        throw new Error("touch was called on an invalid target");
    }
    if ($519f1ddd575d759f$var$$f0b099915f91bd21$var$updateTriggered === false) {
        $519f1ddd575d759f$var$$f0b099915f91bd21$var$updatePromise = new Promise((resolve)=>{
            $519f1ddd575d759f$var$$f0b099915f91bd21$var$resolveUpdate = resolve;
        });
        $519f1ddd575d759f$var$$f0b099915f91bd21$var$updateTriggered = setTimeout($519f1ddd575d759f$var$$f0b099915f91bd21$var$update);
    }
    if ($519f1ddd575d759f$var$$f0b099915f91bd21$var$touchedPaths.find((touchedPath)=>path.startsWith(touchedPath)) == null) $519f1ddd575d759f$var$$f0b099915f91bd21$var$touchedPaths.push(path);
};
const $519f1ddd575d759f$var$$f0b099915f91bd21$export$d1203567a167490e = (test, callback)=>{
    return new $519f1ddd575d759f$var$$f0b099915f91bd21$export$c92b1d5f43586026(test, callback);
};
const $519f1ddd575d759f$export$23a2283368c55ea2 = (listener)=>{
    const index = $519f1ddd575d759f$var$$f0b099915f91bd21$export$58bed631278dbc67.indexOf(listener);
    if (index > -1) $519f1ddd575d759f$var$$f0b099915f91bd21$export$58bed631278dbc67.splice(index, 1);
    else throw new Error("unobserve failed, listener not found");
};
// unique tokens passed to set by path to delete or create properties
const $519f1ddd575d759f$var$$31366a4b885eb48b$var$stringify = (x)=>{
    try {
        return JSON.stringify(x);
    } catch (_) {
        return "{has circular references}";
    }
};
const $519f1ddd575d759f$var$$31366a4b885eb48b$export$5a4bb2b1c89bdce7 = (...messages)=>new Error(messages.map($519f1ddd575d759f$var$$31366a4b885eb48b$var$stringify).join(" "));
const $519f1ddd575d759f$var$$c62be31ef05b0c90$var$now36 = ()=>new Date(parseInt("1000000000", 36) + Date.now()).valueOf().toString(36).slice(1);
let $519f1ddd575d759f$var$$c62be31ef05b0c90$var$_seq = 0;
const $519f1ddd575d759f$var$$c62be31ef05b0c90$var$seq = ()=>(parseInt("10000", 36) + ++$519f1ddd575d759f$var$$c62be31ef05b0c90$var$_seq).toString(36).slice(-5);
const $519f1ddd575d759f$var$$c62be31ef05b0c90$var$id = ()=>$519f1ddd575d759f$var$$c62be31ef05b0c90$var$now36() + $519f1ddd575d759f$var$$c62be31ef05b0c90$var$seq();
const $519f1ddd575d759f$var$$c62be31ef05b0c90$var$_delete_ = {};
const $519f1ddd575d759f$var$$c62be31ef05b0c90$var$_newObject_ = {};
function $519f1ddd575d759f$var$$c62be31ef05b0c90$export$f5d2dd4cfd729958(path) {
    if (path === "") return [];
    if (Array.isArray(path)) return path;
    else {
        const parts = [];
        while(path.length > 0){
            let index = path.search(/\[[^\]]+\]/);
            if (index === -1) {
                parts.push(path.split("."));
                break;
            } else {
                const part = path.slice(0, index);
                path = path.slice(index);
                if (part !== "") parts.push(part.split("."));
                index = path.indexOf("]") + 1;
                parts.push(path.slice(1, index - 1));
                // handle paths dereferencing array element like foo[0].id
                if (path.slice(index, index + 1) === ".") index += 1;
                path = path.slice(index);
            }
        }
        return parts;
    }
}
const $519f1ddd575d759f$var$$c62be31ef05b0c90$var$idPathMaps = new WeakMap();
function $519f1ddd575d759f$var$$c62be31ef05b0c90$var$buildIdPathValueMap(array, idPath) {
    if ($519f1ddd575d759f$var$$c62be31ef05b0c90$var$idPathMaps.get(array) === undefined) $519f1ddd575d759f$var$$c62be31ef05b0c90$var$idPathMaps.set(array, {});
    if ($519f1ddd575d759f$var$$c62be31ef05b0c90$var$idPathMaps.get(array)[idPath] === undefined) $519f1ddd575d759f$var$$c62be31ef05b0c90$var$idPathMaps.get(array)[idPath] = {};
    const map = $519f1ddd575d759f$var$$c62be31ef05b0c90$var$idPathMaps.get(array)[idPath];
    if (idPath === "_auto_") array.forEach((item, idx)=>{
        if (item._auto_ === undefined) item._auto_ = $519f1ddd575d759f$var$$c62be31ef05b0c90$var$id();
        map[item._auto_ + ""] = idx;
    });
    else array.forEach((item, idx)=>{
        map[$519f1ddd575d759f$var$$c62be31ef05b0c90$export$44b5bed83342a92f(item, idPath) + ""] = idx;
    });
    return map;
}
function $519f1ddd575d759f$var$$c62be31ef05b0c90$var$getIdPathMap(array, idPath) {
    if ($519f1ddd575d759f$var$$c62be31ef05b0c90$var$idPathMaps.get(array) === undefined || $519f1ddd575d759f$var$$c62be31ef05b0c90$var$idPathMaps.get(array)[idPath] === undefined) return $519f1ddd575d759f$var$$c62be31ef05b0c90$var$buildIdPathValueMap(array, idPath);
    else return $519f1ddd575d759f$var$$c62be31ef05b0c90$var$idPathMaps.get(array)[idPath];
}
function $519f1ddd575d759f$var$$c62be31ef05b0c90$var$keyToIndex(array, idPath, idValue) {
    idValue = idValue + "";
    let idx = $519f1ddd575d759f$var$$c62be31ef05b0c90$var$getIdPathMap(array, idPath)[idValue];
    if (idx === undefined || $519f1ddd575d759f$var$$c62be31ef05b0c90$export$44b5bed83342a92f(array[idx], idPath) + "" !== idValue) idx = $519f1ddd575d759f$var$$c62be31ef05b0c90$var$buildIdPathValueMap(array, idPath)[idValue];
    return idx;
}
function $519f1ddd575d759f$var$$c62be31ef05b0c90$var$byKey(obj, key, valueToInsert) {
    if (obj[key] === undefined && valueToInsert !== undefined) obj[key] = valueToInsert;
    return obj[key];
}
function $519f1ddd575d759f$var$$c62be31ef05b0c90$var$byIdPath(array, idPath, idValue, valueToInsert) {
    let idx = idPath !== "" ? $519f1ddd575d759f$var$$c62be31ef05b0c90$var$keyToIndex(array, idPath, idValue) : idValue;
    if (valueToInsert === $519f1ddd575d759f$var$$c62be31ef05b0c90$var$_delete_) {
        array.splice(idx, 1);
        $519f1ddd575d759f$var$$c62be31ef05b0c90$var$idPathMaps.delete(array);
        return Symbol("deleted");
    } else if (valueToInsert === $519f1ddd575d759f$var$$c62be31ef05b0c90$var$_newObject_) {
        if (idPath === "" && array[idx] === undefined) array[idx] = {};
    } else if (valueToInsert !== undefined) {
        if (idx !== undefined) array[idx] = valueToInsert;
        else if (idPath !== "" && $519f1ddd575d759f$var$$c62be31ef05b0c90$export$44b5bed83342a92f(valueToInsert, idPath) + "" === idValue + "") {
            array.push(valueToInsert);
            idx = array.length - 1;
        } else throw new Error(`byIdPath insert failed at [${idPath}=${idValue}]`);
    }
    return array[idx];
}
function $519f1ddd575d759f$var$$c62be31ef05b0c90$var$expectArray(obj) {
    if (!Array.isArray(obj)) throw $519f1ddd575d759f$var$$31366a4b885eb48b$export$5a4bb2b1c89bdce7("setByPath failed: expected array, found", obj);
}
function $519f1ddd575d759f$var$$c62be31ef05b0c90$var$expectObject(obj) {
    if (obj == null || !(obj instanceof Object)) throw $519f1ddd575d759f$var$$31366a4b885eb48b$export$5a4bb2b1c89bdce7("setByPath failed: expected Object, found", obj);
}
function $519f1ddd575d759f$var$$c62be31ef05b0c90$export$44b5bed83342a92f(obj, path) {
    const parts = $519f1ddd575d759f$var$$c62be31ef05b0c90$export$f5d2dd4cfd729958(path);
    let found = obj;
    let i, iMax, j, jMax;
    for(i = 0, iMax = parts.length; found !== undefined && i < iMax; i++){
        const part = parts[i];
        if (Array.isArray(part)) for(j = 0, jMax = part.length; found !== undefined && j < jMax; j++){
            const key = part[j];
            found = found[key];
        }
        else {
            if (found.length === 0) {
                // @ts-expect-error-error
                found = found[part.slice(1)];
                if (part[0] !== "=") return undefined;
            } else if (part.includes("=")) {
                const [idPath, ...tail] = part.split("=");
                found = $519f1ddd575d759f$var$$c62be31ef05b0c90$var$byIdPath(found, idPath, tail.join("="));
            } else {
                j = parseInt(part, 10);
                found = found[j];
            }
        }
    }
    return found;
}
function $519f1ddd575d759f$var$$c62be31ef05b0c90$export$f65a19d15516795e(orig, path, val) {
    let obj = orig;
    const parts = $519f1ddd575d759f$var$$c62be31ef05b0c90$export$f5d2dd4cfd729958(path);
    while(obj != null && parts.length > 0){
        const part = parts.shift();
        if (typeof part === "string") {
            const equalsOffset = part.indexOf("=");
            if (equalsOffset > -1) {
                if (equalsOffset === 0) $519f1ddd575d759f$var$$c62be31ef05b0c90$var$expectObject(obj);
                else $519f1ddd575d759f$var$$c62be31ef05b0c90$var$expectArray(obj);
                const idPath = part.slice(0, equalsOffset);
                const idValue = part.slice(equalsOffset + 1);
                obj = $519f1ddd575d759f$var$$c62be31ef05b0c90$var$byIdPath(obj, idPath, idValue, parts.length > 0 ? $519f1ddd575d759f$var$$c62be31ef05b0c90$var$_newObject_ : val);
                if (parts.length === 0) return true;
            } else {
                $519f1ddd575d759f$var$$c62be31ef05b0c90$var$expectArray(obj);
                const idx = parseInt(part, 10);
                if (parts.length > 0) obj = obj[idx];
                else {
                    if (val !== $519f1ddd575d759f$var$$c62be31ef05b0c90$var$_delete_) {
                        if (obj[idx] === val) return false;
                        obj[idx] = val;
                    } else obj.splice(idx, 1);
                    return true;
                }
            }
        } else if (Array.isArray(part) && part.length > 0) {
            $519f1ddd575d759f$var$$c62be31ef05b0c90$var$expectObject(obj);
            while(part.length > 0){
                const key = part.shift();
                if (part.length > 0 || parts.length > 0) obj = $519f1ddd575d759f$var$$c62be31ef05b0c90$var$byKey(obj, key, part.length > 0 ? {} : []);
                else {
                    if (val !== $519f1ddd575d759f$var$$c62be31ef05b0c90$var$_delete_) {
                        if (obj[key] === val) return false;
                        obj[key] = val;
                    } else {
                        if (!Object.prototype.hasOwnProperty.call(obj, key)) return false;
                        // eslint-disable-next-line
                        delete obj[key];
                    }
                    return true;
                }
            }
        } else throw new Error(`setByPath failed, bad path ${path}`);
    }
    // eslint-disable-next-line
    throw new Error(`setByPath(${orig}, ${path}, ${val}) failed`);
}
function $519f1ddd575d759f$var$$c62be31ef05b0c90$export$102e532907108dad(orig, path) {
    if ($519f1ddd575d759f$var$$c62be31ef05b0c90$export$44b5bed83342a92f(orig, path) !== null) $519f1ddd575d759f$var$$c62be31ef05b0c90$export$f65a19d15516795e(orig, path, $519f1ddd575d759f$var$$c62be31ef05b0c90$var$_delete_);
}
// list of Array functions that change the array
const $519f1ddd575d759f$var$$547f11326d897190$var$ARRAY_MUTATIONS = [
    "sort",
    "splice",
    "copyWithin",
    "fill",
    "pop",
    "push",
    "reverse",
    "shift",
    "unshift"
];
const $519f1ddd575d759f$var$$547f11326d897190$var$registry = {};
const $519f1ddd575d759f$var$$547f11326d897190$var$debugPaths = true;
const $519f1ddd575d759f$var$$547f11326d897190$var$validPath = /^\.?([^.[\](),])+(\.[^.[\](),]+|\[\d+\]|\[[^=[\](),]*=[^[\]()]+\])*$/;
const $519f1ddd575d759f$var$$547f11326d897190$export$a678af82bf766611 = (path)=>$519f1ddd575d759f$var$$547f11326d897190$var$validPath.test(path);
const $519f1ddd575d759f$var$$547f11326d897190$var$extendPath = (path = "", prop = "")=>{
    if (path === "") return prop;
    else {
        if (prop.match(/^\d+$/) !== null || prop.includes("=")) return `${path}[${prop}]`;
        else return `${path}.${prop}`;
    }
};
const $519f1ddd575d759f$var$$547f11326d897190$var$regHandler = (path = "")=>({
        // TODO figure out how to correctly return array[Symbol.iterator] so that for(const foo of xin.foos) works
        // as you'd expect
        get (target, _prop) {
            if (_prop === $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$a3622eb3b5dd592a) return path;
            else if (_prop === $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$bdd0d039ad781534) return target;
            if (typeof _prop === "symbol") return target[_prop];
            let prop = _prop;
            const compoundProp = prop.match(/^([^.[]+)\.(.+)$/) ?? // basePath.subPath (omit '.')
            prop.match(/^([^\]]+)(\[.+)/) ?? // basePath[subPath
            prop.match(/^(\[[^\]]+\])\.(.+)$/) ?? // [basePath].subPath (omit '.')
            prop.match(/^(\[[^\]]+\])\[(.+)$/) // [basePath][subPath
            ;
            if (compoundProp !== null) {
                const [, basePath, subPath] = compoundProp;
                const currentPath = $519f1ddd575d759f$var$$547f11326d897190$var$extendPath(path, basePath);
                const value = $519f1ddd575d759f$var$$c62be31ef05b0c90$export$44b5bed83342a92f(target, basePath);
                return value !== null && typeof value === "object" ? new Proxy(value, $519f1ddd575d759f$var$$547f11326d897190$var$regHandler(currentPath))[subPath] : value;
            }
            if (prop.startsWith("[") && prop.endsWith("]")) prop = prop.substring(1, prop.length - 1);
            if (!Array.isArray(target) && target[prop] !== undefined || Array.isArray(target) && prop.includes("=")) {
                let value;
                if (prop.includes("=")) {
                    const [idPath, needle] = prop.split("=");
                    value = target.find((candidate)=>`${$519f1ddd575d759f$var$$c62be31ef05b0c90$export$44b5bed83342a92f(candidate, idPath)}` === needle);
                } else value = target[prop];
                if (value !== null && typeof value === "object") {
                    const currentPath = $519f1ddd575d759f$var$$547f11326d897190$var$extendPath(path, prop);
                    return new Proxy(value, $519f1ddd575d759f$var$$547f11326d897190$var$regHandler(currentPath));
                } else if (typeof value === "function") return value.bind(target);
                else return value;
            } else if (Array.isArray(target)) {
                const value = target[prop];
                return typeof value === "function" ? (...items)=>{
                    // @ts-expect-error
                    const result = Array.prototype[prop].apply(target, items);
                    if ($519f1ddd575d759f$var$$547f11326d897190$var$ARRAY_MUTATIONS.includes(prop)) $519f1ddd575d759f$export$d0b7ea69ab6056df(path);
                    return result;
                } : typeof value === "object" ? new Proxy(value, $519f1ddd575d759f$var$$547f11326d897190$var$regHandler($519f1ddd575d759f$var$$547f11326d897190$var$extendPath(path, prop))) : value;
            } else return target[prop];
        },
        set (_, prop, value) {
            // eslint-disable-next-line
            if (value != null && value[$519f1ddd575d759f$var$$e921b0bd4f6415ab$export$a3622eb3b5dd592a]) value = value[$519f1ddd575d759f$var$$e921b0bd4f6415ab$export$bdd0d039ad781534];
            const fullPath = $519f1ddd575d759f$var$$547f11326d897190$var$extendPath(path, prop);
            if ($519f1ddd575d759f$var$$547f11326d897190$var$debugPaths && !$519f1ddd575d759f$var$$547f11326d897190$export$a678af82bf766611(fullPath)) throw new Error(`setting invalid path ${fullPath}`);
            let existing = $519f1ddd575d759f$export$966034e6c6823eb0[fullPath];
            // eslint-disable-next-line
            if (existing != null && existing[$519f1ddd575d759f$var$$e921b0bd4f6415ab$export$bdd0d039ad781534] != null) existing = existing[$519f1ddd575d759f$var$$e921b0bd4f6415ab$export$bdd0d039ad781534];
            if (existing !== value && $519f1ddd575d759f$var$$c62be31ef05b0c90$export$f65a19d15516795e($519f1ddd575d759f$var$$547f11326d897190$var$registry, fullPath, value)) $519f1ddd575d759f$export$d0b7ea69ab6056df(fullPath);
            return true;
        }
    });
const $519f1ddd575d759f$export$d1203567a167490e = (test, callback)=>{
    const func = typeof callback === "function" ? callback : $519f1ddd575d759f$export$966034e6c6823eb0[callback];
    if (typeof func !== "function") throw new Error(`observe expects a function or path to a function, ${callback} is neither`);
    return $519f1ddd575d759f$var$$f0b099915f91bd21$export$d1203567a167490e(test, func);
};
const $519f1ddd575d759f$export$966034e6c6823eb0 = new Proxy($519f1ddd575d759f$var$$547f11326d897190$var$registry, $519f1ddd575d759f$var$$547f11326d897190$var$regHandler());
const { document: $519f1ddd575d759f$var$$b5796eaeba5c782e$var$document, MutationObserver: $519f1ddd575d759f$var$$b5796eaeba5c782e$var$MutationObserver } = globalThis;
const $519f1ddd575d759f$var$$b5796eaeba5c782e$export$80bf2f765c31be6a = (element, changedPath)=>{
    const dataBindings = $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$1f922de8d0ecbb7e.get(element);
    for (const dataBinding of dataBindings){
        let { path: path, binding: binding, options: options } = dataBinding;
        const { toDOM: toDOM } = binding;
        if (toDOM != null) {
            if (path.startsWith("^")) {
                const dataSource = $519f1ddd575d759f$export$4c309843c07ce679(element);
                if (dataSource != null && dataSource[$519f1ddd575d759f$var$$e921b0bd4f6415ab$export$a3622eb3b5dd592a] != null) path = dataBinding.path = `${dataSource[$519f1ddd575d759f$var$$e921b0bd4f6415ab$export$a3622eb3b5dd592a]}${path.substring(1)}`;
                else {
                    console.error(`Cannot resolve relative binding ${path}`, element, "is not part of a list");
                    throw new Error(`Cannot resolve relative binding ${path}`);
                }
            }
            if (changedPath == null || path.startsWith(changedPath)) toDOM(element, $519f1ddd575d759f$export$966034e6c6823eb0[path], options);
        }
    }
};
// this is just to allow bind to be testable in node
if ($519f1ddd575d759f$var$$b5796eaeba5c782e$var$MutationObserver != null) {
    const observer = new $519f1ddd575d759f$var$$b5796eaeba5c782e$var$MutationObserver((mutationsList)=>{
        mutationsList.forEach((mutation)=>{
            [
                ...mutation.addedNodes
            ].forEach((node)=>{
                if (node instanceof HTMLElement) [
                    ...node.querySelectorAll($519f1ddd575d759f$var$$e921b0bd4f6415ab$export$4c0223f67078aeac)
                ].forEach((element)=>$519f1ddd575d759f$var$$b5796eaeba5c782e$export$80bf2f765c31be6a(element));
            });
        });
    });
    observer.observe($519f1ddd575d759f$var$$b5796eaeba5c782e$var$document.body, {
        subtree: true,
        childList: true
    });
}
$519f1ddd575d759f$export$d1203567a167490e(()=>true, (changedPath)=>{
    const boundElements = $519f1ddd575d759f$var$$b5796eaeba5c782e$var$document.querySelectorAll($519f1ddd575d759f$var$$e921b0bd4f6415ab$export$4c0223f67078aeac);
    for (const element of boundElements)$519f1ddd575d759f$var$$b5796eaeba5c782e$export$80bf2f765c31be6a(element, changedPath);
});
const $519f1ddd575d759f$var$$b5796eaeba5c782e$var$handleChange = (event)=>{
    // @ts-expect-error-error
    let target = event.target.closest($519f1ddd575d759f$var$$e921b0bd4f6415ab$export$4c0223f67078aeac);
    while(target != null){
        const dataBindings = $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$1f922de8d0ecbb7e.get(target);
        for (const dataBinding of dataBindings){
            const { binding: binding, path: path } = dataBinding;
            const { fromDOM: fromDOM } = binding;
            if (fromDOM != null) {
                let value;
                try {
                    value = fromDOM(target, dataBinding.options);
                } catch (e) {
                    console.error("Cannot get value from", target, "via", dataBinding);
                    throw new Error("Cannot obtain value fromDOM");
                }
                if (value != null) {
                    const existing = $519f1ddd575d759f$export$966034e6c6823eb0[path];
                    // eslint-disable-next-line
                    if (existing == null) $519f1ddd575d759f$export$966034e6c6823eb0[path] = value;
                    else {
                        // @ts-expect-error-error
                        const existingActual = existing[$519f1ddd575d759f$var$$e921b0bd4f6415ab$export$a3622eb3b5dd592a] != null ? existing[$519f1ddd575d759f$var$$e921b0bd4f6415ab$export$bdd0d039ad781534] : existing;
                        const valueActual = value[$519f1ddd575d759f$var$$e921b0bd4f6415ab$export$a3622eb3b5dd592a] != null ? value[$519f1ddd575d759f$var$$e921b0bd4f6415ab$export$bdd0d039ad781534] : value;
                        if (existingActual !== valueActual) $519f1ddd575d759f$export$966034e6c6823eb0[path] = valueActual;
                    }
                }
            }
        }
        target = target.parentElement.closest($519f1ddd575d759f$var$$e921b0bd4f6415ab$export$4c0223f67078aeac);
    }
};
if (globalThis.document != null) {
    $519f1ddd575d759f$var$$b5796eaeba5c782e$var$document.body.addEventListener("change", $519f1ddd575d759f$var$$b5796eaeba5c782e$var$handleChange, true);
    $519f1ddd575d759f$var$$b5796eaeba5c782e$var$document.body.addEventListener("input", $519f1ddd575d759f$var$$b5796eaeba5c782e$var$handleChange, true);
}
function $519f1ddd575d759f$export$2385a24977818dd0(element, what, binding, options) {
    if (element instanceof DocumentFragment) throw new Error("bind cannot bind to a DocumentFragment");
    let path;
    if (typeof what === "object" && what[$519f1ddd575d759f$var$$e921b0bd4f6415ab$export$a3622eb3b5dd592a] === undefined && options === undefined) {
        const { value: value } = what;
        path = typeof value === "string" ? value : value[$519f1ddd575d759f$var$$e921b0bd4f6415ab$export$a3622eb3b5dd592a];
        options = what;
        delete options.value;
    } else path = typeof what === "string" ? what : what[$519f1ddd575d759f$var$$e921b0bd4f6415ab$export$a3622eb3b5dd592a];
    if (path == null) throw new Error("bind requires a path or object with xin Proxy");
    const { toDOM: toDOM } = binding;
    element.classList.add($519f1ddd575d759f$var$$e921b0bd4f6415ab$export$c6592bbc1eebb717);
    let dataBindings = $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$1f922de8d0ecbb7e.get(element);
    if (dataBindings == null) {
        dataBindings = [];
        $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$1f922de8d0ecbb7e.set(element, dataBindings);
    }
    dataBindings.push({
        path: path,
        binding: binding,
        options: options
    });
    if (toDOM != null && !path.startsWith("^")) $519f1ddd575d759f$export$d0b7ea69ab6056df(path);
    return element;
}
const $519f1ddd575d759f$var$$b5796eaeba5c782e$var$handledEventTypes = new Set();
const $519f1ddd575d759f$var$$b5796eaeba5c782e$var$handleBoundEvent = (event)=>{
    // @ts-expect-error-error
    let target = event?.target.closest($519f1ddd575d759f$var$$e921b0bd4f6415ab$export$21d9322c3477441b);
    let propagationStopped = false;
    const wrappedEvent = new Proxy(event, {
        get (target, prop) {
            if (prop === "stopPropagation") return ()=>{
                event.stopPropagation();
                propagationStopped = true;
            };
            else {
                // @ts-expect-error-error
                const value = target[prop];
                return typeof value === "function" ? value.bind(target) : value;
            }
        }
    });
    // eslint-disable-next-line no-unmodified-loop-condition
    while(!propagationStopped && target != null){
        const eventBindings = $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$fe712848e6e66613.get(target);
        // eslint-disable-next-line
        const handlers = eventBindings[event.type] || [];
        for (const handler of handlers){
            if (typeof handler === "function") handler(wrappedEvent);
            else {
                const func = $519f1ddd575d759f$export$966034e6c6823eb0[handler];
                if (typeof func === "function") func(wrappedEvent);
                else throw new Error(`no event handler found at path ${handler}`);
            }
            if (propagationStopped) continue;
        }
        target = target.parentElement != null ? target.parentElement.closest($519f1ddd575d759f$var$$e921b0bd4f6415ab$export$21d9322c3477441b) : null;
    }
};
const $519f1ddd575d759f$export$af631764ddc44097 = (element, eventType, eventHandler)=>{
    let eventBindings = $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$fe712848e6e66613.get(element);
    element.classList.add($519f1ddd575d759f$var$$e921b0bd4f6415ab$export$6a7099543a9795c7);
    if (eventBindings == null) {
        eventBindings = {};
        $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$fe712848e6e66613.set(element, eventBindings);
    }
    // eslint-disable-next-line
    if (!eventBindings[eventType]) eventBindings[eventType] = [];
    if (!eventBindings[eventType].includes(eventHandler)) eventBindings[eventType].push(eventHandler);
    if (!$519f1ddd575d759f$var$$b5796eaeba5c782e$var$handledEventTypes.has(eventType)) {
        $519f1ddd575d759f$var$$b5796eaeba5c782e$var$handledEventTypes.add(eventType);
        $519f1ddd575d759f$var$$b5796eaeba5c782e$var$document.body.addEventListener(eventType, $519f1ddd575d759f$var$$b5796eaeba5c782e$var$handleBoundEvent, true);
    }
};
const $519f1ddd575d759f$var$$f314c6851ceb0f9e$export$635e15bbd66f01ea = (target, type)=>{
    const event = new Event(type);
    target.dispatchEvent(event);
};
const $519f1ddd575d759f$var$$f314c6851ceb0f9e$var$valueType = (element)=>{
    if (element instanceof HTMLInputElement) return element.type;
    else if (element instanceof HTMLSelectElement && element.hasAttribute("multiple")) return "multi-select";
    else return "other";
};
const $519f1ddd575d759f$var$$f314c6851ceb0f9e$export$80746c6bc6142fc8 = (element, newValue)=>{
    switch($519f1ddd575d759f$var$$f314c6851ceb0f9e$var$valueType(element)){
        case "radio":
            // @ts-expect-error
            element.checked = element.value === newValue;
            break;
        case "checkbox":
            // @ts-expect-error
            element.checked = newValue;
            break;
        case "date":
            // @ts-expect-error
            element.valueAsDate = new Date(newValue);
            break;
        case "multi-select":
            for (const option of [
                ...element.querySelectorAll("option")
            ])option.selected = newValue[option.value];
            break;
        default:
            // @ts-expect-error
            element.value = newValue;
    }
};
const $519f1ddd575d759f$var$$f314c6851ceb0f9e$export$bf7199a9ebcb84a9 = (element)=>{
    switch($519f1ddd575d759f$var$$f314c6851ceb0f9e$var$valueType(element)){
        case "radio":
            {
                const radio = element.parentElement?.querySelector(`[name="${element.name}"]:checked`);
                return radio != null ? radio.value : null;
            }
        case "checkbox":
            // @ts-expect-error
            return element.checked;
        case "date":
            // @ts-expect-error
            return element.valueAsDate.toISOString();
        case "multi-select":
            return [
                ...element.querySelectorAll("option")
            ].reduce((map, option)=>{
                map[option.value] = option.selected;
                return map;
            }, {});
        default:
            return element.value;
    }
};
/* global ResizeObserver */ const { ResizeObserver: $519f1ddd575d759f$var$$f314c6851ceb0f9e$var$ResizeObserver } = globalThis;
const $519f1ddd575d759f$var$$f314c6851ceb0f9e$export$b13421f1ae71d316 = $519f1ddd575d759f$var$$f314c6851ceb0f9e$var$ResizeObserver != null ? new $519f1ddd575d759f$var$$f314c6851ceb0f9e$var$ResizeObserver((entries)=>{
    for (const entry of entries){
        const element = entry.target;
        $519f1ddd575d759f$var$$f314c6851ceb0f9e$export$635e15bbd66f01ea(element, "resize");
    }
}) : {
    observe () {},
    unobserve () {}
};
function $519f1ddd575d759f$var$$f314c6851ceb0f9e$var$convertToXinSlot(slot) {
    const xinSlot = document.createElement("xin-slot");
    if (slot.name !== "") xinSlot.setAttribute("name", slot.name);
    slot.replaceWith(xinSlot);
}
const $519f1ddd575d759f$var$$f314c6851ceb0f9e$export$6bb13967611cdb1 = (elt, content)=>{
    let isSlotted = false;
    if (elt != null && content != null) {
        if (typeof content === "string") elt.textContent = content;
        else if (Array.isArray(content)) content.forEach((node)=>{
            elt.append(node instanceof Node ? $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$fa8cc6a36b1ccd7f(node) : node);
            if (node instanceof Node && node.querySelector("slot") != null) isSlotted = true;
        });
        else if (content instanceof HTMLElement || content instanceof DocumentFragment) {
            const slots = [
                ...content.querySelectorAll("slot")
            ];
            if (slots.length > 0) {
                isSlotted = true;
                slots.forEach($519f1ddd575d759f$var$$f314c6851ceb0f9e$var$convertToXinSlot);
            }
            elt.append($519f1ddd575d759f$var$$e921b0bd4f6415ab$export$fa8cc6a36b1ccd7f(content));
        } else throw new Error("expect text content or document node");
    }
    return isSlotted;
};
const $519f1ddd575d759f$export$61fc7d43ac8f84b0 = (origFn, minInterval = 250)=>{
    let debounceId;
    return (...args)=>{
        if (debounceId !== undefined) clearTimeout(debounceId);
        debounceId = setTimeout(()=>{
            origFn(...args);
        }, minInterval);
    };
};
const $519f1ddd575d759f$export$de363e709c412c8a = (origFn, minInterval = 250)=>{
    let debounceId;
    let previousCall = Date.now() - minInterval;
    let inFlight = false;
    return (...args)=>{
        clearTimeout(debounceId);
        debounceId = setTimeout(async ()=>{
            origFn(...args);
            previousCall = Date.now();
        }, minInterval);
        if (!inFlight && Date.now() - previousCall >= minInterval) {
            inFlight = true;
            try {
                origFn(...args);
                previousCall = Date.now();
            } finally{
                inFlight = false;
            }
        }
    };
};
const $519f1ddd575d759f$var$$ea2c6a36710de0a8$var$listBindingRef = Symbol("list-binding");
const $519f1ddd575d759f$var$$ea2c6a36710de0a8$var$SLICE_INTERVAL_MS = 16 // 60fps
;
function $519f1ddd575d759f$var$$ea2c6a36710de0a8$var$updateRelativeBindings(element, path) {
    const boundElements = [
        ...element.querySelectorAll($519f1ddd575d759f$var$$e921b0bd4f6415ab$export$4c0223f67078aeac)
    ];
    if (element.matches($519f1ddd575d759f$var$$e921b0bd4f6415ab$export$4c0223f67078aeac)) boundElements.unshift(element);
    for (const boundElement of boundElements){
        const bindings = $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$1f922de8d0ecbb7e.get(boundElement);
        for (const binding of bindings){
            if (binding.path.startsWith("^")) binding.path = `${path}${binding.path.substring(1)}`;
            if (binding.binding.toDOM != null) binding.binding.toDOM(boundElement, $519f1ddd575d759f$export$966034e6c6823eb0[binding.path]);
        }
    }
}
class $519f1ddd575d759f$var$$ea2c6a36710de0a8$var$ListBinding {
    _array = [];
    constructor(boundElement, options = {}){
        this.boundElement = boundElement;
        this.itemToElement = new WeakMap();
        if (boundElement.children.length !== 1) throw new Error("ListBinding expects an element with exactly one child element");
        if (boundElement.children[0] instanceof HTMLTemplateElement) {
            const template = boundElement.children[0];
            if (template.content.children.length !== 1) throw new Error("ListBinding expects a template with exactly one child element");
            this.template = $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$fa8cc6a36b1ccd7f(template.content.children[0]);
        } else {
            this.template = boundElement.children[0];
            this.template.remove();
        }
        this.listTop = document.createElement("div");
        this.listBottom = document.createElement("div");
        this.boundElement.append(this.listTop);
        this.boundElement.append(this.listBottom);
        this.options = options;
        if (options.virtual != null) {
            $519f1ddd575d759f$var$$f314c6851ceb0f9e$export$b13421f1ae71d316.observe(this.boundElement);
            this._update = $519f1ddd575d759f$export$de363e709c412c8a(()=>{
                this.update(this._array, true);
            }, $519f1ddd575d759f$var$$ea2c6a36710de0a8$var$SLICE_INTERVAL_MS);
            this.boundElement.addEventListener("scroll", this._update);
            this.boundElement.addEventListener("resize", this._update);
        }
    }
    visibleSlice() {
        const { virtual: virtual, hiddenProp: hiddenProp, visibleProp: visibleProp } = this.options;
        let visibleArray = this._array;
        if (hiddenProp !== undefined) visibleArray = visibleArray.filter((item)=>item[hiddenProp] !== true);
        if (visibleProp !== undefined) visibleArray = visibleArray.filter((item)=>item[visibleProp] === true);
        let firstItem = 0;
        let lastItem = visibleArray.length - 1;
        let topBuffer = 0;
        let bottomBuffer = 0;
        if (virtual != null) {
            const width = this.boundElement.offsetWidth;
            const height = this.boundElement.offsetHeight;
            const visibleColumns = virtual.width != null ? Math.max(1, Math.floor(width / virtual.width)) : 1;
            const visibleRows = Math.ceil(height / virtual.height) + 1;
            const totalRows = Math.ceil(visibleArray.length / visibleColumns);
            const visibleItems = visibleColumns * visibleRows;
            let topRow = Math.floor(this.boundElement.scrollTop / virtual.height);
            if (topRow > totalRows - visibleRows + 1) topRow = Math.max(0, totalRows - visibleRows + 1);
            firstItem = topRow * visibleColumns;
            lastItem = firstItem + visibleItems - 1;
            topBuffer = topRow * virtual.height;
            bottomBuffer = Math.max(totalRows * virtual.height - height - topBuffer, 0);
        }
        return {
            items: visibleArray,
            firstItem: firstItem,
            lastItem: lastItem,
            topBuffer: topBuffer,
            bottomBuffer: bottomBuffer
        };
    }
    update(array, isSlice) {
        if (array == null) array = [];
        this._array = array;
        const { initInstance: initInstance, updateInstance: updateInstance, hiddenProp: hiddenProp, visibleProp: visibleProp } = this.options;
        // @ts-expect-error
        const arrayPath = $519f1ddd575d759f$export$40700dafb97c3799(array);
        const slice = this.visibleSlice();
        this.boundElement.classList.toggle("-xin-empty-list", slice.items.length === 0);
        const previousSlice = this._previousSlice;
        const { firstItem: firstItem, lastItem: lastItem, topBuffer: topBuffer, bottomBuffer: bottomBuffer } = slice;
        if (hiddenProp === undefined && visibleProp === undefined && isSlice === true && previousSlice != null && firstItem === previousSlice.firstItem && lastItem === previousSlice.lastItem) return;
        this._previousSlice = slice;
        let removed = 0;
        let moved = 0;
        let created = 0;
        for (const element of [
            ...this.boundElement.children
        ]){
            if (element === this.listTop || element === this.listBottom) continue;
            const proxy = $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$86caed35dd837d06.get(element);
            if (proxy == null) element.remove();
            else {
                const idx = slice.items.indexOf(proxy);
                if (idx < firstItem || idx > lastItem) {
                    element.remove();
                    this.itemToElement.delete(proxy);
                    $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$86caed35dd837d06.delete(element);
                    removed++;
                }
            }
        }
        this.listTop.style.height = String(topBuffer) + "px";
        this.listBottom.style.height = String(bottomBuffer) + "px";
        // build a complete new set of elements in the right order
        const elements = [];
        const { idPath: idPath } = this.options;
        for(let i = firstItem; i <= lastItem; i++){
            const item = slice.items[i];
            if (item === undefined) continue;
            let element = this.itemToElement.get($519f1ddd575d759f$export$5dcba2d45033d435(item));
            if (element == null) {
                created++;
                element = $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$fa8cc6a36b1ccd7f(this.template);
                if (typeof item === "object") {
                    this.itemToElement.set($519f1ddd575d759f$export$5dcba2d45033d435(item), element);
                    $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$86caed35dd837d06.set(element, $519f1ddd575d759f$export$5dcba2d45033d435(item));
                }
                this.boundElement.insertBefore(element, this.listBottom);
                if (idPath != null) {
                    const idValue = item[idPath];
                    const itemPath = `${arrayPath}[${idPath}=${idValue}]`;
                    $519f1ddd575d759f$var$$ea2c6a36710de0a8$var$updateRelativeBindings(element, itemPath);
                } else {
                    const itemPath = `${arrayPath}[${i}]`;
                    $519f1ddd575d759f$var$$ea2c6a36710de0a8$var$updateRelativeBindings(element, itemPath);
                }
                if (initInstance != null) initInstance(element, item);
            }
            if (updateInstance != null) updateInstance(element, item);
            elements.push(element);
        }
        // make sure all the elements are in the DOM and in the correct location
        let insertionPoint = null;
        for (const element of elements){
            if (element.previousElementSibling !== insertionPoint) {
                moved++;
                if (insertionPoint?.nextElementSibling != null) this.boundElement.insertBefore(element, insertionPoint.nextElementSibling);
                else this.boundElement.insertBefore(element, this.listBottom);
            }
            insertionPoint = element;
        }
        if ($519f1ddd575d759f$export$a5a6e0b888b2c992.perf) console.log(arrayPath, "updated", {
            removed: removed,
            created: created,
            moved: moved
        });
    }
}
const $519f1ddd575d759f$var$$ea2c6a36710de0a8$export$b0eb386be3b9fed8 = (boundElement, options)=>{
    let listBinding = boundElement[$519f1ddd575d759f$var$$ea2c6a36710de0a8$var$listBindingRef];
    if (listBinding == null) {
        listBinding = new $519f1ddd575d759f$var$$ea2c6a36710de0a8$var$ListBinding(boundElement, options);
        boundElement[$519f1ddd575d759f$var$$ea2c6a36710de0a8$var$listBindingRef] = listBinding;
    }
    return listBinding;
};
const $519f1ddd575d759f$export$97a1a3e6f39778d2 = {
    value: {
        toDOM (element, value) {
            $519f1ddd575d759f$var$$f314c6851ceb0f9e$export$80746c6bc6142fc8(element, value);
        },
        fromDOM (element) {
            return $519f1ddd575d759f$var$$f314c6851ceb0f9e$export$bf7199a9ebcb84a9(element);
        }
    },
    text: {
        toDOM (element, value) {
            element.textContent = value;
        }
    },
    enabled: {
        toDOM (element, value) {
            // eslint-disable-next-line
            element.disabled = !value;
        }
    },
    disabled: {
        toDOM (element, value) {
            element.disabled = Boolean(value);
        }
    },
    style: {
        toDOM (element, value) {
            if (typeof value === "object") for (const prop of Object.keys(value))element.style[prop] = value[prop];
            else if (typeof value === "string") element.setAttribute("style", value);
            else throw new Error("style binding expects either a string or object");
        }
    },
    list: {
        toDOM (element, value, options) {
            const listBinding = $519f1ddd575d759f$var$$ea2c6a36710de0a8$export$b0eb386be3b9fed8(element, options);
            listBinding.update(value);
        }
    }
};
/*
# more-math

Some simple functions egregiously missing from `Math`
*/ const $519f1ddd575d759f$var$$0e50e8a626908591$export$ba6bc6c220358ed9 = 180 / Math.PI;
const $519f1ddd575d759f$var$$0e50e8a626908591$export$1518e1a62333c8a4 = Math.PI / 180;
function $519f1ddd575d759f$var$$0e50e8a626908591$export$7d15b64cf5a3a4c4(min, v, max) {
    return v < min ? min : v > max ? max : v;
}
function $519f1ddd575d759f$var$$0e50e8a626908591$export$3a89f8d6f6bf6c9f(a, b, t) {
    t = $519f1ddd575d759f$var$$0e50e8a626908591$export$7d15b64cf5a3a4c4(0, t, 1);
    return t * (b - a) + a;
}
const $519f1ddd575d759f$export$5e0dd9fd5d74e0c5 = {
    clamp: $519f1ddd575d759f$var$$0e50e8a626908591$export$7d15b64cf5a3a4c4,
    lerp: $519f1ddd575d759f$var$$0e50e8a626908591$export$3a89f8d6f6bf6c9f
};
const $519f1ddd575d759f$var$$72989831e95a2bab$var$hex2 = (n)=>("00" + Math.round(Number(n)).toString(16)).slice(-2);
class $519f1ddd575d759f$var$$72989831e95a2bab$var$HslColor {
    constructor(r, g, b){
        r /= 255;
        g /= 255;
        b /= 255;
        const l = Math.max(r, g, b);
        const s = l - Math.min(r, g, b);
        const h = s !== 0 ? l === r ? (g - b) / s : l === g ? 2 + (b - r) / s : 4 + (r - g) / s : 0;
        this.h = 60 * h < 0 ? 60 * h + 360 : 60 * h;
        this.s = s !== 0 ? l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s)) : 0;
        this.l = (2 * l - s) / 2;
    }
}
const $519f1ddd575d759f$var$$72989831e95a2bab$var$span = globalThis.document !== undefined ? globalThis.document.createElement("span") : undefined;
class $519f1ddd575d759f$export$892596cec99bc70e {
    static fromCss(spec) {
        let converted = spec;
        if ($519f1ddd575d759f$var$$72989831e95a2bab$var$span instanceof HTMLSpanElement) {
            $519f1ddd575d759f$var$$72989831e95a2bab$var$span.style.color = spec;
            document.body.appendChild($519f1ddd575d759f$var$$72989831e95a2bab$var$span);
            converted = getComputedStyle($519f1ddd575d759f$var$$72989831e95a2bab$var$span).color;
            $519f1ddd575d759f$var$$72989831e95a2bab$var$span.remove();
        }
        const [r, g, b, a] = converted.match(/[\d.]+/g);
        return new $519f1ddd575d759f$export$892596cec99bc70e(Number(r), Number(g), Number(b), a == null ? 1 : Number(a));
    }
    static fromHsl(h, s, l, a = 1) {
        return $519f1ddd575d759f$export$892596cec99bc70e.fromCss(`hsla(${h.toFixed(0)}, ${(s * 100).toFixed(0)}%, ${(l * 100).toFixed(0)}%, ${a.toFixed(2)})`);
    }
    constructor(r, g, b, a = 1){
        this.r = $519f1ddd575d759f$var$$0e50e8a626908591$export$7d15b64cf5a3a4c4(0, r, 255);
        this.g = $519f1ddd575d759f$var$$0e50e8a626908591$export$7d15b64cf5a3a4c4(0, g, 255);
        this.b = $519f1ddd575d759f$var$$0e50e8a626908591$export$7d15b64cf5a3a4c4(0, b, 255);
        this.a = a !== undefined ? $519f1ddd575d759f$var$$0e50e8a626908591$export$7d15b64cf5a3a4c4(0, a, 1) : a = 1;
    }
    get inverse() {
        return new $519f1ddd575d759f$export$892596cec99bc70e(255 - this.r, 255 - this.g, 255 - this.b, this.a);
    }
    get inverseLuminance() {
        const { h: h, s: s, l: l } = this._hsl;
        return $519f1ddd575d759f$export$892596cec99bc70e.fromHsl(h, s, 1 - l, this.a);
    }
    get rgb() {
        const { r: r, g: g, b: b } = this;
        return `rgb(${r.toFixed(0)},${g.toFixed(0)},${b.toFixed(0)})`;
    }
    get rgba() {
        const { r: r, g: g, b: b, a: a } = this;
        return `rgba(${r.toFixed(0)},${g.toFixed(0)},${b.toFixed(0)},${a.toFixed(2)})`;
    }
    get RGBA() {
        return [
            this.r / 255,
            this.g / 255,
            this.b / 255,
            this.a
        ];
    }
    get ARGB() {
        return [
            this.a,
            this.r / 255,
            this.g / 255,
            this.b / 255
        ];
    }
    get _hsl() {
        if (this._hslCached == null) this._hslCached = new $519f1ddd575d759f$var$$72989831e95a2bab$var$HslColor(this.r, this.g, this.b);
        return this._hslCached;
    }
    get hsl() {
        const { h: h, s: s, l: l } = this._hsl;
        return `hsl(${h.toFixed(0)}, ${(s * 100).toFixed(0)}%, ${(l * 100).toFixed(0)}%)`;
    }
    get hsla() {
        const { h: h, s: s, l: l } = this._hsl;
        return `hsla(${h.toFixed(0)}, ${(s * 100).toFixed(0)}%, ${(l * 100).toFixed(0)}%, ${this.a.toFixed(2)})`;
    }
    get mono() {
        const v = this.brightness * 255;
        return new $519f1ddd575d759f$export$892596cec99bc70e(v, v, v);
    }
    get brightness() {
        // http://www.itu.int/rec/R-REC-BT.601
        return (0.299 * this.r + 0.587 * this.g + 0.114 * this.b) / 255;
    }
    get html() {
        return this.a === 1 ? "#" + $519f1ddd575d759f$var$$72989831e95a2bab$var$hex2(this.r) + $519f1ddd575d759f$var$$72989831e95a2bab$var$hex2(this.g) + $519f1ddd575d759f$var$$72989831e95a2bab$var$hex2(this.b) : "#" + $519f1ddd575d759f$var$$72989831e95a2bab$var$hex2(this.r) + $519f1ddd575d759f$var$$72989831e95a2bab$var$hex2(this.g) + $519f1ddd575d759f$var$$72989831e95a2bab$var$hex2(this.b) + $519f1ddd575d759f$var$$72989831e95a2bab$var$hex2(Math.floor(255 * this.a));
    }
    brighten(amount) {
        let { h: h, s: s, l: l } = this._hsl;
        l = $519f1ddd575d759f$var$$0e50e8a626908591$export$7d15b64cf5a3a4c4(0, l + amount * (1 - l), 1);
        return $519f1ddd575d759f$export$892596cec99bc70e.fromHsl(h, s, l, this.a);
    }
    darken(amount) {
        let { h: h, s: s, l: l } = this._hsl;
        l = $519f1ddd575d759f$var$$0e50e8a626908591$export$7d15b64cf5a3a4c4(0, l * (1 - amount), 1);
        return $519f1ddd575d759f$export$892596cec99bc70e.fromHsl(h, s, l, this.a);
    }
    saturate(amount) {
        let { h: h, s: s, l: l } = this._hsl;
        s = $519f1ddd575d759f$var$$0e50e8a626908591$export$7d15b64cf5a3a4c4(0, s + amount * (1 - s), 1);
        return $519f1ddd575d759f$export$892596cec99bc70e.fromHsl(h, s, l, this.a);
    }
    desaturate(amount) {
        let { h: h, s: s, l: l } = this._hsl;
        s = $519f1ddd575d759f$var$$0e50e8a626908591$export$7d15b64cf5a3a4c4(0, s * (1 - amount), 1);
        return $519f1ddd575d759f$export$892596cec99bc70e.fromHsl(h, s, l, this.a);
    }
    rotate(amount) {
        let { h: h, s: s, l: l } = this._hsl;
        h = (h + 360 + amount) % 360;
        return $519f1ddd575d759f$export$892596cec99bc70e.fromHsl(h, s, l, this.a);
    }
    opacity(alpha) {
        const { h: h, s: s, l: l } = this._hsl;
        return $519f1ddd575d759f$export$892596cec99bc70e.fromHsl(h, s, l, alpha);
    }
    swatch() {
        const { r: r, g: g, b: b, a: a } = this;
        console.log(`%c   %c ${this.html}, rgba(${r}, ${g}, ${b}, ${a}), ${this.hsla}`, `background-color: rgba(${r}, ${g}, ${b}, ${a})`, "background-color: #eee");
    }
    blend(otherColor, t) {
        return new $519f1ddd575d759f$export$892596cec99bc70e($519f1ddd575d759f$var$$0e50e8a626908591$export$3a89f8d6f6bf6c9f(this.r, otherColor.r, t), $519f1ddd575d759f$var$$0e50e8a626908591$export$3a89f8d6f6bf6c9f(this.g, otherColor.g, t), $519f1ddd575d759f$var$$0e50e8a626908591$export$3a89f8d6f6bf6c9f(this.b, otherColor.b, t), $519f1ddd575d759f$var$$0e50e8a626908591$export$3a89f8d6f6bf6c9f(this.a, otherColor.a, t));
    }
}
function $519f1ddd575d759f$var$$bed4bed3dcfb6f9a$export$87ae551bf60f4bb(s) {
    return s.replace(/[A-Z]/g, (c)=>{
        return `-${c.toLocaleLowerCase()}`;
    });
}
function $519f1ddd575d759f$var$$bed4bed3dcfb6f9a$export$fd322201efdc650f(s) {
    return s.replace(/-([a-z])/g, (_, c)=>{
        return c.toLocaleUpperCase();
    });
}
const $519f1ddd575d759f$var$$9e0c0b8784c80412$var$templates = {};
const $519f1ddd575d759f$var$$9e0c0b8784c80412$var$create = (tagType, ...contents)=>{
    if ($519f1ddd575d759f$var$$9e0c0b8784c80412$var$templates[tagType] === undefined) $519f1ddd575d759f$var$$9e0c0b8784c80412$var$templates[tagType] = globalThis.document.createElement(tagType);
    const elt = $519f1ddd575d759f$var$$9e0c0b8784c80412$var$templates[tagType].cloneNode();
    const elementProps = {};
    for (const item of contents)if (item instanceof Element || item instanceof DocumentFragment || typeof item === "string" || typeof item === "number") {
        if (elt instanceof HTMLTemplateElement) elt.content.append(item);
        else elt.append(item);
    } else Object.assign(elementProps, item);
    for (const key of Object.keys(elementProps)){
        const value = elementProps[key];
        if (key === "apply") value(elt);
        else if (key === "style") {
            if (typeof value === "object") {
                for (const prop of Object.keys(value))if (prop.startsWith("--")) elt.style.setProperty(prop, value[prop]);
                else elt.style[prop] = value[prop];
            } else elt.setAttribute("style", value);
        } else if (key.match(/^on[A-Z]/) != null) {
            const eventType = key.substring(2).toLowerCase();
            $519f1ddd575d759f$export$af631764ddc44097(elt, eventType, value);
        } else if (key.match(/^bind[A-Z]/) != null) {
            const bindingType = key.substring(4, 5).toLowerCase() + key.substring(5);
            const binding = $519f1ddd575d759f$export$97a1a3e6f39778d2[bindingType];
            if (binding !== undefined) $519f1ddd575d759f$export$2385a24977818dd0(elt, value, binding);
            else throw new Error(`${key} is not allowed, bindings.${bindingType} is not defined`);
        // @ts-expect-error
        } else if (elt[key] !== undefined) elt[key] = value;
        else {
            const attr = $519f1ddd575d759f$var$$bed4bed3dcfb6f9a$export$87ae551bf60f4bb(key);
            if (attr === "class") value.split(" ").forEach((className)=>{
                elt.classList.add(className);
            });
            else if (elt[attr] !== undefined) elt[attr] = value;
            else if (typeof value === "boolean") value ? elt.setAttribute(attr, "") : elt.removeAttribute(attr);
            else elt.setAttribute(attr, value);
        }
    }
    return elt;
};
const $519f1ddd575d759f$var$$9e0c0b8784c80412$var$fragment = (...contents)=>{
    const frag = globalThis.document.createDocumentFragment();
    for (const item of contents)frag.append(item);
    return frag;
};
const $519f1ddd575d759f$export$7a5d735b2ab6389d = new Proxy({
    fragment: $519f1ddd575d759f$var$$9e0c0b8784c80412$var$fragment
}, {
    get (target, tagName) {
        tagName = tagName.replace(/[A-Z]/g, (c)=>`-${c.toLocaleLowerCase()}`);
        if (tagName.match(/^\w+(-\w+)*$/) == null) throw new Error(`${tagName} does not appear to be a valid element tagName`);
        else if (target[tagName] === undefined) target[tagName] = (...contents)=>$519f1ddd575d759f$var$$9e0c0b8784c80412$var$create(tagName, ...contents);
        // @ts-expect-error
        return target[tagName];
    },
    set () {
        throw new Error("You may not add new properties to elements");
    }
});
function $519f1ddd575d759f$var$$49cee7f7f866c751$export$bc59121b0a0fcbd3(styleSheet) {
    return $519f1ddd575d759f$export$7a5d735b2ab6389d.style($519f1ddd575d759f$export$dbf350e5966cf602(styleSheet));
}
const $519f1ddd575d759f$var$$49cee7f7f866c751$var$numericProps = [
    "animation-iteration-count",
    "flex",
    "flex-base",
    "flex-grow",
    "flex-shrink",
    "gap",
    "opacity",
    "order",
    "tab-size",
    "widows",
    "z-index",
    "zoom"
];
const $519f1ddd575d759f$var$$49cee7f7f866c751$var$renderProp = (indentation, cssProp, value)=>{
    if (value === undefined) return "";
    else if (typeof value === "string" || $519f1ddd575d759f$var$$49cee7f7f866c751$var$numericProps.includes(cssProp)) return `${indentation}  ${cssProp}: ${value};`;
    else return `${indentation}  ${cssProp}: ${value}px;`;
};
const $519f1ddd575d759f$var$$49cee7f7f866c751$var$renderStatement = (key, value, indentation = "")=>{
    const cssProp = $519f1ddd575d759f$var$$bed4bed3dcfb6f9a$export$87ae551bf60f4bb(key);
    if (typeof value === "object") {
        const renderedRule = Object.keys(value).map((innerKey)=>$519f1ddd575d759f$var$$49cee7f7f866c751$var$renderStatement(innerKey, value[innerKey], `${indentation}  `)).join("\n");
        return `${indentation}  ${key} {\n${renderedRule}\n${indentation}  }`;
    } else return $519f1ddd575d759f$var$$49cee7f7f866c751$var$renderProp(indentation, cssProp, value);
};
const $519f1ddd575d759f$export$dbf350e5966cf602 = (obj, indentation = "")=>{
    const selectors = Object.keys(obj).map((selector)=>{
        const body = obj[selector];
        if (typeof body === "string") {
            if (selector === "@import") return `@import url('${body}');`;
            throw new Error("top-level string value only allowed for `@import`");
        }
        const rule = Object.keys(body).map((prop)=>$519f1ddd575d759f$var$$49cee7f7f866c751$var$renderStatement(prop, body[prop])).join("\n");
        return `${indentation}${selector} {\n${rule}\n}`;
    });
    return selectors.join("\n\n");
};
const $519f1ddd575d759f$export$90d0ea046136e3ed = (obj)=>{
    const rule = {};
    for (const key of Object.keys(obj)){
        const value = obj[key];
        const kabobKey = $519f1ddd575d759f$var$$bed4bed3dcfb6f9a$export$87ae551bf60f4bb(key);
        rule[`--${kabobKey}`] = typeof value === "number" && value !== 0 ? String(value) + "px" : value;
    }
    return rule;
};
const $519f1ddd575d759f$export$808aaf1b460dc9af = (obj)=>{
    const rule = {};
    for (const key of Object.keys(obj)){
        let value = obj[key];
        if (typeof value === "string" && value.match(/^(#|rgb[a]?\(|hsl[a]?\()/) != null) {
            value = $519f1ddd575d759f$export$892596cec99bc70e.fromCss(value).inverseLuminance.html;
            rule[`--${$519f1ddd575d759f$var$$bed4bed3dcfb6f9a$export$87ae551bf60f4bb(key)}`] = value;
        }
    }
    return rule;
};
const $519f1ddd575d759f$export$3cb96c9f6c8d16a4 = new Proxy({}, {
    get (target, prop) {
        if (target[prop] == null) {
            prop = prop.replace(/[A-Z]/g, (x)=>`-${x.toLocaleLowerCase()}`);
            let [, varName, , isNegative, scaleText, method] = prop.match(/^([^\d_]*)((_)?(\d+)(\w*))?$/);
            varName = `--${varName}`;
            if (scaleText != null) {
                const scale = isNegative == null ? Number(scaleText) / 100 : -Number(scaleText) / 100;
                switch(method){
                    case "b":
                        {
                            const baseColor = getComputedStyle(document.body).getPropertyValue(varName);
                            target[prop] = scale > 0 ? $519f1ddd575d759f$export$892596cec99bc70e.fromCss(baseColor).brighten(scale).rgba : $519f1ddd575d759f$export$892596cec99bc70e.fromCss(baseColor).darken(-scale).rgba;
                        }
                        break;
                    case "s":
                        {
                            const baseColor = getComputedStyle(document.body).getPropertyValue(varName);
                            target[prop] = scale > 0 ? $519f1ddd575d759f$export$892596cec99bc70e.fromCss(baseColor).saturate(scale).rgba : $519f1ddd575d759f$export$892596cec99bc70e.fromCss(baseColor).desaturate(-scale).rgba;
                        }
                        break;
                    case "h":
                        {
                            const baseColor = getComputedStyle(document.body).getPropertyValue(varName);
                            target[prop] = $519f1ddd575d759f$export$892596cec99bc70e.fromCss(baseColor).rotate(scale * 100).rgba;
                            console.log($519f1ddd575d759f$export$892596cec99bc70e.fromCss(baseColor).hsla, $519f1ddd575d759f$export$892596cec99bc70e.fromCss(baseColor).rotate(scale).hsla);
                        }
                        break;
                    case "o":
                        {
                            const baseColor = getComputedStyle(document.body).getPropertyValue(varName);
                            target[prop] = $519f1ddd575d759f$export$892596cec99bc70e.fromCss(baseColor).opacity(scale).rgba;
                        }
                        break;
                    case "":
                        target[prop] = `calc(var(${varName}) * ${scale})`;
                        break;
                    default:
                        console.error(method);
                        throw new Error(`Unrecognized method ${method} for css variable ${varName}`);
                }
            } else target[prop] = `var(${varName})`;
        }
        return target[prop];
    }
});
let $519f1ddd575d759f$var$$cd387b053feba574$var$instanceCount = 0;
class $519f1ddd575d759f$export$16fa2f45be04daa8 extends HTMLElement {
    static elements = $519f1ddd575d759f$export$7a5d735b2ab6389d;
    content = $519f1ddd575d759f$export$7a5d735b2ab6389d.slot();
    static StyleNode(styleSpec) {
        return $519f1ddd575d759f$export$7a5d735b2ab6389d.style($519f1ddd575d759f$export$dbf350e5966cf602(styleSpec));
    }
    static elementCreator(options) {
        if (this._elementCreator == null) {
            let desiredTag = options != null ? options.tag : null;
            if (desiredTag == null) {
                desiredTag = $519f1ddd575d759f$var$$bed4bed3dcfb6f9a$export$87ae551bf60f4bb(this.name);
                if (desiredTag.startsWith("-")) desiredTag = desiredTag.substring(1);
                if (!desiredTag.includes("-")) desiredTag += "-elt";
            }
            let attempts = 0;
            while(this._elementCreator == null){
                attempts += 1;
                const tag = attempts === 1 ? desiredTag : `${desiredTag}-${attempts}`;
                try {
                    window.customElements.define(tag, this, options);
                    this._elementCreator = $519f1ddd575d759f$export$7a5d735b2ab6389d[tag];
                } catch (e) {
                    throw new Error(`could not define ${this.name} as <${tag}>: ${String(e)}`);
                }
            }
        }
        return this._elementCreator;
    }
    initAttributes(...attributeNames) {
        const attributes = {};
        const attributeValues = {};
        const observer = new MutationObserver((mutationsList)=>{
            let triggerRender = false;
            mutationsList.forEach((mutation)=>{
                // eslint-disable-next-line
                triggerRender = !!(mutation.attributeName && attributeNames.includes($519f1ddd575d759f$var$$bed4bed3dcfb6f9a$export$fd322201efdc650f(mutation.attributeName)));
            });
            if (triggerRender && this.queueRender !== undefined) this.queueRender(false);
        });
        observer.observe(this, {
            attributes: true
        });
        attributeNames.forEach((attributeName)=>{
            attributes[attributeName] = $519f1ddd575d759f$var$$5165f04a46b33615$export$b7d58db314e0ac27(this[attributeName]);
            const attributeKabob = $519f1ddd575d759f$var$$bed4bed3dcfb6f9a$export$87ae551bf60f4bb(attributeName);
            Object.defineProperty(this, attributeName, {
                enumerable: false,
                get () {
                    if (typeof attributes[attributeName] === "boolean") return this.hasAttribute(attributeKabob);
                    else {
                        // eslint-disable-next-line
                        if (this.hasAttribute(attributeKabob)) return typeof attributes[attributeName] === "number" ? parseFloat(this.getAttribute(attributeKabob)) : this.getAttribute(attributeKabob);
                        else if (attributeValues[attributeName] !== undefined) return attributeValues[attributeName];
                        else return attributes[attributeName];
                    }
                },
                set (value) {
                    if (typeof attributes[attributeName] === "boolean") {
                        if (value !== this[attributeName]) {
                            // eslint-disable-next-line
                            if (value) this.setAttribute(attributeKabob, "");
                            else this.removeAttribute(attributeKabob);
                            this.queueRender();
                        }
                    } else if (typeof attributes[attributeName] === "number") {
                        if (value !== parseFloat(this[attributeName])) {
                            this.setAttribute(attributeKabob, value);
                            this.queueRender();
                        }
                    } else if (typeof value === "object" || `${value}` !== `${this[attributeName]}`) {
                        if (value === null || value === undefined || typeof value === "object") this.removeAttribute(attributeKabob);
                        else this.setAttribute(attributeKabob, value);
                        this.queueRender();
                        // @ts-expect-error
                        attributeValues[attributeName] = value;
                    }
                }
            });
        });
    }
    initValue() {
        const valueDescriptor = Object.getOwnPropertyDescriptor(this, "value");
        if (valueDescriptor === undefined || valueDescriptor.get !== undefined || valueDescriptor.set !== undefined) return;
        let value = this.hasAttribute("value") ? this.getAttribute("value") : $519f1ddd575d759f$var$$5165f04a46b33615$export$b7d58db314e0ac27(this.value);
        delete this.value;
        Object.defineProperty(this, "value", {
            enumerable: false,
            get () {
                return value;
            },
            set (newValue) {
                if (value !== newValue) {
                    value = newValue;
                    this.queueRender(true);
                }
            }
        });
    }
    get refs() {
        const root = this.shadowRoot != null ? this.shadowRoot : this;
        if (this._refs == null) this._refs = new Proxy({}, {
            get (target, ref) {
                if (target[ref] === undefined) {
                    let element = root.querySelector(`[data-ref="${ref}"]`);
                    if (element == null) element = root.querySelector(ref);
                    if (element == null) throw new Error(`elementRef "${ref}" does not exist!`);
                    element.removeAttribute("data-ref");
                    target[ref] = element;
                }
                return target[ref];
            }
        });
        return this._refs;
    }
    constructor(){
        super();
        $519f1ddd575d759f$var$$cd387b053feba574$var$instanceCount += 1;
        this.initAttributes("hidden");
        this.instanceId = `${this.tagName.toLocaleLowerCase()}-${$519f1ddd575d759f$var$$cd387b053feba574$var$instanceCount}`;
        this._value = $519f1ddd575d759f$var$$5165f04a46b33615$export$b7d58db314e0ac27(this.defaultValue);
    }
    connectedCallback() {
        this.hydrate();
        // super annoyingly, chrome loses its shit if you set *any* attributes in the constructor
        if (this.role != null) this.setAttribute("role", this.role);
        if (this.onResize !== undefined) {
            $519f1ddd575d759f$var$$f314c6851ceb0f9e$export$b13421f1ae71d316.observe(this);
            if (this._onResize == null) this._onResize = this.onResize.bind(this);
            this.addEventListener("resize", this._onResize);
        }
        if (this.value != null && this.getAttribute("value") != null) this._value = this.getAttribute("value");
        this.queueRender();
    }
    disconnectedCallback() {
        $519f1ddd575d759f$var$$f314c6851ceb0f9e$export$b13421f1ae71d316.unobserve(this);
    }
    _changeQueued = false;
    _renderQueued = false;
    queueRender(triggerChangeEvent = false) {
        if (!this._hydrated) return;
        if (!this._changeQueued) this._changeQueued = triggerChangeEvent;
        if (!this._renderQueued) {
            this._renderQueued = true;
            requestAnimationFrame(()=>{
                // TODO add mechanism to allow component developer to have more control over
                // whether input vs. change events are emitted
                if (this._changeQueued) $519f1ddd575d759f$var$$f314c6851ceb0f9e$export$635e15bbd66f01ea(this, "change");
                this._changeQueued = false;
                this._renderQueued = false;
                this.render();
            });
        }
    }
    _hydrated = false;
    hydrate() {
        if (!this._hydrated) {
            this.initValue();
            const _content = typeof this.content === "function" ? this.content() : this.content;
            if (this.styleNode !== undefined) {
                const shadow = this.attachShadow({
                    mode: "open"
                });
                shadow.appendChild(this.styleNode);
                $519f1ddd575d759f$var$$f314c6851ceb0f9e$export$6bb13967611cdb1(shadow, _content);
            } else {
                const existingChildren = [
                    ...this.childNodes
                ];
                if ($519f1ddd575d759f$var$$f314c6851ceb0f9e$export$6bb13967611cdb1(this, _content) && existingChildren.length > 0) {
                    const slotMap = {
                        "": this
                    };
                    [
                        ...this.querySelectorAll("xin-slot")
                    ].forEach((slot)=>{
                        // @ts-expect-error
                        slotMap[slot.name] = slot;
                    });
                    existingChildren.forEach((child)=>{
                        const defaultSlot = slotMap[""];
                        const destSlot = child instanceof Element ? slotMap[child.slot] : defaultSlot;
                        (destSlot !== undefined ? destSlot : defaultSlot).append(child);
                    });
                }
            }
            this._hydrated = true;
        }
    }
    render() {}
}
class $519f1ddd575d759f$var$$cd387b053feba574$var$XinSlot extends $519f1ddd575d759f$export$16fa2f45be04daa8 {
    name = "";
    content = null;
    constructor(){
        super();
        this.initAttributes("name");
    }
}
const $519f1ddd575d759f$var$$cd387b053feba574$export$a0751b4aa1961d4e = $519f1ddd575d759f$var$$cd387b053feba574$var$XinSlot.elementCreator({
    tag: "xin-slot"
});
const $519f1ddd575d759f$export$93b87f7746612069 = (test = ()=>true)=>{
    const savedState = localStorage.getItem("xin-state");
    if (savedState != null) {
        const state = JSON.parse(savedState);
        for (const key of Object.keys(state).filter(test))if ($519f1ddd575d759f$export$966034e6c6823eb0[key] !== undefined) Object.assign($519f1ddd575d759f$export$966034e6c6823eb0[key], state[key]);
        else $519f1ddd575d759f$export$966034e6c6823eb0[key] = state[key];
    }
    const saveState = $519f1ddd575d759f$export$61fc7d43ac8f84b0(()=>{
        const obj = {};
        const state = $519f1ddd575d759f$export$966034e6c6823eb0[$519f1ddd575d759f$var$$e921b0bd4f6415ab$export$bdd0d039ad781534];
        for (const key of Object.keys(state).filter(test))obj[key] = state[key];
        localStorage.setItem("xin-state", JSON.stringify(obj));
        console.log("xin state saved to localStorage");
    }, 500);
    $519f1ddd575d759f$export$d1203567a167490e(test, saveState);
};
var $519f1ddd575d759f$var$$526cc5d62ff194fb$exports = {};
function $519f1ddd575d759f$export$95a552d2395ab4c4(obj) {
    const registered = {};
    Object.keys(obj).forEach((key)=>{
        $519f1ddd575d759f$export$966034e6c6823eb0[key] = obj[key];
        registered[key] = $519f1ddd575d759f$export$966034e6c6823eb0[key];
    });
    return registered;
}



const $6317e842c6d02af7$var$loadedScripts = {};
function $6317e842c6d02af7$export$c6e082819e9a0330(src) {
    if ($6317e842c6d02af7$var$loadedScripts[src] === undefined) {
        const scriptElt = (0, $519f1ddd575d759f$export$7a5d735b2ab6389d).script({
            src: src
        });
        // @ts-expect-error
        document.head.append(scriptElt);
        $6317e842c6d02af7$var$loadedScripts[src] = new Promise((resolve)=>{
            scriptElt.onload = resolve;
        });
    }
    return $6317e842c6d02af7$var$loadedScripts[src];
}
const $6317e842c6d02af7$var$loadedStyleSheets = {};
function $6317e842c6d02af7$export$63257fda812a683f(href) {
    if ($6317e842c6d02af7$var$loadedStyleSheets[href] === undefined) {
        const linkElement = (0, $519f1ddd575d759f$export$7a5d735b2ab6389d).link({
            rel: "stylesheet",
            type: "text/css",
            href: href
        });
        // @ts-expect-error
        document.head.append(linkElement);
        $6317e842c6d02af7$var$loadedScripts[href] = new Promise((resolve)=>{
            linkElement.onload = resolve;
        });
    }
    return $6317e842c6d02af7$var$loadedStyleSheets[href];
}


const $6f5c65c3cb8e7707$var$bodymovinAvailable = // @ts-expect-error
globalThis.bodymovin === undefined ? (0, $6317e842c6d02af7$export$c6e082819e9a0330)("https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js") : Promise.resolve();
class $6f5c65c3cb8e7707$var$BodymovinPlayer extends (0, $519f1ddd575d759f$export$16fa2f45be04daa8) {
    content = null;
    src = "";
    json = "";
    config = {
        renderer: "svg",
        loop: true,
        autoplay: true
    };
    animation;
    styleNode = (0, $519f1ddd575d759f$export$16fa2f45be04daa8).StyleNode({
        ":host": {
            width: 400,
            height: 400,
            display: "inline-block"
        }
    });
    _loading = false;
    get loading() {
        return this._loading;
    }
    constructor(){
        super();
        this.initAttributes("src", "json");
    }
    doneLoading = ()=>{
        this._loading = false;
    };
    load = ()=>{
        this._loading = true;
        this.config.container = this.shadowRoot;
        if (this.json !== "") {
            this.config.animationData = this.json;
            delete this.config.path;
        } else if (this.src !== "") {
            delete this.config.animationData;
            this.config.path = this.src;
        } else console.log("%c<bodymovin-player>%c expected either %cjson%c (animation data) or %csrc% c(url) but found neither.", "color: #44f; background: #fff; padding: 0 5px", "color: default", "color: #44f; background: #fff; padding: 0 5px", "color: default", "color: #44f; background: #fff; padding: 0 5px", "color: default");
        if (this.animation) {
            this.animation.destroy();
            this.shadowRoot.querySelector("svg").remove();
        }
        // @ts-expect-error
        this.animation = globalThis.bodymovin.loadAnimation(this.config);
        this.animation.addEventListener("DOMLoaded", this.doneLoading);
    };
    render() {
        super.render();
        $6f5c65c3cb8e7707$var$bodymovinAvailable.then(this.load).catch((e)=>{
            console.error(e);
        });
    }
}
const $6f5c65c3cb8e7707$export$d75ad8f79fe096cb = $6f5c65c3cb8e7707$var$BodymovinPlayer.elementCreator({
    tag: "bodymovin-player"
});




const $d31023715f476306$export$fb335fe3908368a2 = (callback, cursor)=>{
    const tracker = (0, $519f1ddd575d759f$export$7a5d735b2ab6389d).div({
        style: {
            content: " ",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            cursor: cursor
        }
    });
    // @ts-expect-error
    document.body.append(tracker);
    tracker.addEventListener("mousemove", (event)=>{
        if (callback(event) === true) tracker.remove();
    });
    tracker.addEventListener("mouseup", (event)=>{
        callback(event);
        tracker.remove();
    });
};


function $9053df33169f6cdf$var$defaultWidth(array, prop, charWidth) {
    const example = array.find((item)=>item[prop] !== undefined && item[prop] !== null);
    if (example !== undefined) {
        const value = example[prop];
        switch(typeof value){
            case "string":
                if (value.match(/^\d+(\.\d+)?$/)) return 6 * charWidth;
                else if (value.includes(" ")) return 20 * charWidth;
                else return 12 * charWidth;
            case "number":
                return 6 * charWidth;
            case "boolean":
                return 5 * charWidth;
            case "object":
                return false;
            default:
                return 8 * charWidth;
        }
    }
    return false;
}
const { div: $9053df33169f6cdf$var$div, span: $9053df33169f6cdf$var$span, template: $9053df33169f6cdf$var$template } = (0, $519f1ddd575d759f$export$7a5d735b2ab6389d);
const $9053df33169f6cdf$var$passThru = (array)=>array;
class $9053df33169f6cdf$var$DataTable extends (0, $519f1ddd575d759f$export$16fa2f45be04daa8) {
    value = {
        array: [],
        filteredArray: []
    };
    charWidth = 15;
    rowHeight = 30;
    minColumnWidth = 30;
    constructor(){
        super();
    }
    get filter() {
        return typeof this.value.filter === "function" ? this.value.filter : $9053df33169f6cdf$var$passThru;
    }
    get columns() {
        if (!Array.isArray(this.value.columns)) {
            const { array: array } = this.value;
            this.value.columns = Object.keys(array[0]).map((prop)=>{
                const width = $9053df33169f6cdf$var$defaultWidth(array, prop, this.charWidth);
                return {
                    name: prop.replace(/([a-z])([A-Z])/g, "$1 $2").toLocaleLowerCase(),
                    prop: prop,
                    visible: width !== false,
                    width: width ? width : 0
                };
            });
        }
        return this.value.columns;
    }
    get visibleColumns() {
        return this.columns.filter((c)=>c.visible !== false);
    }
    content = null;
    getColumn(event) {
        // @ts-expect-error
        const x = event.clientX - this.getBoundingClientRect().x;
        let boundaryX = 0;
        const log = [];
        const column = this.visibleColumns.find((options)=>{
            if (options.visible !== false) {
                boundaryX += options.width;
                log.push(boundaryX);
                return Math.abs(x - boundaryX) < 5;
            }
        });
        return column;
    }
    trackMouse = (event)=>{
        const column = this.getColumn(event);
        if (column !== undefined) this.style.cursor = "col-resize";
        else this.style.cursor = "";
    };
    resizeColumn = (event)=>{
        const column = this.getColumn(event);
        if (column !== undefined) {
            const origWidth = column.width;
            // @ts-expect-error
            const origX = event.clientX;
            (0, $d31023715f476306$export$fb335fe3908368a2)((event)=>{
                // @ts-expect-error
                const width = event.clientX - origX + origWidth;
                column.width = width > this.minColumnWidth ? width : this.minColumnWidth;
                this.setColumnWidths();
            }, "col-resize");
        }
    };
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener("mousemove", this.trackMouse);
        this.addEventListener("mousedown", this.resizeColumn);
    }
    setColumnWidths() {
        this.style.setProperty("--grid-columns", this.visibleColumns.map((c)=>c.width + "px").join(" "));
    }
    render() {
        super.render();
        (0, $519f1ddd575d759f$export$966034e6c6823eb0)[this.instanceId] = this.filter((0, $519f1ddd575d759f$export$5dcba2d45033d435)(this.value.array));
        this.textContent = "";
        this.style.display = "flex";
        this.style.flexDirection = "column";
        const { visibleColumns: visibleColumns } = this;
        this.setColumnWidths();
        const rowStyle = {
            display: "grid",
            gridTemplateColumns: (0, $519f1ddd575d759f$export$3cb96c9f6c8d16a4).gridColumns,
            height: this.rowHeight + "px"
        };
        const cellStyle = {
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
        };
        const sorterStyle = {
            display: "inline-block",
            minWidth: (0, $519f1ddd575d759f$export$3cb96c9f6c8d16a4).charWidth,
            cursor: "default"
        };
        this.append($9053df33169f6cdf$var$div({
            class: "thead"
        }, $9053df33169f6cdf$var$div({
            class: "tr",
            style: rowStyle
        }, ...visibleColumns.map((c)=>$9053df33169f6cdf$var$span({
                class: "th",
                style: cellStyle
            }, c.name, c.sortable !== false ? $9053df33169f6cdf$var$span({
                class: "t-sorter",
                style: sorterStyle
            }) : undefined)))), $9053df33169f6cdf$var$div({
            class: "tbody",
            style: {
                content: " ",
                minHeight: "200px",
                flex: "1 1 100px",
                overflow: "hidden",
                overflowY: "scroll"
            },
            bindList: {
                value: this.instanceId,
                virtual: {
                    height: this.rowHeight
                }
            }
        }, $9053df33169f6cdf$var$template($9053df33169f6cdf$var$div({
            class: "tr",
            style: rowStyle
        }, ...visibleColumns.map((options)=>$9053df33169f6cdf$var$span({
                class: "td",
                style: cellStyle,
                bindText: `^.${options.prop}`
            }))))));
    }
}
const $9053df33169f6cdf$export$f71ce0a5ddbe8fa0 = $9053df33169f6cdf$var$DataTable.elementCreator({
    tag: "data-table"
});




const $2c86e776c99cb064$var$cssAvailable = (0, $6317e842c6d02af7$export$63257fda812a683f)("https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.css");
const $2c86e776c99cb064$var$mapboxAvailable = (0, $6317e842c6d02af7$export$c6e082819e9a0330)("https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.js");
const $2c86e776c99cb064$export$7d6f3ccbb0a81c30 = [
    {
        name: "streets",
        url: "mapbox://styles/mapbox/streets-v10"
    },
    {
        name: "outdoors",
        url: "mapbox://styles/mapbox/outdoors-v10"
    },
    {
        name: "light",
        url: "mapbox://styles/mapbox/light-v9"
    },
    {
        name: "dark",
        url: "mapbox://styles/mapbox/dark-v9"
    },
    {
        name: "satellite",
        url: "mapbox://styles/mapbox/satellite-v9"
    },
    {
        name: "sateliite + streets",
        url: "mapbox://styles/mapbox/satellite-streets-v10"
    },
    {
        name: "preview day",
        url: "mapbox://styles/mapbox/navigation-preview-day-v2"
    },
    {
        name: "preview night",
        url: "mapbox://styles/mapbox/navigation-preview-night-v2"
    },
    {
        name: "guidance day",
        url: "mapbox://styles/mapbox/navigation-guidance-day-v2"
    },
    {
        name: "guidance night",
        url: "mapbox://styles/mapbox/navigation-guidance-night-v2"
    }
];
const { div: $2c86e776c99cb064$var$div } = (0, $519f1ddd575d759f$export$7a5d735b2ab6389d);
class $2c86e776c99cb064$var$MapBox extends (0, $519f1ddd575d759f$export$16fa2f45be04daa8) {
    coords = "65.01715565258993,25.48081004203459,12";
    content = $2c86e776c99cb064$var$div({
        style: {
            width: "100%",
            height: "100%"
        }
    });
    get map() {
        return this._map;
    }
    mapStyle = $2c86e776c99cb064$export$7d6f3ccbb0a81c30[0];
    token = "";
    _map;
    styleNode = (0, $519f1ddd575d759f$export$16fa2f45be04daa8).StyleNode({
        ":host": {
            display: "inline-block",
            position: "relative",
            width: "400px",
            height: "400px",
            textAlign: "left"
        }
    });
    constructor(){
        super();
        this.initAttributes("coords", "token", "mapStyle");
    }
    connectedCallback() {
        super.connectedCallback();
        if (!this.token) console.error("mapbox requires an access token which you can provide via the token attribute");
    }
    render() {
        super.render();
        if (!this.token) return;
        const { div: div } = this.refs;
        const [long, lat, zoom] = this.coords.split(",").map((x)=>Number(x));
        $2c86e776c99cb064$var$mapboxAvailable.then(()=>{
            // @ts-expect-error
            globalThis.mapboxgl.accessToken = this.token;
            // @ts-expect-error
            this._map = new globalThis.mapboxgl.Map({
                container: div,
                style: this.mapStyle.url,
                zoom: zoom,
                center: [
                    lat,
                    long
                ]
            });
            this._map.on("render", ()=>this._map.resize());
        });
    }
}
const $2c86e776c99cb064$export$ca243e53be209efb = $2c86e776c99cb064$var$MapBox.elementCreator({
    tag: "map-box"
});



const { div: $fd71018faf00c7f0$var$div, slot: $fd71018faf00c7f0$var$slot } = (0, $519f1ddd575d759f$export$7a5d735b2ab6389d);
class $fd71018faf00c7f0$var$TabSelector extends (0, $519f1ddd575d759f$export$16fa2f45be04daa8) {
    value = 0;
    styleNode = (0, $519f1ddd575d759f$export$16fa2f45be04daa8).StyleNode({
        ":host": {
            display: "flex",
            flexDirection: "column",
            position: "relative",
            overflow: "hidden"
        },
        slot: {
            position: "relative",
            display: "block",
            flex: "1 1 auto",
            overflow: "hidden",
            overflowY: "auto"
        },
        "::slotted([hidden])": {
            // @ts-expect-error
            display: "none !important"
        },
        ":host .tab-holder": {
            display: "flex",
            flexDirection: "column"
        },
        ":host .tabs": {
            display: "flex",
            userSelect: "none"
        },
        ":host .tabs > div": {
            padding: `${(0, $519f1ddd575d759f$export$3cb96c9f6c8d16a4).spacing50} ${(0, $519f1ddd575d759f$export$3cb96c9f6c8d16a4).spacing}`,
            cursor: "default"
        },
        ":host .tabs > .selected": {
            color: (0, $519f1ddd575d759f$export$3cb96c9f6c8d16a4).tabSelectorSelectedColor
        },
        ":host .border": {
            background: "var(--tab-selector-bar-color, #ccc)"
        },
        ":host .border > .selected": {
            content: " ",
            width: 0,
            height: "var(--tab-selector-bar-height, 2px)",
            background: (0, $519f1ddd575d759f$export$3cb96c9f6c8d16a4).tabSelectorSelectedColor,
            transition: "ease-out 0.2s"
        }
    });
    content = [
        $fd71018faf00c7f0$var$div({
            class: "tab-holder"
        }, $fd71018faf00c7f0$var$div({
            class: "tabs",
            dataRef: "tabs"
        }), $fd71018faf00c7f0$var$div({
            class: "border"
        }, $fd71018faf00c7f0$var$div({
            class: "selected",
            dataRef: "selected"
        }))),
        $fd71018faf00c7f0$var$slot()
    ];
    constructor(){
        super();
        this.initAttributes("anne", "example");
    }
    // @ts-expect-error
    keyTab = (event)=>{
        const { tabs: tabs } = this.refs;
        const tabIndex = [
            ...tabs.children
        ].indexOf(event.target);
        switch(event.key){
            case "ArrowLeft":
                this.value = (tabIndex + Number(tabs.children.length) - 1) % tabs.children.length;
                tabs.children[this.value].focus();
                event.preventDefault();
                break;
            case "ArrowRight":
                this.value = (tabIndex + 1) % tabs.children.length;
                tabs.children[this.value].focus();
                event.preventDefault();
                break;
            case " ":
                this.pickTab(event);
                event.preventDefault();
                break;
            default:
        }
    };
    pickTab = (event)=>{
        const { tabs: tabs } = this.refs;
        // @ts-expect-error
        const target = event.target;
        const tabIndex = [
            ...tabs.children
        ].indexOf(target);
        if (tabIndex > -1) this.value = tabIndex;
    };
    setupTabs = ()=>{
        const { tabs: tabs } = this.refs;
        const tabBodies = [
            ...this.querySelectorAll("[name]")
        ];
        tabs.textContent = "";
        for (const tabBody of tabBodies)tabs.append($fd71018faf00c7f0$var$div(tabBody.getAttribute("name"), {
            tabindex: 0
        }));
    };
    connectedCallback() {
        super.connectedCallback();
        const { tabs: tabs } = this.refs;
        tabs.addEventListener("click", this.pickTab);
        tabs.addEventListener("keydown", this.keyTab);
        this.setupTabs();
    }
    render() {
        const { tabs: tabs, selected: selected } = this.refs;
        const tabBodies = [
            ...this.querySelectorAll("[name]")
        ];
        for(let i = 0; i < tabBodies.length; i++){
            const tabBody = tabBodies[i];
            const tab = tabs.children[i];
            if (this.value === Number(i)) {
                tab.classList.add("selected");
                selected.style.marginLeft = `${tab.offsetLeft - tabs.offsetLeft}px`;
                selected.style.width = `${tab.offsetWidth}px`;
                tabBody.removeAttribute("hidden");
            } else {
                tab.classList.remove("selected");
                tabBody.setAttribute("hidden", "");
            }
        }
    }
}
const $fd71018faf00c7f0$export$a932f737dcd864a2 = $fd71018faf00c7f0$var$TabSelector.elementCreator({
    tag: "tab-selector"
});






export {$6f5c65c3cb8e7707$export$d75ad8f79fe096cb as bodymovinPlayer, $9053df33169f6cdf$export$f71ce0a5ddbe8fa0 as dataTable, $2c86e776c99cb064$export$ca243e53be209efb as mapBox, $fd71018faf00c7f0$export$a932f737dcd864a2 as tabSelector, $d31023715f476306$export$fb335fe3908368a2 as trackMouse, $6317e842c6d02af7$export$c6e082819e9a0330 as scriptTag, $6317e842c6d02af7$export$63257fda812a683f as styleSheet};
//# sourceMappingURL=index.js.map
