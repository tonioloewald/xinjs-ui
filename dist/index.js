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
            else if (_prop === $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$bdd0d039ad781534) {
                while($519f1ddd575d759f$export$40700dafb97c3799(target) !== undefined)target = $519f1ddd575d759f$export$5dcba2d45033d435(target);
                return target;
            }
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
            value = $519f1ddd575d759f$export$5dcba2d45033d435(value);
            const fullPath = $519f1ddd575d759f$var$$547f11326d897190$var$extendPath(path, prop);
            if ($519f1ddd575d759f$var$$547f11326d897190$var$debugPaths && !$519f1ddd575d759f$var$$547f11326d897190$export$a678af82bf766611(fullPath)) throw new Error(`setting invalid path ${fullPath}`);
            const existing = $519f1ddd575d759f$export$5dcba2d45033d435($519f1ddd575d759f$export$966034e6c6823eb0[fullPath]);
            // eslint-disable-next-line
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
    if (dataBindings == null) return;
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
const $519f1ddd575d759f$var$$f314c6851ceb0f9e$export$6bb13967611cdb1 = (elt, content, cloneElements = true)=>{
    if (elt != null && content != null) {
        if (typeof content === "string") elt.textContent = content;
        else if (Array.isArray(content)) content.forEach((node)=>{
            elt.append(node instanceof Node && cloneElements ? $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$fa8cc6a36b1ccd7f(node) : node);
        });
        else if (content instanceof HTMLElement || content instanceof DocumentFragment) elt.append(cloneElements ? $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$fa8cc6a36b1ccd7f(content) : content);
        else throw new Error("expect text content or document node");
    }
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
    constructor(boundElement, options = {}){
        this._array = [];
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
    // @ts-expect-error
    let listBinding = boundElement[$519f1ddd575d759f$var$$ea2c6a36710de0a8$var$listBindingRef];
    if (listBinding == null) {
        listBinding = new $519f1ddd575d759f$var$$ea2c6a36710de0a8$var$ListBinding(boundElement, options);
        // @ts-expect-error
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
const $519f1ddd575d759f$var$$9e0c0b8784c80412$var$MATH = "http://www.w3.org/1998/Math/MathML";
const $519f1ddd575d759f$var$$9e0c0b8784c80412$var$SVG = "http://www.w3.org/2000/svg";
const $519f1ddd575d759f$var$$9e0c0b8784c80412$var$templates = {};
const $519f1ddd575d759f$var$$9e0c0b8784c80412$var$create = (tagType, ...contents)=>{
    if ($519f1ddd575d759f$var$$9e0c0b8784c80412$var$templates[tagType] === undefined) {
        const [tag, namespace] = tagType.split("|");
        if (namespace === undefined) $519f1ddd575d759f$var$$9e0c0b8784c80412$var$templates[tagType] = globalThis.document.createElement(tag);
        else $519f1ddd575d759f$var$$9e0c0b8784c80412$var$templates[tagType] = globalThis.document.createElementNS(namespace, tag);
    }
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
        } else if (elt[key] !== undefined) {
            // MathML is only supported on 91% of browsers, and not on the Raspberry Pi Chromium
            const { MathMLElement: MathMLElement } = globalThis;
            if (elt instanceof SVGElement || MathMLElement !== undefined && elt instanceof MathMLElement) elt.setAttribute(key, value);
            else elt[key] = value;
        } else {
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
        if (target[tagName] === undefined) target[tagName] = (...contents)=>$519f1ddd575d759f$var$$9e0c0b8784c80412$var$create(tagName, ...contents);
        return target[tagName];
    },
    set () {
        throw new Error("You may not add new properties to elements");
    }
});
const $519f1ddd575d759f$export$cf20112a1bc148da = new Proxy({
    fragment: $519f1ddd575d759f$var$$9e0c0b8784c80412$var$fragment
}, {
    get (target, tagName) {
        if (target[tagName] === undefined) target[tagName] = (...contents)=>$519f1ddd575d759f$var$$9e0c0b8784c80412$var$create(`${tagName}|${$519f1ddd575d759f$var$$9e0c0b8784c80412$var$SVG}`, ...contents);
        return target[tagName];
    },
    set () {
        throw new Error("You may not add new properties to elements");
    }
});
const $519f1ddd575d759f$export$8ec252cfdd664597 = new Proxy({
    fragment: $519f1ddd575d759f$var$$9e0c0b8784c80412$var$fragment
}, {
    get (target, tagName) {
        if (target[tagName] === undefined) target[tagName] = (...contents)=>$519f1ddd575d759f$var$$9e0c0b8784c80412$var$create(`${tagName}|${$519f1ddd575d759f$var$$9e0c0b8784c80412$var$MATH}`, ...contents);
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
const $519f1ddd575d759f$export$75c0e6adb3e38f31 = new Proxy({}, {
    get (target, prop) {
        if (target[prop] === undefined) {
            const varName = `--${prop.replace(/[A-Z]/g, (x)=>`-${x.toLocaleLowerCase()}`)}`;
            target[prop] = (val)=>`var(${varName}, ${val})`;
        }
        return target[prop];
    }
});
let $519f1ddd575d759f$var$$cd387b053feba574$var$anonymousElementCount = 0;
function $519f1ddd575d759f$var$$cd387b053feba574$var$anonElementTag() {
    return `custom-elt${($519f1ddd575d759f$var$$cd387b053feba574$var$anonymousElementCount++).toString(36)}`;
}
let $519f1ddd575d759f$var$$cd387b053feba574$var$instanceCount = 0;
class $519f1ddd575d759f$export$16fa2f45be04daa8 extends HTMLElement {
    static #_ = (()=>{
        this.elements = $519f1ddd575d759f$export$7a5d735b2ab6389d;
    })();
    static StyleNode(styleSpec) {
        return $519f1ddd575d759f$export$7a5d735b2ab6389d.style($519f1ddd575d759f$export$dbf350e5966cf602(styleSpec));
    }
    static elementCreator(options) {
        if (this._elementCreator == null) {
            let tagName = options != null ? options.tag : null;
            if (tagName == null) {
                if (typeof this.name === "string" && this.name !== "") {
                    tagName = $519f1ddd575d759f$var$$bed4bed3dcfb6f9a$export$87ae551bf60f4bb(this.name);
                    if (tagName.startsWith("-")) tagName = tagName.slice(1);
                } else tagName = $519f1ddd575d759f$var$$cd387b053feba574$var$anonElementTag();
            }
            if (customElements.get(tagName) != null) console.warn(`${tagName} is already defined`);
            if (tagName.match(/\w+(-\w+)+/) == null) {
                console.warn(`${tagName} is not a legal tag for a custom-element`);
                tagName = $519f1ddd575d759f$var$$cd387b053feba574$var$anonElementTag();
            }
            while(customElements.get(tagName) !== undefined)tagName = $519f1ddd575d759f$var$$cd387b053feba574$var$anonElementTag();
            window.customElements.define(tagName, this, options);
            this._elementCreator = $519f1ddd575d759f$export$7a5d735b2ab6389d[tagName];
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
        console.warn("refs and data-ref are deprecated, use the part attribute and .parts instead");
        const root = this.shadowRoot != null ? this.shadowRoot : this;
        if (this._refs == null) this._refs = new Proxy({}, {
            get (target, ref) {
                if (target[ref] === undefined) {
                    let element = root.querySelector(`[part="${ref}"],[data-ref="${ref}"]`);
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
    get parts() {
        const root = this.shadowRoot != null ? this.shadowRoot : this;
        if (this._refs == null) this._refs = new Proxy({}, {
            get (target, ref) {
                if (target[ref] === undefined) {
                    let element = root.querySelector(`[part="${ref}"]`);
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
        this.content = $519f1ddd575d759f$export$7a5d735b2ab6389d.slot();
        this._changeQueued = false;
        this._renderQueued = false;
        this._hydrated = false;
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
    hydrate() {
        if (!this._hydrated) {
            this.initValue();
            const cloneElements = typeof this.content !== "function";
            const _content = typeof this.content === "function" ? this.content() : this.content;
            if (this.styleNode !== undefined) {
                const shadow = this.attachShadow({
                    mode: "open"
                });
                shadow.appendChild(this.styleNode);
                $519f1ddd575d759f$var$$f314c6851ceb0f9e$export$6bb13967611cdb1(shadow, _content, cloneElements);
            } else if (_content !== null) {
                const existingChildren = [
                    ...this.childNodes
                ];
                $519f1ddd575d759f$var$$f314c6851ceb0f9e$export$6bb13967611cdb1(this, _content, cloneElements);
                this.isSlotted = this.querySelector("slot,xin-slot") !== undefined;
                const slots = [
                    ...this.querySelectorAll("slot")
                ];
                if (slots.length > 0) slots.forEach($519f1ddd575d759f$var$$cd387b053feba574$var$XinSlot.replaceSlot);
                if (existingChildren.length > 0) {
                    const slotMap = {
                        "": this
                    };
                    [
                        ...this.querySelectorAll("xin-slot")
                    ].forEach((slot)=>{
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
    static replaceSlot(slot) {
        const _slot = document.createElement("xin-slot");
        if (slot.name !== "") _slot.setAttribute("name", slot.name);
        slot.replaceWith(_slot);
    }
    constructor(){
        super();
        this.name = "";
        this.content = null;
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
function $6317e842c6d02af7$export$c6e082819e9a0330(src, existingSymbolName) {
    if ($6317e842c6d02af7$var$loadedScripts[src] === undefined) {
        if (existingSymbolName !== undefined) {
            // @ts-expect-error
            const existing = globalThis[existingSymbolName];
            $6317e842c6d02af7$var$loadedScripts[src] = Promise.resolve({
                [existingSymbolName]: existing
            });
        }
        const scriptElt = (0, $519f1ddd575d759f$export$7a5d735b2ab6389d).script({
            src: src
        });
        // @ts-expect-error
        document.head.append(scriptElt);
        $6317e842c6d02af7$var$loadedScripts[src] = new Promise((resolve)=>{
            scriptElt.onload = ()=>resolve(globalThis);
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
        $6317e842c6d02af7$var$loadedStyleSheets[href] = new Promise((resolve)=>{
            linkElement.onload = resolve;
        });
    }
    return $6317e842c6d02af7$var$loadedStyleSheets[href];
}


class $6f5c65c3cb8e7707$var$BodymovinPlayer extends (0, $519f1ddd575d759f$export$16fa2f45be04daa8) {
    content = null;
    src = "";
    json = "";
    config = {
        renderer: "svg",
        loop: true,
        autoplay: true
    };
    static bodymovinAvailable;
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
        if ($6f5c65c3cb8e7707$var$BodymovinPlayer.bodymovinAvailable === undefined) $6f5c65c3cb8e7707$var$BodymovinPlayer.bodymovinAvailable = (0, $6317e842c6d02af7$export$c6e082819e9a0330)("https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js", "bodymovin");
    }
    doneLoading = ()=>{
        this._loading = false;
    };
    load = ({ bodymovin: bodymovin })=>{
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
        this.animation = bodymovin.loadAnimation(this.config);
        this.animation.addEventListener("DOMLoaded", this.doneLoading);
    };
    render() {
        super.render();
        $6f5c65c3cb8e7707$var$BodymovinPlayer.bodymovinAvailable.then(this.load).catch((e)=>{
            console.error(e);
        });
    }
}
const $6f5c65c3cb8e7707$export$d75ad8f79fe096cb = $6f5c65c3cb8e7707$var$BodymovinPlayer.elementCreator({
    tag: "bodymovin-player"
});




const $caad8cb31595333a$var$ACE_BASE_URL = "https://cdnjs.cloudflare.com/ajax/libs/ace/1.23.2/";
const $caad8cb31595333a$var$DEFAULT_THEME = "ace/theme/tomorrow";
const $caad8cb31595333a$var$makeCodeEditor = async (codeElement, mode = "html", options = {}, theme = $caad8cb31595333a$var$DEFAULT_THEME)=>{
    const { ace: ace } = await (0, $6317e842c6d02af7$export$c6e082819e9a0330)(`${$caad8cb31595333a$var$ACE_BASE_URL}ace.min.js`);
    ace.config.set("basePath", $caad8cb31595333a$var$ACE_BASE_URL);
    const editor = ace.edit(codeElement, {
        mode: `ace/mode/${mode}`,
        tabSize: 2,
        useSoftTabs: true,
        useWorker: false,
        ...options
    });
    editor.setTheme(theme);
    return editor;
};
class $caad8cb31595333a$var$CodeEditor extends (0, $519f1ddd575d759f$export$16fa2f45be04daa8) {
    value = "";
    mode = "javascript";
    disabled = false;
    role = "code editor";
    get editor() {
        return this._editor;
    }
    _editor;
    _editorPromise;
    options = {};
    theme = $caad8cb31595333a$var$DEFAULT_THEME;
    styleNode = (0, $519f1ddd575d759f$export$16fa2f45be04daa8).StyleNode({
        ":host": {
            display: "block",
            position: "relative"
        }
    });
    constructor(){
        super();
        this.initAttributes("mode", "theme", "disabled");
    }
    onResize() {
        if (this.editor !== undefined) this.editor.resize(true);
    }
    updateValue = async (event)=>{
        // changes to the element will be targted on the custom-element
        // changes by the user will target the textarea created by ace editor
        // @ts-expect-error
        if (event.target !== this && this.editor) this.value = this.editor.getValue();
    };
    connectedCallback() {
        super.connectedCallback();
        if (this.value === "") this.value = this.textContent.trim("\n");
        if (this._editorPromise === undefined) {
            this._editorPromise = $caad8cb31595333a$var$makeCodeEditor(this, this.mode, this.options, this.theme);
            this._editorPromise.then((editor)=>{
                this._editor = editor;
                editor.setValue(this.value, 1);
            });
        }
        this.addEventListener("change", this.updateValue);
    }
    render() {
        super.render();
        if (this.editor !== undefined) {
            if (this.editor.getValue() !== this.value) this.editor.setValue(this.value);
        }
        if (this._editorPromise !== undefined) this._editorPromise.then((editor)=>editor.setReadOnly(this.disabled));
    }
}
const $caad8cb31595333a$export$d89b6f4d34274146 = $caad8cb31595333a$var$CodeEditor.elementCreator({
    tag: "code-editor"
});




const $def26fc1ab27d844$export$c947e3cd16175f27 = (event, callback, cursor = "default")=>{
    const isTouchEvent = event.type.startsWith("touch");
    if (!isTouchEvent) {
        const origX = event.clientX;
        const origY = event.clientY;
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
        const wrappedCallback = (event)=>{
            const dx = event.clientX - origX;
            const dy = event.clientY - origY;
            if (callback(dx, dy, event) === true) tracker.remove();
        };
        tracker.addEventListener("mousemove", wrappedCallback, {
            passive: true
        });
        tracker.addEventListener("mouseup", wrappedCallback, {
            passive: true
        });
    } else if (event.type.startsWith("touch")) {
        const origX = event.touches[0].clientX;
        const origY = event.touches[0].clientY;
        const target = event.target;
        let dx = 0;
        let dy = 0;
        const wrappedCallback = (event)=>{
            if (event.touches.length > 0) {
                dx = event.touches[0].clientX - origX;
                dy = event.touches[0].clientY - origY;
            }
            if (callback(dx, dy, event) === true || event.touches.length === 0) {
                target.removeEventListener("touchmove", wrappedCallback);
                target.removeEventListener("touchend", wrappedCallback);
                target.removeEventListener("touchcancel", wrappedCallback);
            }
        };
        target.addEventListener("touchmove", wrappedCallback, {
            passive: true
        });
        target.addEventListener("touchend", wrappedCallback, {
            passive: true
        });
        target.addEventListener("touchcancel", wrappedCallback, {
            passive: true
        });
    }
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
    get value() {
        return {
            array: this.array,
            filter: this.filter,
            columns: this.columns
        };
    }
    set value(data) {
        const { array: array, columns: columns, filter: filter } = (0, $519f1ddd575d759f$export$5dcba2d45033d435)(data);
        if (this._array !== array || this._columns !== columns || this._filter !== filter) this.queueRender();
        this._array = array || [];
        this._columns = columns || null;
        this._filter = filter || $9053df33169f6cdf$var$passThru;
    }
    _array = [];
    _columns = null;
    _filter = $9053df33169f6cdf$var$passThru;
    charWidth = 15;
    rowHeight = 30;
    minColumnWidth = 30;
    get virtual() {
        return this.rowHeight > 0 ? {
            height: this.rowHeight
        } : undefined;
    }
    constructor(){
        super();
        this.initAttributes("rowHeight", "charWidth", "minColumnWidth");
    }
    get array() {
        return this._array;
    }
    set array(newArray) {
        this._array = (0, $519f1ddd575d759f$export$5dcba2d45033d435)(newArray);
        this.queueRender();
    }
    get filter() {
        return this._filter;
    }
    set filter(filterFunc) {
        if (this._filter !== filterFunc) {
            this._filter = filterFunc;
            this.queueRender();
        }
    }
    get columns() {
        if (!Array.isArray(this._columns)) {
            const { _array: _array } = this;
            this._columns = Object.keys(_array[0] || {}).map((prop)=>{
                const width = $9053df33169f6cdf$var$defaultWidth(_array, prop, this.charWidth);
                return {
                    name: prop.replace(/([a-z])([A-Z])/g, "$1 $2").toLocaleLowerCase(),
                    prop: prop,
                    align: typeof _array[0][prop] === "number" || _array[0][prop] !== "" && !isNaN(_array[0][prop]) ? "right" : "left",
                    visible: width !== false,
                    width: width ? width : 0
                };
            });
        }
        return this._columns;
    }
    set columns(newColumns) {
        this._columns = newColumns;
        this.queueRender();
    }
    get visibleColumns() {
        return this.columns.filter((c)=>c.visible !== false);
    }
    get visibleRecords() {
        return (0, $519f1ddd575d759f$export$966034e6c6823eb0)[this.instanceId];
    }
    content = null;
    getColumn(event) {
        const x = (event.touches !== undefined ? event.touches[0].clientX : event.clientX) - this.getBoundingClientRect().x;
        const epsilon = event.touches !== undefined ? 20 : 5;
        let boundaryX = 0;
        const log = [];
        const column = this.visibleColumns.find((options)=>{
            if (options.visible !== false) {
                boundaryX += options.width;
                log.push(boundaryX);
                return Math.abs(x - boundaryX) < epsilon;
            }
        });
        return column;
    }
    setCursor = (event)=>{
        const column = this.getColumn(event);
        if (column !== undefined) this.style.cursor = "col-resize";
        else this.style.cursor = "";
    };
    resizeColumn = (event)=>{
        const column = this.getColumn(event);
        if (column !== undefined) {
            const origWidth = column.width;
            const isTouchEvent = event.touches !== undefined;
            const touchIdentifier = isTouchEvent ? event.touches[0].identifier : undefined;
            (0, $def26fc1ab27d844$export$c947e3cd16175f27)(event, (dx, dy, event)=>{
                const touch = isTouchEvent ? [
                    ...event.touches
                ].find((touch)=>touch.identifier === touchIdentifier) : true;
                if (touch === undefined) return true;
                const width = origWidth + dx;
                column.width = width > this.minColumnWidth ? width : this.minColumnWidth;
                this.setColumnWidths();
                if (event.type === "mouseup") return true;
            }, "col-resize");
        }
    };
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener("mousemove", this.setCursor);
        this.addEventListener("mousedown", this.resizeColumn);
        this.addEventListener("touchstart", this.resizeColumn, {
            passive: true
        });
    }
    setColumnWidths() {
        this.style.setProperty("--grid-columns", this.visibleColumns.map((c)=>c.width + "px").join(" "));
    }
    get rowStyle() {
        return {
            display: "grid",
            gridTemplateColumns: (0, $519f1ddd575d759f$export$3cb96c9f6c8d16a4).gridColumns,
            height: this.rowHeight + "px",
            lineHeight: this.rowHeight + "px"
        };
    }
    get cellStyle() {
        return {
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis"
        };
    }
    headerCell = (options)=>options.headerCell !== undefined ? options.headerCell() : $9053df33169f6cdf$var$span({
            class: "th",
            role: "columnheader",
            ariaSort: "none",
            style: {
                ...this.cellStyle,
                textAlign: options.align || "left"
            }
        }, typeof options.name === "string" ? options.name : options.prop);
    dataCell = (options)=>{
        if (options.dataCell !== undefined) return options.dataCell(options);
        return $9053df33169f6cdf$var$span({
            class: "td",
            role: "cell",
            style: {
                ...this.cellStyle,
                textAlign: options.align || "left"
            },
            bindText: `^.${options.prop}`
        });
    };
    get visibleRows() {
        return (0, $519f1ddd575d759f$export$5dcba2d45033d435)((0, $519f1ddd575d759f$export$966034e6c6823eb0)[this.instanceId]);
    }
    render() {
        super.render();
        (0, $519f1ddd575d759f$export$966034e6c6823eb0)[this.instanceId] = this.filter(this._array);
        this.textContent = "";
        this.style.display = "flex";
        this.style.flexDirection = "column";
        const { visibleColumns: visibleColumns } = this;
        this.setColumnWidths();
        this.append($9053df33169f6cdf$var$div({
            class: "thead",
            role: "rowgroup"
        }, $9053df33169f6cdf$var$div({
            class: "tr",
            role: "row",
            style: this.rowStyle
        }, ...visibleColumns.map(this.headerCell))), $9053df33169f6cdf$var$div({
            class: "tbody",
            role: "rowgroup",
            style: {
                content: " ",
                minHeight: "200px",
                flex: "1 1 100px",
                overflow: "hidden",
                overflowY: "scroll"
            },
            bindList: {
                value: this.instanceId,
                virtual: this.virtual
            }
        }, $9053df33169f6cdf$var$template($9053df33169f6cdf$var$div({
            class: "tr",
            role: "row",
            style: this.rowStyle
        }, ...visibleColumns.map(this.dataCell)))));
    }
}
const $9053df33169f6cdf$export$f71ce0a5ddbe8fa0 = $9053df33169f6cdf$var$DataTable.elementCreator({
    tag: "data-table"
});



const { input: $e1929d8b732838cb$var$input } = (0, $519f1ddd575d759f$export$7a5d735b2ab6389d);
const $e1929d8b732838cb$var$passThru = (array)=>array;
const $e1929d8b732838cb$var$NULL_FILTER_DESCRIPTION = "null filter, everything matches";
const $e1929d8b732838cb$export$16a138bde9d9de87 = [
    {
        hint: "field=value",
        explanation: "field is value, ignoring case",
        description: (field, value)=>isNaN(Number(value)) ? field !== "" ? `${field} is "${value}"` : `any field is "${value}"` : field !== "" ? `${field} == ${value}` : `any field == ${value}`,
        token: /^([\w-_]*)=(.+)$/,
        makeFilter: (field, value)=>{
            if (isNaN(Number(value))) {
                value = String(value).toLocaleLowerCase();
                if (field !== "") return (obj)=>String(obj[field]).toLocaleLowerCase() == value;
                return (obj)=>Object.values(obj).find((val)=>String(val).toLocaleLowerCase() == value) !== undefined;
            }
            const num = Number(value);
            if (field !== "") return (obj)=>Number(obj[field]) == num;
            return (obj)=>Object.values(obj).find((val)=>Number(val) == num) !== undefined;
        }
    },
    {
        hint: "field!=value",
        explanation: "field is not value, ignoring case",
        description: (field, value)=>`${field} ≠ ${value}`,
        token: /^([\w-_]+)!=(.+)$/,
        makeFilter: (field, value)=>{
            value = value.toLocaleLowerCase();
            return (obj)=>String(obj[field]).toLocaleLowerCase() != value;
        }
    },
    {
        hint: "field>value",
        explanation: "field > value (numeric / A-Z)",
        description: (field, value)=>isNaN(Number(value)) ? `${field} > ${value} (A-Z)` : `${field} > ${value}`,
        token: /^([\w-_]+)>(.+)$/,
        makeFilter: (field, value)=>{
            if (!isNaN(Number(value))) {
                const num = Number(value);
                return (obj)=>Number(obj[field]) > num;
            }
            value = value.toLocaleLowerCase();
            return (obj)=>String(obj[field]).toLocaleLowerCase() > value;
        }
    },
    {
        hint: "field<value",
        explanation: "field < value (numeric / A-Z)",
        description: (field, value)=>isNaN(Number(value)) ? `${field} < ${value} (A-Z)` : `${field} < ${value}`,
        token: /^([\w-_]+)<(.+)$/,
        makeFilter: (field, value)=>{
            if (!isNaN(Number(value))) {
                const num = Number(value);
                return (obj)=>Number(obj[field]) < num;
            }
            value = value.toLocaleLowerCase();
            return (obj)=>String(obj[field]).toLocaleLowerCase() < value;
        }
    },
    {
        hint: "field:value",
        explanation: "field contains value, ignoring case",
        description: (field, value)=>`${field} contains "${value}"`,
        token: /^([\w-_]+):(.+)$/,
        makeFilter: (field, value)=>{
            value = value.toLocaleLowerCase();
            return (obj)=>String(obj[field]).toLocaleLowerCase().includes(value);
        }
    },
    {
        hint: "!!field",
        explanation: "field is true, non-empty, non-zero",
        description: (match)=>`${match} is truthy`,
        token: /^!!([\w-_]+)$/,
        makeFilter: (match)=>(obj)=>!!obj[match]
    },
    {
        hint: "!field",
        explanation: "field is false, empty, zero",
        description: (match)=>`${match} is falsy`,
        token: /^!([\w-_]+)$/,
        makeFilter: (match)=>(obj)=>!obj[match]
    },
    {
        hint: "value",
        explanation: "any field contains value",
        description: (match)=>`"${match}" in any property`,
        token: /^(.+)$/,
        makeFilter: (match)=>{
            match = match.toLocaleLowerCase();
            return (obj)=>Object.values(obj).find((value)=>String(value).toLocaleLowerCase().includes(match)) !== undefined;
        }
    }
];
function $e1929d8b732838cb$export$61ec8404f465cd36(term, filters = $e1929d8b732838cb$export$16a138bde9d9de87) {
    const maker = filters.find((filter)=>filter.token.test(term));
    if (maker !== undefined) {
        // we know it will match
        const [, ...terms] = term.match(maker.token);
        return {
            description: maker.description(...terms),
            test: maker.makeFilter(...terms)
        };
    }
}
class $e1929d8b732838cb$var$FilterBuilder extends (0, $519f1ddd575d759f$export$16fa2f45be04daa8) {
    value = "";
    filter = $e1929d8b732838cb$var$passThru;
    title = $e1929d8b732838cb$var$NULL_FILTER_DESCRIPTION;
    content = $e1929d8b732838cb$var$input({
        type: "search",
        part: "input",
        style: {
            width: "100%",
            height: "auto"
        }
    });
    placeholder = "";
    help = "";
    filters = $e1929d8b732838cb$export$16a138bde9d9de87;
    constructor(){
        super();
        this.initAttributes("title", "placeholder", "help");
    }
    buildFilter = (0, $519f1ddd575d759f$export$61fc7d43ac8f84b0)((query)=>{
        // @ts-expect-error
        const filters = query.split(/\s+/).filter((part)=>part !== "").map((part)=>$e1929d8b732838cb$export$61ec8404f465cd36(part, this.filters)).filter((part)=>part !== undefined) // because we remove undefined
        ;
        if (filters.length === 0) {
            this.title = $e1929d8b732838cb$var$NULL_FILTER_DESCRIPTION;
            if (this.filter !== $e1929d8b732838cb$var$passThru) {
                this.filter = $e1929d8b732838cb$var$passThru;
                this.dispatchEvent(new Event("change"));
            }
        } else {
            this.filter = filters.reduce((f, filter)=>{
                let g;
                if (f === false) g = (array)=>array.filter(filter.test);
                else g = (array)=>f(array.filter(filter.test));
                return g;
            }, false) // because this array is not empty
            ;
            this.title = filters.map((f)=>f.description).join(", and ");
            this.dispatchEvent(new Event("change"));
        }
    }, 500);
    reset() {
        if (this.filter !== $e1929d8b732838cb$var$passThru) {
            this.title = $e1929d8b732838cb$var$NULL_FILTER_DESCRIPTION;
            this.filter = $e1929d8b732838cb$var$passThru;
            this.dispatchEvent(new Event("change"));
        }
    }
    handleInput = (event)=>{
        const { input: input } = this.parts;
        this.buildFilter(input.value);
        this.value = input.value;
        event.stopPropagation();
        event.preventDefault();
    };
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute("title", this.title);
        this.help = this.filters.map((f)=>f.explanation !== undefined ? `${f.hint}: ${f.explanation}` : f.hint).join("\n");
        const { input: input } = this.parts;
        input.value = this.value;
        input.addEventListener("input", this.handleInput);
        input.addEventListener("change", this.handleInput);
        this.style.position = "relative";
    }
    render() {
        super.render();
        const { input: input } = this.parts;
        input.placeholder = this.placeholder !== "" ? this.placeholder : this.filters.map((filter)=>filter.hint).join(" ");
        input.value = this.value;
    }
}
const $e1929d8b732838cb$export$8ca73b4108207c1f = $e1929d8b732838cb$var$FilterBuilder.elementCreator({
    tag: "filter-builder"
});




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
    static mapboxCSSAvailable;
    static mapboxAvailable;
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
        if ($2c86e776c99cb064$var$MapBox.mapboxCSSAvailable === undefined) {
            $2c86e776c99cb064$var$MapBox.mapboxCSSAvailable = (0, $6317e842c6d02af7$export$63257fda812a683f)("https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.css").catch((e)=>{
                console.error("failed to load mapbox-gl.css", e);
            });
            $2c86e776c99cb064$var$MapBox.mapboxAvailable = (0, $6317e842c6d02af7$export$c6e082819e9a0330)("https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.js").catch((e)=>{
                console.error("failed to load mapbox-gl.js", e);
            });
        }
    }
    connectedCallback() {
        super.connectedCallback();
        if (!this.token) console.error("mapbox requires an access token which you can provide via the token attribute");
    }
    render() {
        super.render();
        if (!this.token) return;
        const { div: div } = this.parts;
        const [long, lat, zoom] = this.coords.split(",").map((x)=>Number(x));
        if (this.map) this.map.remove();
        $2c86e776c99cb064$var$MapBox.mapboxAvailable.then(({ mapboxgl: mapboxgl })=>{
            console.log("%cmapbox may complain about missing css because it is loaded async on demand", "background: orange; color: black; padding: 0 5px;");
            mapboxgl.accessToken = this.token;
            this._map = new mapboxgl.Map({
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



var $90482e2fcda9b250$exports = {};
/**
 * marked v5.1.0 - a markdown parser
 * Copyright (c) 2011-2023, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */ /**
 * DO NOT EDIT THIS FILE
 * The code in this file is generated from files in ./src/
 */ (function(global, factory) {
    factory($90482e2fcda9b250$exports);
})($90482e2fcda9b250$exports, function(exports1) {
    "use strict";
    function _defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
        }
    }
    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
            writable: false
        });
        return Constructor;
    }
    function _extends() {
        _extends = Object.assign ? Object.assign.bind() : function(target) {
            for(var i = 1; i < arguments.length; i++){
                var source = arguments[i];
                for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
            }
            return target;
        };
        return _extends.apply(this, arguments);
    }
    function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
        return arr2;
    }
    function _createForOfIteratorHelperLoose(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (it) return (it = it.call(o)).next.bind(it);
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            return function() {
                if (i >= o.length) return {
                    done: true
                };
                return {
                    done: false,
                    value: o[i++]
                };
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _toPrimitive(input, hint) {
        if (typeof input !== "object" || input === null) return input;
        var prim = input[Symbol.toPrimitive];
        if (prim !== undefined) {
            var res = prim.call(input, hint || "default");
            if (typeof res !== "object") return res;
            throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (hint === "string" ? String : Number)(input);
    }
    function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, "string");
        return typeof key === "symbol" ? key : String(key);
    }
    var id = 0;
    function _classPrivateFieldLooseKey(name) {
        return "__private_" + id++ + "_" + name;
    }
    function _classPrivateFieldLooseBase(receiver, privateKey) {
        if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) throw new TypeError("attempted to use private field on non-instance");
        return receiver;
    }
    function getDefaults() {
        return {
            async: false,
            baseUrl: null,
            breaks: false,
            extensions: null,
            gfm: true,
            headerIds: true,
            headerPrefix: "",
            highlight: null,
            hooks: null,
            langPrefix: "language-",
            mangle: true,
            pedantic: false,
            renderer: null,
            sanitize: false,
            sanitizer: null,
            silent: false,
            smartypants: false,
            tokenizer: null,
            walkTokens: null,
            xhtml: false
        };
    }
    exports1.defaults = getDefaults();
    function changeDefaults(newDefaults) {
        exports1.defaults = newDefaults;
    }
    /**
   * Helpers
   */ var escapeTest = /[&<>"']/;
    var escapeReplace = new RegExp(escapeTest.source, "g");
    var escapeTestNoEncode = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/;
    var escapeReplaceNoEncode = new RegExp(escapeTestNoEncode.source, "g");
    var escapeReplacements = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    };
    var getEscapeReplacement = function getEscapeReplacement(ch) {
        return escapeReplacements[ch];
    };
    function escape(html, encode) {
        if (encode) {
            if (escapeTest.test(html)) return html.replace(escapeReplace, getEscapeReplacement);
        } else {
            if (escapeTestNoEncode.test(html)) return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
        }
        return html;
    }
    var unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
    /**
   * @param {string} html
   */ function unescape(html) {
        // explicitly match decimal, hex, and named HTML entities
        return html.replace(unescapeTest, function(_, n) {
            n = n.toLowerCase();
            if (n === "colon") return ":";
            if (n.charAt(0) === "#") return n.charAt(1) === "x" ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
            return "";
        });
    }
    var caret = /(^|[^\[])\^/g;
    /**
   * @param {string | RegExp} regex
   * @param {string} opt
   */ function edit(regex, opt) {
        regex = typeof regex === "string" ? regex : regex.source;
        opt = opt || "";
        var obj = {
            replace: function replace(name, val) {
                val = val.source || val;
                val = val.replace(caret, "$1");
                regex = regex.replace(name, val);
                return obj;
            },
            getRegex: function getRegex() {
                return new RegExp(regex, opt);
            }
        };
        return obj;
    }
    var nonWordAndColonTest = /[^\w:]/g;
    var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
    /**
   * @param {boolean} sanitize
   * @param {string} base
   * @param {string} href
   */ function cleanUrl(sanitize, base, href) {
        if (sanitize) {
            var prot;
            try {
                prot = decodeURIComponent(unescape(href)).replace(nonWordAndColonTest, "").toLowerCase();
            } catch (e) {
                return null;
            }
            if (prot.indexOf("javascript:") === 0 || prot.indexOf("vbscript:") === 0 || prot.indexOf("data:") === 0) return null;
        }
        if (base && !originIndependentUrl.test(href)) href = resolveUrl(base, href);
        try {
            href = encodeURI(href).replace(/%25/g, "%");
        } catch (e) {
            return null;
        }
        return href;
    }
    var baseUrls = {};
    var justDomain = /^[^:]+:\/*[^/]*$/;
    var protocol = /^([^:]+:)[\s\S]*$/;
    var domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;
    /**
   * @param {string} base
   * @param {string} href
   */ function resolveUrl(base, href) {
        if (!baseUrls[" " + base]) {
            // we can ignore everything in base after the last slash of its path component,
            // but we might need to add _that_
            // https://tools.ietf.org/html/rfc3986#section-3
            if (justDomain.test(base)) baseUrls[" " + base] = base + "/";
            else baseUrls[" " + base] = rtrim(base, "/", true);
        }
        base = baseUrls[" " + base];
        var relativeBase = base.indexOf(":") === -1;
        if (href.substring(0, 2) === "//") {
            if (relativeBase) return href;
            return base.replace(protocol, "$1") + href;
        } else if (href.charAt(0) === "/") {
            if (relativeBase) return href;
            return base.replace(domain, "$1") + href;
        } else return base + href;
    }
    var noopTest = {
        exec: function noopTest() {}
    };
    function splitCells(tableRow, count) {
        // ensure that every cell-delimiting pipe has a space
        // before it to distinguish it from an escaped pipe
        var row = tableRow.replace(/\|/g, function(match, offset, str) {
            var escaped = false, curr = offset;
            while(--curr >= 0 && str[curr] === "\\")escaped = !escaped;
            if (escaped) // odd number of slashes means | is escaped
            // so we leave it alone
            return "|";
            else // add space before unescaped |
            return " |";
        }), cells = row.split(/ \|/);
        var i = 0;
        // First/last cell in a row cannot be empty if it has no leading/trailing pipe
        if (!cells[0].trim()) cells.shift();
        if (cells.length > 0 && !cells[cells.length - 1].trim()) cells.pop();
        if (cells.length > count) cells.splice(count);
        else while(cells.length < count)cells.push("");
        for(; i < cells.length; i++)// leading or trailing whitespace is ignored per the gfm spec
        cells[i] = cells[i].trim().replace(/\\\|/g, "|");
        return cells;
    }
    /**
   * Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
   * /c*$/ is vulnerable to REDOS.
   *
   * @param {string} str
   * @param {string} c
   * @param {boolean} invert Remove suffix of non-c chars instead. Default falsey.
   */ function rtrim(str, c, invert) {
        var l = str.length;
        if (l === 0) return "";
        // Length of suffix matching the invert condition.
        var suffLen = 0;
        // Step left until we fail to match the invert condition.
        while(suffLen < l){
            var currChar = str.charAt(l - suffLen - 1);
            if (currChar === c && !invert) suffLen++;
            else if (currChar !== c && invert) suffLen++;
            else break;
        }
        return str.slice(0, l - suffLen);
    }
    function findClosingBracket(str, b) {
        if (str.indexOf(b[1]) === -1) return -1;
        var l = str.length;
        var level = 0, i = 0;
        for(; i < l; i++){
            if (str[i] === "\\") i++;
            else if (str[i] === b[0]) level++;
            else if (str[i] === b[1]) {
                level--;
                if (level < 0) return i;
            }
        }
        return -1;
    }
    function checkDeprecations(opt, callback) {
        if (!opt || opt.silent) return;
        if (callback) console.warn("marked(): callback is deprecated since version 5.0.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/using_pro#async");
        if (opt.sanitize || opt.sanitizer) console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");
        if (opt.highlight || opt.langPrefix !== "language-") console.warn("marked(): highlight and langPrefix parameters are deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-highlight.");
        if (opt.mangle) console.warn("marked(): mangle parameter is enabled by default, but is deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install https://www.npmjs.com/package/marked-mangle, or disable by setting `{mangle: false}`.");
        if (opt.baseUrl) console.warn("marked(): baseUrl parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-base-url.");
        if (opt.smartypants) console.warn("marked(): smartypants parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-smartypants.");
        if (opt.xhtml) console.warn("marked(): xhtml parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-xhtml.");
        if (opt.headerIds || opt.headerPrefix) console.warn("marked(): headerIds and headerPrefix parameters enabled by default, but are deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install  https://www.npmjs.com/package/marked-gfm-heading-id, or disable by setting `{headerIds: false}`.");
    }
    function outputLink(cap, link, raw, lexer) {
        var href = link.href;
        var title = link.title ? escape(link.title) : null;
        var text = cap[1].replace(/\\([\[\]])/g, "$1");
        if (cap[0].charAt(0) !== "!") {
            lexer.state.inLink = true;
            var token = {
                type: "link",
                raw: raw,
                href: href,
                title: title,
                text: text,
                tokens: lexer.inlineTokens(text)
            };
            lexer.state.inLink = false;
            return token;
        }
        return {
            type: "image",
            raw: raw,
            href: href,
            title: title,
            text: escape(text)
        };
    }
    function indentCodeCompensation(raw, text) {
        var matchIndentToCode = raw.match(/^(\s+)(?:```)/);
        if (matchIndentToCode === null) return text;
        var indentToCode = matchIndentToCode[1];
        return text.split("\n").map(function(node) {
            var matchIndentInNode = node.match(/^\s+/);
            if (matchIndentInNode === null) return node;
            var indentInNode = matchIndentInNode[0];
            if (indentInNode.length >= indentToCode.length) return node.slice(indentToCode.length);
            return node;
        }).join("\n");
    }
    /**
   * Tokenizer
   */ var Tokenizer = /*#__PURE__*/ function() {
        function Tokenizer(options) {
            this.options = options || exports1.defaults;
        }
        var _proto = Tokenizer.prototype;
        _proto.space = function space(src) {
            var cap = this.rules.block.newline.exec(src);
            if (cap && cap[0].length > 0) return {
                type: "space",
                raw: cap[0]
            };
        };
        _proto.code = function code(src) {
            var cap = this.rules.block.code.exec(src);
            if (cap) {
                var text = cap[0].replace(/^ {1,4}/gm, "");
                return {
                    type: "code",
                    raw: cap[0],
                    codeBlockStyle: "indented",
                    text: !this.options.pedantic ? rtrim(text, "\n") : text
                };
            }
        };
        _proto.fences = function fences(src) {
            var cap = this.rules.block.fences.exec(src);
            if (cap) {
                var raw = cap[0];
                var text = indentCodeCompensation(raw, cap[3] || "");
                return {
                    type: "code",
                    raw: raw,
                    lang: cap[2] ? cap[2].trim().replace(this.rules.inline._escapes, "$1") : cap[2],
                    text: text
                };
            }
        };
        _proto.heading = function heading(src) {
            var cap = this.rules.block.heading.exec(src);
            if (cap) {
                var text = cap[2].trim();
                // remove trailing #s
                if (/#$/.test(text)) {
                    var trimmed = rtrim(text, "#");
                    if (this.options.pedantic) text = trimmed.trim();
                    else if (!trimmed || / $/.test(trimmed)) // CommonMark requires space before trailing #s
                    text = trimmed.trim();
                }
                return {
                    type: "heading",
                    raw: cap[0],
                    depth: cap[1].length,
                    text: text,
                    tokens: this.lexer.inline(text)
                };
            }
        };
        _proto.hr = function hr(src) {
            var cap = this.rules.block.hr.exec(src);
            if (cap) return {
                type: "hr",
                raw: cap[0]
            };
        };
        _proto.blockquote = function blockquote(src) {
            var cap = this.rules.block.blockquote.exec(src);
            if (cap) {
                var text = cap[0].replace(/^ *>[ \t]?/gm, "");
                var top = this.lexer.state.top;
                this.lexer.state.top = true;
                var tokens = this.lexer.blockTokens(text);
                this.lexer.state.top = top;
                return {
                    type: "blockquote",
                    raw: cap[0],
                    tokens: tokens,
                    text: text
                };
            }
        };
        _proto.list = function list(src) {
            var cap = this.rules.block.list.exec(src);
            if (cap) {
                var raw, istask, ischecked, indent, i, blankLine, endsWithBlankLine, line, nextLine, rawLine, itemContents, endEarly;
                var bull = cap[1].trim();
                var isordered = bull.length > 1;
                var list = {
                    type: "list",
                    raw: "",
                    ordered: isordered,
                    start: isordered ? +bull.slice(0, -1) : "",
                    loose: false,
                    items: []
                };
                bull = isordered ? "\\d{1,9}\\" + bull.slice(-1) : "\\" + bull;
                if (this.options.pedantic) bull = isordered ? bull : "[*+-]";
                // Get next list item
                var itemRegex = new RegExp("^( {0,3}" + bull + ")((?:[	 ][^\\n]*)?(?:\\n|$))");
                // Check if current bullet point can start a new List Item
                while(src){
                    endEarly = false;
                    if (!(cap = itemRegex.exec(src))) break;
                    if (this.rules.block.hr.test(src)) break;
                    raw = cap[0];
                    src = src.substring(raw.length);
                    line = cap[2].split("\n", 1)[0].replace(/^\t+/, function(t) {
                        return " ".repeat(3 * t.length);
                    });
                    nextLine = src.split("\n", 1)[0];
                    if (this.options.pedantic) {
                        indent = 2;
                        itemContents = line.trimLeft();
                    } else {
                        indent = cap[2].search(/[^ ]/); // Find first non-space char
                        indent = indent > 4 ? 1 : indent; // Treat indented code blocks (> 4 spaces) as having only 1 indent
                        itemContents = line.slice(indent);
                        indent += cap[1].length;
                    }
                    blankLine = false;
                    if (!line && /^ *$/.test(nextLine)) {
                        // Items begin with at most one blank line
                        raw += nextLine + "\n";
                        src = src.substring(nextLine.length + 1);
                        endEarly = true;
                    }
                    if (!endEarly) {
                        var nextBulletRegex = new RegExp("^ {0," + Math.min(3, indent - 1) + "}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))");
                        var hrRegex = new RegExp("^ {0," + Math.min(3, indent - 1) + "}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)");
                        var fencesBeginRegex = new RegExp("^ {0," + Math.min(3, indent - 1) + "}(?:```|~~~)");
                        var headingBeginRegex = new RegExp("^ {0," + Math.min(3, indent - 1) + "}#");
                        // Check if following lines should be included in List Item
                        while(src){
                            rawLine = src.split("\n", 1)[0];
                            nextLine = rawLine;
                            // Re-align to follow commonmark nesting rules
                            if (this.options.pedantic) nextLine = nextLine.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ");
                            // End list item if found code fences
                            if (fencesBeginRegex.test(nextLine)) break;
                            // End list item if found start of new heading
                            if (headingBeginRegex.test(nextLine)) break;
                            // End list item if found start of new bullet
                            if (nextBulletRegex.test(nextLine)) break;
                            // Horizontal rule found
                            if (hrRegex.test(src)) break;
                            if (nextLine.search(/[^ ]/) >= indent || !nextLine.trim()) // Dedent if possible
                            itemContents += "\n" + nextLine.slice(indent);
                            else {
                                // not enough indentation
                                if (blankLine) break;
                                // paragraph continuation unless last line was a different block level element
                                if (line.search(/[^ ]/) >= 4) break;
                                if (fencesBeginRegex.test(line)) break;
                                if (headingBeginRegex.test(line)) break;
                                if (hrRegex.test(line)) break;
                                itemContents += "\n" + nextLine;
                            }
                            if (!blankLine && !nextLine.trim()) // Check if current line is blank
                            blankLine = true;
                            raw += rawLine + "\n";
                            src = src.substring(rawLine.length + 1);
                            line = nextLine.slice(indent);
                        }
                    }
                    if (!list.loose) {
                        // If the previous item ended with a blank line, the list is loose
                        if (endsWithBlankLine) list.loose = true;
                        else if (/\n *\n *$/.test(raw)) endsWithBlankLine = true;
                    }
                    // Check for task list items
                    if (this.options.gfm) {
                        istask = /^\[[ xX]\] /.exec(itemContents);
                        if (istask) {
                            ischecked = istask[0] !== "[ ] ";
                            itemContents = itemContents.replace(/^\[[ xX]\] +/, "");
                        }
                    }
                    list.items.push({
                        type: "list_item",
                        raw: raw,
                        task: !!istask,
                        checked: ischecked,
                        loose: false,
                        text: itemContents
                    });
                    list.raw += raw;
                }
                // Do not consume newlines at end of final item. Alternatively, make itemRegex *start* with any newlines to simplify/speed up endsWithBlankLine logic
                list.items[list.items.length - 1].raw = raw.trimRight();
                list.items[list.items.length - 1].text = itemContents.trimRight();
                list.raw = list.raw.trimRight();
                var l = list.items.length;
                // Item child tokens handled here at end because we needed to have the final item to trim it first
                for(i = 0; i < l; i++){
                    this.lexer.state.top = false;
                    list.items[i].tokens = this.lexer.blockTokens(list.items[i].text, []);
                    if (!list.loose) {
                        // Check if list should be loose
                        var spacers = list.items[i].tokens.filter(function(t) {
                            return t.type === "space";
                        });
                        var hasMultipleLineBreaks = spacers.length > 0 && spacers.some(function(t) {
                            return /\n.*\n/.test(t.raw);
                        });
                        list.loose = hasMultipleLineBreaks;
                    }
                }
                // Set all items to loose if list is loose
                if (list.loose) for(i = 0; i < l; i++)list.items[i].loose = true;
                return list;
            }
        };
        _proto.html = function html(src) {
            var cap = this.rules.block.html.exec(src);
            if (cap) {
                var token = {
                    type: "html",
                    block: true,
                    raw: cap[0],
                    pre: !this.options.sanitizer && (cap[1] === "pre" || cap[1] === "script" || cap[1] === "style"),
                    text: cap[0]
                };
                if (this.options.sanitize) {
                    var text = this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]);
                    token.type = "paragraph";
                    token.text = text;
                    token.tokens = this.lexer.inline(text);
                }
                return token;
            }
        };
        _proto.def = function def(src) {
            var cap = this.rules.block.def.exec(src);
            if (cap) {
                var tag = cap[1].toLowerCase().replace(/\s+/g, " ");
                var href = cap[2] ? cap[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline._escapes, "$1") : "";
                var title = cap[3] ? cap[3].substring(1, cap[3].length - 1).replace(this.rules.inline._escapes, "$1") : cap[3];
                return {
                    type: "def",
                    tag: tag,
                    raw: cap[0],
                    href: href,
                    title: title
                };
            }
        };
        _proto.table = function table(src) {
            var cap = this.rules.block.table.exec(src);
            if (cap) {
                var item = {
                    type: "table",
                    header: splitCells(cap[1]).map(function(c) {
                        return {
                            text: c
                        };
                    }),
                    align: cap[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                    rows: cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, "").split("\n") : []
                };
                if (item.header.length === item.align.length) {
                    item.raw = cap[0];
                    var l = item.align.length;
                    var i, j, k, row;
                    for(i = 0; i < l; i++){
                        if (/^ *-+: *$/.test(item.align[i])) item.align[i] = "right";
                        else if (/^ *:-+: *$/.test(item.align[i])) item.align[i] = "center";
                        else if (/^ *:-+ *$/.test(item.align[i])) item.align[i] = "left";
                        else item.align[i] = null;
                    }
                    l = item.rows.length;
                    for(i = 0; i < l; i++)item.rows[i] = splitCells(item.rows[i], item.header.length).map(function(c) {
                        return {
                            text: c
                        };
                    });
                    // parse child tokens inside headers and cells
                    // header child tokens
                    l = item.header.length;
                    for(j = 0; j < l; j++)item.header[j].tokens = this.lexer.inline(item.header[j].text);
                    // cell child tokens
                    l = item.rows.length;
                    for(j = 0; j < l; j++){
                        row = item.rows[j];
                        for(k = 0; k < row.length; k++)row[k].tokens = this.lexer.inline(row[k].text);
                    }
                    return item;
                }
            }
        };
        _proto.lheading = function lheading(src) {
            var cap = this.rules.block.lheading.exec(src);
            if (cap) return {
                type: "heading",
                raw: cap[0],
                depth: cap[2].charAt(0) === "=" ? 1 : 2,
                text: cap[1],
                tokens: this.lexer.inline(cap[1])
            };
        };
        _proto.paragraph = function paragraph(src) {
            var cap = this.rules.block.paragraph.exec(src);
            if (cap) {
                var text = cap[1].charAt(cap[1].length - 1) === "\n" ? cap[1].slice(0, -1) : cap[1];
                return {
                    type: "paragraph",
                    raw: cap[0],
                    text: text,
                    tokens: this.lexer.inline(text)
                };
            }
        };
        _proto.text = function text(src) {
            var cap = this.rules.block.text.exec(src);
            if (cap) return {
                type: "text",
                raw: cap[0],
                text: cap[0],
                tokens: this.lexer.inline(cap[0])
            };
        };
        _proto.escape = function escape$1(src) {
            var cap = this.rules.inline.escape.exec(src);
            if (cap) return {
                type: "escape",
                raw: cap[0],
                text: escape(cap[1])
            };
        };
        _proto.tag = function tag(src) {
            var cap = this.rules.inline.tag.exec(src);
            if (cap) {
                if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) this.lexer.state.inLink = true;
                else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) this.lexer.state.inLink = false;
                if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) this.lexer.state.inRawBlock = true;
                else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) this.lexer.state.inRawBlock = false;
                return {
                    type: this.options.sanitize ? "text" : "html",
                    raw: cap[0],
                    inLink: this.lexer.state.inLink,
                    inRawBlock: this.lexer.state.inRawBlock,
                    block: false,
                    text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0]
                };
            }
        };
        _proto.link = function link(src) {
            var cap = this.rules.inline.link.exec(src);
            if (cap) {
                var trimmedUrl = cap[2].trim();
                if (!this.options.pedantic && /^</.test(trimmedUrl)) {
                    // commonmark requires matching angle brackets
                    if (!/>$/.test(trimmedUrl)) return;
                    // ending angle bracket cannot be escaped
                    var rtrimSlash = rtrim(trimmedUrl.slice(0, -1), "\\");
                    if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) return;
                } else {
                    // find closing parenthesis
                    var lastParenIndex = findClosingBracket(cap[2], "()");
                    if (lastParenIndex > -1) {
                        var start = cap[0].indexOf("!") === 0 ? 5 : 4;
                        var linkLen = start + cap[1].length + lastParenIndex;
                        cap[2] = cap[2].substring(0, lastParenIndex);
                        cap[0] = cap[0].substring(0, linkLen).trim();
                        cap[3] = "";
                    }
                }
                var href = cap[2];
                var title = "";
                if (this.options.pedantic) {
                    // split pedantic href and title
                    var link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
                    if (link) {
                        href = link[1];
                        title = link[3];
                    }
                } else title = cap[3] ? cap[3].slice(1, -1) : "";
                href = href.trim();
                if (/^</.test(href)) {
                    if (this.options.pedantic && !/>$/.test(trimmedUrl)) // pedantic allows starting angle bracket without ending angle bracket
                    href = href.slice(1);
                    else href = href.slice(1, -1);
                }
                return outputLink(cap, {
                    href: href ? href.replace(this.rules.inline._escapes, "$1") : href,
                    title: title ? title.replace(this.rules.inline._escapes, "$1") : title
                }, cap[0], this.lexer);
            }
        };
        _proto.reflink = function reflink(src, links) {
            var cap;
            if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
                var link = (cap[2] || cap[1]).replace(/\s+/g, " ");
                link = links[link.toLowerCase()];
                if (!link) {
                    var text = cap[0].charAt(0);
                    return {
                        type: "text",
                        raw: text,
                        text: text
                    };
                }
                return outputLink(cap, link, cap[0], this.lexer);
            }
        };
        _proto.emStrong = function emStrong(src, maskedSrc, prevChar) {
            if (prevChar === void 0) prevChar = "";
            var match = this.rules.inline.emStrong.lDelim.exec(src);
            if (!match) return;
            // _ can't be between two alphanumerics. \p{L}\p{N} includes non-english alphabet/numbers as well
            if (match[3] && prevChar.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDF50-\uDF59\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEC0-\uDED3\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDCD0-\uDCEB\uDCF0-\uDCF9\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])/)) return;
            var nextChar = match[1] || match[2] || "";
            if (!nextChar || !prevChar || this.rules.inline.punctuation.exec(prevChar)) {
                var lLength = match[0].length - 1;
                var rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;
                var endReg = match[0][0] === "*" ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
                endReg.lastIndex = 0;
                // Clip maskedSrc to same section of string as src (move to lexer?)
                maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
                while((match = endReg.exec(maskedSrc)) != null){
                    rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
                    if (!rDelim) continue; // skip single * in __abc*abc__
                    rLength = rDelim.length;
                    if (match[3] || match[4]) {
                        // found another Left Delim
                        delimTotal += rLength;
                        continue;
                    } else if (match[5] || match[6]) // either Left or Right Delim
                    {
                        if (lLength % 3 && !((lLength + rLength) % 3)) {
                            midDelimTotal += rLength;
                            continue; // CommonMark Emphasis Rules 9-10
                        }
                    }
                    delimTotal -= rLength;
                    if (delimTotal > 0) continue; // Haven't found enough closing delimiters
                    // Remove extra characters. *a*** -> *a*
                    rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
                    var raw = src.slice(0, lLength + match.index + rLength + 1);
                    // Create `em` if smallest delimiter has odd char count. *a***
                    if (Math.min(lLength, rLength) % 2) {
                        var _text = raw.slice(1, -1);
                        return {
                            type: "em",
                            raw: raw,
                            text: _text,
                            tokens: this.lexer.inlineTokens(_text)
                        };
                    }
                    // Create 'strong' if smallest delimiter has even char count. **a***
                    var text = raw.slice(2, -2);
                    return {
                        type: "strong",
                        raw: raw,
                        text: text,
                        tokens: this.lexer.inlineTokens(text)
                    };
                }
            }
        };
        _proto.codespan = function codespan(src) {
            var cap = this.rules.inline.code.exec(src);
            if (cap) {
                var text = cap[2].replace(/\n/g, " ");
                var hasNonSpaceChars = /[^ ]/.test(text);
                var hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
                if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) text = text.substring(1, text.length - 1);
                text = escape(text, true);
                return {
                    type: "codespan",
                    raw: cap[0],
                    text: text
                };
            }
        };
        _proto.br = function br(src) {
            var cap = this.rules.inline.br.exec(src);
            if (cap) return {
                type: "br",
                raw: cap[0]
            };
        };
        _proto.del = function del(src) {
            var cap = this.rules.inline.del.exec(src);
            if (cap) return {
                type: "del",
                raw: cap[0],
                text: cap[2],
                tokens: this.lexer.inlineTokens(cap[2])
            };
        };
        _proto.autolink = function autolink(src, mangle) {
            var cap = this.rules.inline.autolink.exec(src);
            if (cap) {
                var text, href;
                if (cap[2] === "@") {
                    text = escape(this.options.mangle ? mangle(cap[1]) : cap[1]);
                    href = "mailto:" + text;
                } else {
                    text = escape(cap[1]);
                    href = text;
                }
                return {
                    type: "link",
                    raw: cap[0],
                    text: text,
                    href: href,
                    tokens: [
                        {
                            type: "text",
                            raw: text,
                            text: text
                        }
                    ]
                };
            }
        };
        _proto.url = function url(src, mangle) {
            var cap;
            if (cap = this.rules.inline.url.exec(src)) {
                var text, href;
                if (cap[2] === "@") {
                    text = escape(this.options.mangle ? mangle(cap[0]) : cap[0]);
                    href = "mailto:" + text;
                } else {
                    // do extended autolink path validation
                    var prevCapZero;
                    do {
                        prevCapZero = cap[0];
                        cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
                    }while (prevCapZero !== cap[0]);
                    text = escape(cap[0]);
                    if (cap[1] === "www.") href = "http://" + cap[0];
                    else href = cap[0];
                }
                return {
                    type: "link",
                    raw: cap[0],
                    text: text,
                    href: href,
                    tokens: [
                        {
                            type: "text",
                            raw: text,
                            text: text
                        }
                    ]
                };
            }
        };
        _proto.inlineText = function inlineText(src, smartypants) {
            var cap = this.rules.inline.text.exec(src);
            if (cap) {
                var text;
                if (this.lexer.state.inRawBlock) text = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0];
                else text = escape(this.options.smartypants ? smartypants(cap[0]) : cap[0]);
                return {
                    type: "text",
                    raw: cap[0],
                    text: text
                };
            }
        };
        return Tokenizer;
    }();
    /**
   * Block-Level Grammar
   */ var block = {
        newline: /^(?: *(?:\n|$))+/,
        code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
        fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
        hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
        heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
        blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
        list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
        html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
        def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
        table: noopTest,
        lheading: /^((?:(?!^bull ).|\n(?!\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
        // regex template, placeholders will be replaced according to different paragraph
        // interruption rules of commonmark and the original markdown spec:
        _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
        text: /^[^\n]+/
    };
    block._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
    block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
    block.def = edit(block.def).replace("label", block._label).replace("title", block._title).getRegex();
    block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
    block.listItemStart = edit(/^( *)(bull) */).replace("bull", block.bullet).getRegex();
    block.list = edit(block.list).replace(/bull/g, block.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + block.def.source + ")").getRegex();
    block._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
    block._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
    block.html = edit(block.html, "i").replace("comment", block._comment).replace("tag", block._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
    block.lheading = edit(block.lheading).replace(/bull/g, block.bullet) // lists can interrupt
    .getRegex();
    block.paragraph = edit(block._paragraph).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "") // setex headings don't interrupt commonmark paragraphs
    .replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ") // only lists starting from 1 can interrupt
    .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag) // pars can be interrupted by type (6) html blocks
    .getRegex();
    block.blockquote = edit(block.blockquote).replace("paragraph", block.paragraph).getRegex();
    /**
   * Normal Block Grammar
   */ block.normal = _extends({}, block);
    /**
   * GFM Block Grammar
   */ block.gfm = _extends({}, block.normal, {
        table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)" // Cells
    });
    block.gfm.table = edit(block.gfm.table).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ") // only lists starting from 1 can interrupt
    .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag) // tables can be interrupted by type (6) html blocks
    .getRegex();
    block.gfm.paragraph = edit(block._paragraph).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "") // setex headings don't interrupt commonmark paragraphs
    .replace("table", block.gfm.table) // interrupt paragraphs with table
    .replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ") // only lists starting from 1 can interrupt
    .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag) // pars can be interrupted by type (6) html blocks
    .getRegex();
    /**
   * Pedantic grammar (original John Gruber's loose markdown specification)
   */ block.pedantic = _extends({}, block.normal, {
        html: edit("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", block._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
        heading: /^(#{1,6})(.*)(?:\n+|$)/,
        fences: noopTest,
        // fences not supported
        lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
        paragraph: edit(block.normal._paragraph).replace("hr", block.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", block.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
    });
    /**
   * Inline-Level Grammar
   */ var inline = {
        escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
        autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
        url: noopTest,
        tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
        // CDATA section
        link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
        reflink: /^!?\[(label)\]\[(ref)\]/,
        nolink: /^!?\[(ref)\](?:\[\])?/,
        reflinkSearch: "reflink|nolink(?!\\()",
        emStrong: {
            lDelim: /^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,
            //         (1) and (2) can only be a Right Delimiter. (3) and (4) can only be Left.  (5) and (6) can be either Left or Right.
            //         | Skip orphan inside strong      | Consume to delim | (1) #***              | (2) a***#, a***                    | (3) #***a, ***a                  | (4) ***#                 | (5) #***#                         | (6) a***a
            rDelimAst: /^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,
            rDelimUnd: /^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/ // ^- Not allowed for _
        },
        code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
        br: /^( {2,}|\\)\n(?!\s*$)/,
        del: noopTest,
        text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
        punctuation: /^((?![*_])[\spunctuation])/
    };
    // list of unicode punctuation marks, plus any missing characters from CommonMark spec
    inline._punctuation = "\\p{P}$+<=>`^|~";
    inline.punctuation = edit(inline.punctuation, "u").replace(/punctuation/g, inline._punctuation).getRegex();
    // sequences em should skip over [title](link), `code`, <html>
    inline.blockSkip = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;
    inline.anyPunctuation = /\\[punct]/g;
    inline._escapes = /\\([punct])/g;
    inline._comment = edit(block._comment).replace("(?:-->|$)", "-->").getRegex();
    inline.emStrong.lDelim = edit(inline.emStrong.lDelim, "u").replace(/punct/g, inline._punctuation).getRegex();
    inline.emStrong.rDelimAst = edit(inline.emStrong.rDelimAst, "gu").replace(/punct/g, inline._punctuation).getRegex();
    inline.emStrong.rDelimUnd = edit(inline.emStrong.rDelimUnd, "gu").replace(/punct/g, inline._punctuation).getRegex();
    inline.anyPunctuation = edit(inline.anyPunctuation, "gu").replace(/punct/g, inline._punctuation).getRegex();
    inline._escapes = edit(inline._escapes, "gu").replace(/punct/g, inline._punctuation).getRegex();
    inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
    inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
    inline.autolink = edit(inline.autolink).replace("scheme", inline._scheme).replace("email", inline._email).getRegex();
    inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
    inline.tag = edit(inline.tag).replace("comment", inline._comment).replace("attribute", inline._attribute).getRegex();
    inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
    inline._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
    inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
    inline.link = edit(inline.link).replace("label", inline._label).replace("href", inline._href).replace("title", inline._title).getRegex();
    inline.reflink = edit(inline.reflink).replace("label", inline._label).replace("ref", block._label).getRegex();
    inline.nolink = edit(inline.nolink).replace("ref", block._label).getRegex();
    inline.reflinkSearch = edit(inline.reflinkSearch, "g").replace("reflink", inline.reflink).replace("nolink", inline.nolink).getRegex();
    /**
   * Normal Inline Grammar
   */ inline.normal = _extends({}, inline);
    /**
   * Pedantic Inline Grammar
   */ inline.pedantic = _extends({}, inline.normal, {
        strong: {
            start: /^__|\*\*/,
            middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
            endAst: /\*\*(?!\*)/g,
            endUnd: /__(?!_)/g
        },
        em: {
            start: /^_|\*/,
            middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
            endAst: /\*(?!\*)/g,
            endUnd: /_(?!_)/g
        },
        link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", inline._label).getRegex(),
        reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", inline._label).getRegex()
    });
    /**
   * GFM Inline Grammar
   */ inline.gfm = _extends({}, inline.normal, {
        escape: edit(inline.escape).replace("])", "~|])").getRegex(),
        _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
        url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
        _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
        del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
        text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
    });
    inline.gfm.url = edit(inline.gfm.url, "i").replace("email", inline.gfm._extended_email).getRegex();
    /**
   * GFM + Line Breaks Inline Grammar
   */ inline.breaks = _extends({}, inline.gfm, {
        br: edit(inline.br).replace("{2,}", "*").getRegex(),
        text: edit(inline.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
    });
    /**
   * smartypants text replacement
   * @param {string} text
   */ function smartypants(text) {
        return text// em-dashes
        .replace(/---/g, "—")// en-dashes
        .replace(/--/g, "–")// opening singles
        .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘")// closing singles & apostrophes
        .replace(/'/g, "’")// opening doubles
        .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“")// closing doubles
        .replace(/"/g, "”")// ellipses
        .replace(/\.{3}/g, "…");
    }
    /**
   * mangle email addresses
   * @param {string} text
   */ function mangle(text) {
        var out = "", i, ch;
        var l = text.length;
        for(i = 0; i < l; i++){
            ch = text.charCodeAt(i);
            if (Math.random() > 0.5) ch = "x" + ch.toString(16);
            out += "&#" + ch + ";";
        }
        return out;
    }
    /**
   * Block Lexer
   */ var Lexer = /*#__PURE__*/ function() {
        function Lexer(options) {
            this.tokens = [];
            this.tokens.links = Object.create(null);
            this.options = options || exports1.defaults;
            this.options.tokenizer = this.options.tokenizer || new Tokenizer();
            this.tokenizer = this.options.tokenizer;
            this.tokenizer.options = this.options;
            this.tokenizer.lexer = this;
            this.inlineQueue = [];
            this.state = {
                inLink: false,
                inRawBlock: false,
                top: true
            };
            var rules = {
                block: block.normal,
                inline: inline.normal
            };
            if (this.options.pedantic) {
                rules.block = block.pedantic;
                rules.inline = inline.pedantic;
            } else if (this.options.gfm) {
                rules.block = block.gfm;
                if (this.options.breaks) rules.inline = inline.breaks;
                else rules.inline = inline.gfm;
            }
            this.tokenizer.rules = rules;
        }
        /**
     * Expose Rules
     */ /**
     * Static Lex Method
     */ Lexer.lex = function lex(src, options) {
            var lexer = new Lexer(options);
            return lexer.lex(src);
        } /**
     * Static Lex Inline Method
     */ ;
        Lexer.lexInline = function lexInline(src, options) {
            var lexer = new Lexer(options);
            return lexer.inlineTokens(src);
        } /**
     * Preprocessing
     */ ;
        var _proto = Lexer.prototype;
        _proto.lex = function lex(src) {
            src = src.replace(/\r\n|\r/g, "\n");
            this.blockTokens(src, this.tokens);
            var next;
            while(next = this.inlineQueue.shift())this.inlineTokens(next.src, next.tokens);
            return this.tokens;
        } /**
     * Lexing
     */ ;
        _proto.blockTokens = function blockTokens(src, tokens) {
            var _this = this;
            if (tokens === void 0) tokens = [];
            if (this.options.pedantic) src = src.replace(/\t/g, "    ").replace(/^ +$/gm, "");
            else src = src.replace(/^( *)(\t+)/gm, function(_, leading, tabs) {
                return leading + "    ".repeat(tabs.length);
            });
            var token, lastToken, cutSrc, lastParagraphClipped;
            var _loop = function _loop() {
                if (_this.options.extensions && _this.options.extensions.block && _this.options.extensions.block.some(function(extTokenizer) {
                    if (token = extTokenizer.call({
                        lexer: _this
                    }, src, tokens)) {
                        src = src.substring(token.raw.length);
                        tokens.push(token);
                        return true;
                    }
                    return false;
                })) return "continue";
                // newline
                if (token = _this.tokenizer.space(src)) {
                    src = src.substring(token.raw.length);
                    if (token.raw.length === 1 && tokens.length > 0) // if there's a single \n as a spacer, it's terminating the last line,
                    // so move it there so that we don't get unecessary paragraph tags
                    tokens[tokens.length - 1].raw += "\n";
                    else tokens.push(token);
                    return "continue";
                }
                // code
                if (token = _this.tokenizer.code(src)) {
                    src = src.substring(token.raw.length);
                    lastToken = tokens[tokens.length - 1];
                    // An indented code block cannot interrupt a paragraph.
                    if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
                        lastToken.raw += "\n" + token.raw;
                        lastToken.text += "\n" + token.text;
                        _this.inlineQueue[_this.inlineQueue.length - 1].src = lastToken.text;
                    } else tokens.push(token);
                    return "continue";
                }
                // fences
                if (token = _this.tokenizer.fences(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    return "continue";
                }
                // heading
                if (token = _this.tokenizer.heading(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    return "continue";
                }
                // hr
                if (token = _this.tokenizer.hr(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    return "continue";
                }
                // blockquote
                if (token = _this.tokenizer.blockquote(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    return "continue";
                }
                // list
                if (token = _this.tokenizer.list(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    return "continue";
                }
                // html
                if (token = _this.tokenizer.html(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    return "continue";
                }
                // def
                if (token = _this.tokenizer.def(src)) {
                    src = src.substring(token.raw.length);
                    lastToken = tokens[tokens.length - 1];
                    if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
                        lastToken.raw += "\n" + token.raw;
                        lastToken.text += "\n" + token.raw;
                        _this.inlineQueue[_this.inlineQueue.length - 1].src = lastToken.text;
                    } else if (!_this.tokens.links[token.tag]) _this.tokens.links[token.tag] = {
                        href: token.href,
                        title: token.title
                    };
                    return "continue";
                }
                // table (gfm)
                if (token = _this.tokenizer.table(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    return "continue";
                }
                // lheading
                if (token = _this.tokenizer.lheading(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    return "continue";
                }
                // top-level paragraph
                // prevent paragraph consuming extensions by clipping 'src' to extension start
                cutSrc = src;
                if (_this.options.extensions && _this.options.extensions.startBlock) {
                    var startIndex = Infinity;
                    var tempSrc = src.slice(1);
                    var tempStart;
                    _this.options.extensions.startBlock.forEach(function(getStartIndex) {
                        tempStart = getStartIndex.call({
                            lexer: this
                        }, tempSrc);
                        if (typeof tempStart === "number" && tempStart >= 0) startIndex = Math.min(startIndex, tempStart);
                    });
                    if (startIndex < Infinity && startIndex >= 0) cutSrc = src.substring(0, startIndex + 1);
                }
                if (_this.state.top && (token = _this.tokenizer.paragraph(cutSrc))) {
                    lastToken = tokens[tokens.length - 1];
                    if (lastParagraphClipped && lastToken.type === "paragraph") {
                        lastToken.raw += "\n" + token.raw;
                        lastToken.text += "\n" + token.text;
                        _this.inlineQueue.pop();
                        _this.inlineQueue[_this.inlineQueue.length - 1].src = lastToken.text;
                    } else tokens.push(token);
                    lastParagraphClipped = cutSrc.length !== src.length;
                    src = src.substring(token.raw.length);
                    return "continue";
                }
                // text
                if (token = _this.tokenizer.text(src)) {
                    src = src.substring(token.raw.length);
                    lastToken = tokens[tokens.length - 1];
                    if (lastToken && lastToken.type === "text") {
                        lastToken.raw += "\n" + token.raw;
                        lastToken.text += "\n" + token.text;
                        _this.inlineQueue.pop();
                        _this.inlineQueue[_this.inlineQueue.length - 1].src = lastToken.text;
                    } else tokens.push(token);
                    return "continue";
                }
                if (src) {
                    var errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
                    if (_this.options.silent) {
                        console.error(errMsg);
                        return "break";
                    } else throw new Error(errMsg);
                }
            };
            while(src){
                var _ret = _loop();
                if (_ret === "continue") continue;
                if (_ret === "break") break;
            }
            this.state.top = true;
            return tokens;
        };
        _proto.inline = function inline(src, tokens) {
            if (tokens === void 0) tokens = [];
            this.inlineQueue.push({
                src: src,
                tokens: tokens
            });
            return tokens;
        } /**
     * Lexing/Compiling
     */ ;
        _proto.inlineTokens = function inlineTokens(src, tokens) {
            var _this2 = this;
            if (tokens === void 0) tokens = [];
            var token, lastToken, cutSrc;
            // String with links masked to avoid interference with em and strong
            var maskedSrc = src;
            var match;
            var keepPrevChar, prevChar;
            // Mask out reflinks
            if (this.tokens.links) {
                var links = Object.keys(this.tokens.links);
                if (links.length > 0) {
                    while((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null)if (links.includes(match[0].slice(match[0].lastIndexOf("[") + 1, -1))) maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
                }
            }
            // Mask out other blocks
            while((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null)maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
            // Mask out escaped characters
            while((match = this.tokenizer.rules.inline.anyPunctuation.exec(maskedSrc)) != null)maskedSrc = maskedSrc.slice(0, match.index) + "++" + maskedSrc.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
            var _loop2 = function _loop2() {
                if (!keepPrevChar) prevChar = "";
                keepPrevChar = false;
                // extensions
                if (_this2.options.extensions && _this2.options.extensions.inline && _this2.options.extensions.inline.some(function(extTokenizer) {
                    if (token = extTokenizer.call({
                        lexer: _this2
                    }, src, tokens)) {
                        src = src.substring(token.raw.length);
                        tokens.push(token);
                        return true;
                    }
                    return false;
                })) return "continue";
                // escape
                if (token = _this2.tokenizer.escape(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    return "continue";
                }
                // tag
                if (token = _this2.tokenizer.tag(src)) {
                    src = src.substring(token.raw.length);
                    lastToken = tokens[tokens.length - 1];
                    if (lastToken && token.type === "text" && lastToken.type === "text") {
                        lastToken.raw += token.raw;
                        lastToken.text += token.text;
                    } else tokens.push(token);
                    return "continue";
                }
                // link
                if (token = _this2.tokenizer.link(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    return "continue";
                }
                // reflink, nolink
                if (token = _this2.tokenizer.reflink(src, _this2.tokens.links)) {
                    src = src.substring(token.raw.length);
                    lastToken = tokens[tokens.length - 1];
                    if (lastToken && token.type === "text" && lastToken.type === "text") {
                        lastToken.raw += token.raw;
                        lastToken.text += token.text;
                    } else tokens.push(token);
                    return "continue";
                }
                // em & strong
                if (token = _this2.tokenizer.emStrong(src, maskedSrc, prevChar)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    return "continue";
                }
                // code
                if (token = _this2.tokenizer.codespan(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    return "continue";
                }
                // br
                if (token = _this2.tokenizer.br(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    return "continue";
                }
                // del (gfm)
                if (token = _this2.tokenizer.del(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    return "continue";
                }
                // autolink
                if (token = _this2.tokenizer.autolink(src, mangle)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    return "continue";
                }
                // url (gfm)
                if (!_this2.state.inLink && (token = _this2.tokenizer.url(src, mangle))) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    return "continue";
                }
                // text
                // prevent inlineText consuming extensions by clipping 'src' to extension start
                cutSrc = src;
                if (_this2.options.extensions && _this2.options.extensions.startInline) {
                    var startIndex = Infinity;
                    var tempSrc = src.slice(1);
                    var tempStart;
                    _this2.options.extensions.startInline.forEach(function(getStartIndex) {
                        tempStart = getStartIndex.call({
                            lexer: this
                        }, tempSrc);
                        if (typeof tempStart === "number" && tempStart >= 0) startIndex = Math.min(startIndex, tempStart);
                    });
                    if (startIndex < Infinity && startIndex >= 0) cutSrc = src.substring(0, startIndex + 1);
                }
                if (token = _this2.tokenizer.inlineText(cutSrc, smartypants)) {
                    src = src.substring(token.raw.length);
                    if (token.raw.slice(-1) !== "_") // Track prevChar before string of ____ started
                    prevChar = token.raw.slice(-1);
                    keepPrevChar = true;
                    lastToken = tokens[tokens.length - 1];
                    if (lastToken && lastToken.type === "text") {
                        lastToken.raw += token.raw;
                        lastToken.text += token.text;
                    } else tokens.push(token);
                    return "continue";
                }
                if (src) {
                    var errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
                    if (_this2.options.silent) {
                        console.error(errMsg);
                        return "break";
                    } else throw new Error(errMsg);
                }
            };
            while(src){
                var _ret2 = _loop2();
                if (_ret2 === "continue") continue;
                if (_ret2 === "break") break;
            }
            return tokens;
        };
        _createClass(Lexer, null, [
            {
                key: "rules",
                get: function get() {
                    return {
                        block: block,
                        inline: inline
                    };
                }
            }
        ]);
        return Lexer;
    }();
    /**
   * Renderer
   */ var Renderer = /*#__PURE__*/ function() {
        function Renderer(options) {
            this.options = options || exports1.defaults;
        }
        var _proto = Renderer.prototype;
        _proto.code = function code(_code, infostring, escaped) {
            var lang = (infostring || "").match(/\S*/)[0];
            if (this.options.highlight) {
                var out = this.options.highlight(_code, lang);
                if (out != null && out !== _code) {
                    escaped = true;
                    _code = out;
                }
            }
            _code = _code.replace(/\n$/, "") + "\n";
            if (!lang) return "<pre><code>" + (escaped ? _code : escape(_code, true)) + "</code></pre>\n";
            return '<pre><code class="' + this.options.langPrefix + escape(lang) + '">' + (escaped ? _code : escape(_code, true)) + "</code></pre>\n";
        } /**
     * @param {string} quote
     */ ;
        _proto.blockquote = function blockquote(quote) {
            return "<blockquote>\n" + quote + "</blockquote>\n";
        };
        _proto.html = function html(_html, block) {
            return _html;
        } /**
     * @param {string} text
     * @param {string} level
     * @param {string} raw
     * @param {any} slugger
     */ ;
        _proto.heading = function heading(text, level, raw, slugger) {
            if (this.options.headerIds) {
                var id = this.options.headerPrefix + slugger.slug(raw);
                return "<h" + level + ' id="' + id + '">' + text + "</h" + level + ">\n";
            }
            // ignore IDs
            return "<h" + level + ">" + text + "</h" + level + ">\n";
        };
        _proto.hr = function hr() {
            return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
        };
        _proto.list = function list(body, ordered, start) {
            var type = ordered ? "ol" : "ul", startatt = ordered && start !== 1 ? ' start="' + start + '"' : "";
            return "<" + type + startatt + ">\n" + body + "</" + type + ">\n";
        } /**
     * @param {string} text
     */ ;
        _proto.listitem = function listitem(text) {
            return "<li>" + text + "</li>\n";
        };
        _proto.checkbox = function checkbox(checked) {
            return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
        } /**
     * @param {string} text
     */ ;
        _proto.paragraph = function paragraph(text) {
            return "<p>" + text + "</p>\n";
        } /**
     * @param {string} header
     * @param {string} body
     */ ;
        _proto.table = function table(header, body) {
            if (body) body = "<tbody>" + body + "</tbody>";
            return "<table>\n<thead>\n" + header + "</thead>\n" + body + "</table>\n";
        } /**
     * @param {string} content
     */ ;
        _proto.tablerow = function tablerow(content) {
            return "<tr>\n" + content + "</tr>\n";
        };
        _proto.tablecell = function tablecell(content, flags) {
            var type = flags.header ? "th" : "td";
            var tag = flags.align ? "<" + type + ' align="' + flags.align + '">' : "<" + type + ">";
            return tag + content + ("</" + type + ">\n");
        } /**
     * span level renderer
     * @param {string} text
     */ ;
        _proto.strong = function strong(text) {
            return "<strong>" + text + "</strong>";
        } /**
     * @param {string} text
     */ ;
        _proto.em = function em(text) {
            return "<em>" + text + "</em>";
        } /**
     * @param {string} text
     */ ;
        _proto.codespan = function codespan(text) {
            return "<code>" + text + "</code>";
        };
        _proto.br = function br() {
            return this.options.xhtml ? "<br/>" : "<br>";
        } /**
     * @param {string} text
     */ ;
        _proto.del = function del(text) {
            return "<del>" + text + "</del>";
        } /**
     * @param {string} href
     * @param {string} title
     * @param {string} text
     */ ;
        _proto.link = function link(href, title, text) {
            href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
            if (href === null) return text;
            var out = '<a href="' + href + '"';
            if (title) out += ' title="' + title + '"';
            out += ">" + text + "</a>";
            return out;
        } /**
     * @param {string} href
     * @param {string} title
     * @param {string} text
     */ ;
        _proto.image = function image(href, title, text) {
            href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
            if (href === null) return text;
            var out = '<img src="' + href + '" alt="' + text + '"';
            if (title) out += ' title="' + title + '"';
            out += this.options.xhtml ? "/>" : ">";
            return out;
        };
        _proto.text = function text(_text) {
            return _text;
        };
        return Renderer;
    }();
    /**
   * TextRenderer
   * returns only the textual part of the token
   */ var TextRenderer = /*#__PURE__*/ function() {
        function TextRenderer() {}
        var _proto = TextRenderer.prototype;
        // no need for block level renderers
        _proto.strong = function strong(text) {
            return text;
        };
        _proto.em = function em(text) {
            return text;
        };
        _proto.codespan = function codespan(text) {
            return text;
        };
        _proto.del = function del(text) {
            return text;
        };
        _proto.html = function html(text) {
            return text;
        };
        _proto.text = function text(_text) {
            return _text;
        };
        _proto.link = function link(href, title, text) {
            return "" + text;
        };
        _proto.image = function image(href, title, text) {
            return "" + text;
        };
        _proto.br = function br() {
            return "";
        };
        return TextRenderer;
    }();
    /**
   * Slugger generates header id
   */ var Slugger = /*#__PURE__*/ function() {
        function Slugger() {
            this.seen = {};
        }
        /**
     * @param {string} value
     */ var _proto = Slugger.prototype;
        _proto.serialize = function serialize(value) {
            return value.toLowerCase().trim()// remove html tags
            .replace(/<[!\/a-z].*?>/ig, "")// remove unwanted chars
            .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
        } /**
     * Finds the next safe (unique) slug to use
     * @param {string} originalSlug
     * @param {boolean} isDryRun
     */ ;
        _proto.getNextSafeSlug = function getNextSafeSlug(originalSlug, isDryRun) {
            var slug = originalSlug;
            var occurenceAccumulator = 0;
            if (this.seen.hasOwnProperty(slug)) {
                occurenceAccumulator = this.seen[originalSlug];
                do {
                    occurenceAccumulator++;
                    slug = originalSlug + "-" + occurenceAccumulator;
                }while (this.seen.hasOwnProperty(slug));
            }
            if (!isDryRun) {
                this.seen[originalSlug] = occurenceAccumulator;
                this.seen[slug] = 0;
            }
            return slug;
        } /**
     * Convert string to unique id
     * @param {object} [options]
     * @param {boolean} [options.dryrun] Generates the next unique slug without
     * updating the internal accumulator.
     */ ;
        _proto.slug = function slug(value, options) {
            if (options === void 0) options = {};
            var slug = this.serialize(value);
            return this.getNextSafeSlug(slug, options.dryrun);
        };
        return Slugger;
    }();
    /**
   * Parsing & Compiling
   */ var Parser = /*#__PURE__*/ function() {
        function Parser(options) {
            this.options = options || exports1.defaults;
            this.options.renderer = this.options.renderer || new Renderer();
            this.renderer = this.options.renderer;
            this.renderer.options = this.options;
            this.textRenderer = new TextRenderer();
            this.slugger = new Slugger();
        }
        /**
     * Static Parse Method
     */ Parser.parse = function parse(tokens, options) {
            var parser = new Parser(options);
            return parser.parse(tokens);
        } /**
     * Static Parse Inline Method
     */ ;
        Parser.parseInline = function parseInline(tokens, options) {
            var parser = new Parser(options);
            return parser.parseInline(tokens);
        } /**
     * Parse Loop
     */ ;
        var _proto = Parser.prototype;
        _proto.parse = function parse(tokens, top) {
            if (top === void 0) top = true;
            var out = "", i, j, k, l2, l3, row, cell, header, body, token, ordered, start, loose, itemBody, item, checked, task, checkbox, ret;
            var l = tokens.length;
            for(i = 0; i < l; i++){
                token = tokens[i];
                // Run any renderer extensions
                if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
                    ret = this.options.extensions.renderers[token.type].call({
                        parser: this
                    }, token);
                    if (ret !== false || ![
                        "space",
                        "hr",
                        "heading",
                        "code",
                        "table",
                        "blockquote",
                        "list",
                        "html",
                        "paragraph",
                        "text"
                    ].includes(token.type)) {
                        out += ret || "";
                        continue;
                    }
                }
                switch(token.type){
                    case "space":
                        continue;
                    case "hr":
                        out += this.renderer.hr();
                        continue;
                    case "heading":
                        out += this.renderer.heading(this.parseInline(token.tokens), token.depth, unescape(this.parseInline(token.tokens, this.textRenderer)), this.slugger);
                        continue;
                    case "code":
                        out += this.renderer.code(token.text, token.lang, token.escaped);
                        continue;
                    case "table":
                        header = "";
                        // header
                        cell = "";
                        l2 = token.header.length;
                        for(j = 0; j < l2; j++)cell += this.renderer.tablecell(this.parseInline(token.header[j].tokens), {
                            header: true,
                            align: token.align[j]
                        });
                        header += this.renderer.tablerow(cell);
                        body = "";
                        l2 = token.rows.length;
                        for(j = 0; j < l2; j++){
                            row = token.rows[j];
                            cell = "";
                            l3 = row.length;
                            for(k = 0; k < l3; k++)cell += this.renderer.tablecell(this.parseInline(row[k].tokens), {
                                header: false,
                                align: token.align[k]
                            });
                            body += this.renderer.tablerow(cell);
                        }
                        out += this.renderer.table(header, body);
                        continue;
                    case "blockquote":
                        body = this.parse(token.tokens);
                        out += this.renderer.blockquote(body);
                        continue;
                    case "list":
                        ordered = token.ordered;
                        start = token.start;
                        loose = token.loose;
                        l2 = token.items.length;
                        body = "";
                        for(j = 0; j < l2; j++){
                            item = token.items[j];
                            checked = item.checked;
                            task = item.task;
                            itemBody = "";
                            if (item.task) {
                                checkbox = this.renderer.checkbox(checked);
                                if (loose) {
                                    if (item.tokens.length > 0 && item.tokens[0].type === "paragraph") {
                                        item.tokens[0].text = checkbox + " " + item.tokens[0].text;
                                        if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text") item.tokens[0].tokens[0].text = checkbox + " " + item.tokens[0].tokens[0].text;
                                    } else item.tokens.unshift({
                                        type: "text",
                                        text: checkbox
                                    });
                                } else itemBody += checkbox;
                            }
                            itemBody += this.parse(item.tokens, loose);
                            body += this.renderer.listitem(itemBody, task, checked);
                        }
                        out += this.renderer.list(body, ordered, start);
                        continue;
                    case "html":
                        out += this.renderer.html(token.text, token.block);
                        continue;
                    case "paragraph":
                        out += this.renderer.paragraph(this.parseInline(token.tokens));
                        continue;
                    case "text":
                        body = token.tokens ? this.parseInline(token.tokens) : token.text;
                        while(i + 1 < l && tokens[i + 1].type === "text"){
                            token = tokens[++i];
                            body += "\n" + (token.tokens ? this.parseInline(token.tokens) : token.text);
                        }
                        out += top ? this.renderer.paragraph(body) : body;
                        continue;
                    default:
                        var errMsg = 'Token with "' + token.type + '" type was not found.';
                        if (this.options.silent) {
                            console.error(errMsg);
                            return;
                        } else throw new Error(errMsg);
                }
            }
            return out;
        } /**
     * Parse Inline Tokens
     */ ;
        _proto.parseInline = function parseInline(tokens, renderer) {
            renderer = renderer || this.renderer;
            var out = "", i, token, ret;
            var l = tokens.length;
            for(i = 0; i < l; i++){
                token = tokens[i];
                // Run any renderer extensions
                if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
                    ret = this.options.extensions.renderers[token.type].call({
                        parser: this
                    }, token);
                    if (ret !== false || ![
                        "escape",
                        "html",
                        "link",
                        "image",
                        "strong",
                        "em",
                        "codespan",
                        "br",
                        "del",
                        "text"
                    ].includes(token.type)) {
                        out += ret || "";
                        continue;
                    }
                }
                switch(token.type){
                    case "escape":
                        out += renderer.text(token.text);
                        break;
                    case "html":
                        out += renderer.html(token.text);
                        break;
                    case "link":
                        out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
                        break;
                    case "image":
                        out += renderer.image(token.href, token.title, token.text);
                        break;
                    case "strong":
                        out += renderer.strong(this.parseInline(token.tokens, renderer));
                        break;
                    case "em":
                        out += renderer.em(this.parseInline(token.tokens, renderer));
                        break;
                    case "codespan":
                        out += renderer.codespan(token.text);
                        break;
                    case "br":
                        out += renderer.br();
                        break;
                    case "del":
                        out += renderer.del(this.parseInline(token.tokens, renderer));
                        break;
                    case "text":
                        out += renderer.text(token.text);
                        break;
                    default:
                        var errMsg = 'Token with "' + token.type + '" type was not found.';
                        if (this.options.silent) {
                            console.error(errMsg);
                            return;
                        } else throw new Error(errMsg);
                }
            }
            return out;
        };
        return Parser;
    }();
    var Hooks = /*#__PURE__*/ function() {
        function Hooks(options) {
            this.options = options || exports1.defaults;
        }
        var _proto = Hooks.prototype;
        /**
     * Process markdown before marked
     */ _proto.preprocess = function preprocess(markdown) {
            return markdown;
        } /**
     * Process HTML after marked is finished
     */ ;
        _proto.postprocess = function postprocess(html) {
            return html;
        };
        return Hooks;
    }();
    Hooks.passThroughHooks = new Set([
        "preprocess",
        "postprocess"
    ]);
    var _parseMarkdown = /*#__PURE__*/ _classPrivateFieldLooseKey("parseMarkdown");
    var _onError = /*#__PURE__*/ _classPrivateFieldLooseKey("onError");
    var Marked = /*#__PURE__*/ function() {
        function Marked() {
            Object.defineProperty(this, _onError, {
                value: _onError2
            });
            Object.defineProperty(this, _parseMarkdown, {
                value: _parseMarkdown2
            });
            this.defaults = getDefaults();
            this.options = this.setOptions;
            this.parse = _classPrivateFieldLooseBase(this, _parseMarkdown)[_parseMarkdown](Lexer.lex, Parser.parse);
            this.parseInline = _classPrivateFieldLooseBase(this, _parseMarkdown)[_parseMarkdown](Lexer.lexInline, Parser.parseInline);
            this.Parser = Parser;
            this.parser = Parser.parse;
            this.Renderer = Renderer;
            this.TextRenderer = TextRenderer;
            this.Lexer = Lexer;
            this.lexer = Lexer.lex;
            this.Tokenizer = Tokenizer;
            this.Slugger = Slugger;
            this.Hooks = Hooks;
            this.use.apply(this, arguments);
        }
        var _proto = Marked.prototype;
        _proto.walkTokens = function walkTokens(tokens, callback) {
            var _this = this;
            var values = [];
            var _loop = function _loop() {
                var token = _step.value;
                values = values.concat(callback.call(_this, token));
                switch(token.type){
                    case "table":
                        for(var _iterator2 = _createForOfIteratorHelperLoose(token.header), _step2; !(_step2 = _iterator2()).done;){
                            var cell = _step2.value;
                            values = values.concat(_this.walkTokens(cell.tokens, callback));
                        }
                        for(var _iterator3 = _createForOfIteratorHelperLoose(token.rows), _step3; !(_step3 = _iterator3()).done;){
                            var row = _step3.value;
                            for(var _iterator4 = _createForOfIteratorHelperLoose(row), _step4; !(_step4 = _iterator4()).done;){
                                var _cell = _step4.value;
                                values = values.concat(_this.walkTokens(_cell.tokens, callback));
                            }
                        }
                        break;
                    case "list":
                        values = values.concat(_this.walkTokens(token.items, callback));
                        break;
                    default:
                        if (_this.defaults.extensions && _this.defaults.extensions.childTokens && _this.defaults.extensions.childTokens[token.type]) // Walk any extensions
                        _this.defaults.extensions.childTokens[token.type].forEach(function(childTokens) {
                            values = values.concat(_this.walkTokens(token[childTokens], callback));
                        });
                        else if (token.tokens) values = values.concat(_this.walkTokens(token.tokens, callback));
                }
            };
            for(var _iterator = _createForOfIteratorHelperLoose(tokens), _step; !(_step = _iterator()).done;)_loop();
            return values;
        };
        _proto.use = function use() {
            var _this2 = this;
            var extensions = this.defaults.extensions || {
                renderers: {},
                childTokens: {}
            };
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
            args.forEach(function(pack) {
                // copy options to new object
                var opts = _extends({}, pack);
                // set async to true if it was set to true before
                opts.async = _this2.defaults.async || opts.async || false;
                // ==-- Parse "addon" extensions --== //
                if (pack.extensions) {
                    pack.extensions.forEach(function(ext) {
                        if (!ext.name) throw new Error("extension name required");
                        if (ext.renderer) {
                            // Renderer extensions
                            var prevRenderer = extensions.renderers[ext.name];
                            if (prevRenderer) // Replace extension with func to run new extension but fall back if false
                            extensions.renderers[ext.name] = function() {
                                for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
                                var ret = ext.renderer.apply(this, args);
                                if (ret === false) ret = prevRenderer.apply(this, args);
                                return ret;
                            };
                            else extensions.renderers[ext.name] = ext.renderer;
                        }
                        if (ext.tokenizer) {
                            // Tokenizer Extensions
                            if (!ext.level || ext.level !== "block" && ext.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
                            if (extensions[ext.level]) extensions[ext.level].unshift(ext.tokenizer);
                            else extensions[ext.level] = [
                                ext.tokenizer
                            ];
                            if (ext.start) {
                                // Function to check for start of token
                                if (ext.level === "block") {
                                    if (extensions.startBlock) extensions.startBlock.push(ext.start);
                                    else extensions.startBlock = [
                                        ext.start
                                    ];
                                } else if (ext.level === "inline") {
                                    if (extensions.startInline) extensions.startInline.push(ext.start);
                                    else extensions.startInline = [
                                        ext.start
                                    ];
                                }
                            }
                        }
                        if (ext.childTokens) // Child tokens to be visited by walkTokens
                        extensions.childTokens[ext.name] = ext.childTokens;
                    });
                    opts.extensions = extensions;
                }
                // ==-- Parse "overwrite" extensions --== //
                if (pack.renderer) {
                    var renderer = _this2.defaults.renderer || new Renderer(_this2.defaults);
                    var _loop2 = function _loop2(prop) {
                        var prevRenderer = renderer[prop];
                        // Replace renderer with func to run extension, but fall back if false
                        renderer[prop] = function() {
                            for(var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++)args[_key3] = arguments[_key3];
                            var ret = pack.renderer[prop].apply(renderer, args);
                            if (ret === false) ret = prevRenderer.apply(renderer, args);
                            return ret;
                        };
                    };
                    for(var prop in pack.renderer)_loop2(prop);
                    opts.renderer = renderer;
                }
                if (pack.tokenizer) {
                    var tokenizer = _this2.defaults.tokenizer || new Tokenizer(_this2.defaults);
                    var _loop3 = function _loop3(_prop) {
                        var prevTokenizer = tokenizer[_prop];
                        // Replace tokenizer with func to run extension, but fall back if false
                        tokenizer[_prop] = function() {
                            for(var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++)args[_key4] = arguments[_key4];
                            var ret = pack.tokenizer[_prop].apply(tokenizer, args);
                            if (ret === false) ret = prevTokenizer.apply(tokenizer, args);
                            return ret;
                        };
                    };
                    for(var _prop in pack.tokenizer)_loop3(_prop);
                    opts.tokenizer = tokenizer;
                }
                // ==-- Parse Hooks extensions --== //
                if (pack.hooks) {
                    var hooks = _this2.defaults.hooks || new Hooks();
                    var _loop4 = function _loop4(_prop2) {
                        var prevHook = hooks[_prop2];
                        if (Hooks.passThroughHooks.has(_prop2)) hooks[_prop2] = function(arg) {
                            if (_this2.defaults.async) return Promise.resolve(pack.hooks[_prop2].call(hooks, arg)).then(function(ret) {
                                return prevHook.call(hooks, ret);
                            });
                            var ret = pack.hooks[_prop2].call(hooks, arg);
                            return prevHook.call(hooks, ret);
                        };
                        else hooks[_prop2] = function() {
                            for(var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++)args[_key5] = arguments[_key5];
                            var ret = pack.hooks[_prop2].apply(hooks, args);
                            if (ret === false) ret = prevHook.apply(hooks, args);
                            return ret;
                        };
                    };
                    for(var _prop2 in pack.hooks)_loop4(_prop2);
                    opts.hooks = hooks;
                }
                // ==-- Parse WalkTokens extensions --== //
                if (pack.walkTokens) {
                    var walkTokens = _this2.defaults.walkTokens;
                    opts.walkTokens = function(token) {
                        var values = [];
                        values.push(pack.walkTokens.call(this, token));
                        if (walkTokens) values = values.concat(walkTokens.call(this, token));
                        return values;
                    };
                }
                _this2.defaults = _extends({}, _this2.defaults, opts);
            });
            return this;
        };
        _proto.setOptions = function setOptions(opt) {
            this.defaults = _extends({}, this.defaults, opt);
            return this;
        };
        return Marked;
    }();
    function _parseMarkdown2(lexer, parser) {
        var _this3 = this;
        return function(src, opt, callback) {
            if (typeof opt === "function") {
                callback = opt;
                opt = null;
            }
            var origOpt = _extends({}, opt);
            opt = _extends({}, _this3.defaults, origOpt);
            var throwError = _classPrivateFieldLooseBase(_this3, _onError)[_onError](opt.silent, opt.async, callback);
            // throw error in case of non string input
            if (typeof src === "undefined" || src === null) return throwError(new Error("marked(): input parameter is undefined or null"));
            if (typeof src !== "string") return throwError(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(src) + ", string expected"));
            checkDeprecations(opt, callback);
            if (opt.hooks) opt.hooks.options = opt;
            if (callback) {
                var highlight = opt.highlight;
                var tokens;
                try {
                    if (opt.hooks) src = opt.hooks.preprocess(src);
                    tokens = lexer(src, opt);
                } catch (e) {
                    return throwError(e);
                }
                var done = function done(err) {
                    var out;
                    if (!err) try {
                        if (opt.walkTokens) _this3.walkTokens(tokens, opt.walkTokens);
                        out = parser(tokens, opt);
                        if (opt.hooks) out = opt.hooks.postprocess(out);
                    } catch (e) {
                        err = e;
                    }
                    opt.highlight = highlight;
                    return err ? throwError(err) : callback(null, out);
                };
                if (!highlight || highlight.length < 3) return done();
                delete opt.highlight;
                if (!tokens.length) return done();
                var pending = 0;
                _this3.walkTokens(tokens, function(token) {
                    if (token.type === "code") {
                        pending++;
                        setTimeout(function() {
                            highlight(token.text, token.lang, function(err, code) {
                                if (err) return done(err);
                                if (code != null && code !== token.text) {
                                    token.text = code;
                                    token.escaped = true;
                                }
                                pending--;
                                if (pending === 0) done();
                            });
                        }, 0);
                    }
                });
                if (pending === 0) done();
                return;
            }
            if (opt.async) return Promise.resolve(opt.hooks ? opt.hooks.preprocess(src) : src).then(function(src) {
                return lexer(src, opt);
            }).then(function(tokens) {
                return opt.walkTokens ? Promise.all(_this3.walkTokens(tokens, opt.walkTokens)).then(function() {
                    return tokens;
                }) : tokens;
            }).then(function(tokens) {
                return parser(tokens, opt);
            }).then(function(html) {
                return opt.hooks ? opt.hooks.postprocess(html) : html;
            })["catch"](throwError);
            try {
                if (opt.hooks) src = opt.hooks.preprocess(src);
                var _tokens = lexer(src, opt);
                if (opt.walkTokens) _this3.walkTokens(_tokens, opt.walkTokens);
                var html = parser(_tokens, opt);
                if (opt.hooks) html = opt.hooks.postprocess(html);
                return html;
            } catch (e) {
                return throwError(e);
            }
        };
    }
    function _onError2(silent, async, callback) {
        return function(e) {
            e.message += "\nPlease report this to https://github.com/markedjs/this.";
            if (silent) {
                var msg = "<p>An error occurred:</p><pre>" + escape(e.message + "", true) + "</pre>";
                if (async) return Promise.resolve(msg);
                if (callback) {
                    callback(null, msg);
                    return;
                }
                return msg;
            }
            if (async) return Promise.reject(e);
            if (callback) {
                callback(e);
                return;
            }
            throw e;
        };
    }
    var markedInstance = new Marked(exports1.defaults);
    /**
   * Marked
   */ function marked(src, opt, callback) {
        return markedInstance.parse(src, opt, callback);
    }
    /**
   * Options
   */ marked.options = marked.setOptions = function(opt) {
        markedInstance.setOptions(opt);
        marked.defaults = markedInstance.defaults;
        changeDefaults(marked.defaults);
        return marked;
    };
    marked.getDefaults = getDefaults;
    marked.defaults = exports1.defaults;
    /**
   * Use Extension
   */ marked.use = function() {
        markedInstance.use.apply(markedInstance, arguments);
        marked.defaults = markedInstance.defaults;
        changeDefaults(marked.defaults);
        return marked;
    };
    /**
   * Run callback for every token
   */ marked.walkTokens = function(tokens, callback) {
        return markedInstance.walkTokens(tokens, callback);
    };
    /**
   * Parse Inline
   * @param {string} src
   */ marked.parseInline = markedInstance.parseInline;
    /**
   * Expose
   */ marked.Parser = Parser;
    marked.parser = Parser.parse;
    marked.Renderer = Renderer;
    marked.TextRenderer = TextRenderer;
    marked.Lexer = Lexer;
    marked.lexer = Lexer.lex;
    marked.Tokenizer = Tokenizer;
    marked.Slugger = Slugger;
    marked.Hooks = Hooks;
    marked.parse = marked;
    var options = marked.options;
    var setOptions = marked.setOptions;
    var use = marked.use;
    var walkTokens = marked.walkTokens;
    var parseInline = marked.parseInline;
    var parse = marked;
    var parser = Parser.parse;
    var lexer = Lexer.lex;
    exports1.Hooks = Hooks;
    exports1.Lexer = Lexer;
    exports1.Marked = Marked;
    exports1.Parser = Parser;
    exports1.Renderer = Renderer;
    exports1.Slugger = Slugger;
    exports1.TextRenderer = TextRenderer;
    exports1.Tokenizer = Tokenizer;
    exports1.getDefaults = getDefaults;
    exports1.lexer = lexer;
    exports1.marked = marked;
    exports1.options = options;
    exports1.parse = parse;
    exports1.parseInline = parseInline;
    exports1.parser = parser;
    exports1.setOptions = setOptions;
    exports1.use = use;
    exports1.walkTokens = walkTokens;
});


class $0f39b0cdcb50dcd5$var$MarkdownViewer extends (0, $519f1ddd575d759f$export$16fa2f45be04daa8) {
    src = "";
    value = "";
    content = null;
    constructor(){
        super();
        this.initAttributes("src");
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.src !== "") (async ()=>{
            const request = await fetch(this.src);
            this.value = await request.text();
        })();
        else if (this.value === "") this.value = this.textContent != null ? this.textContent : "";
    }
    render() {
        super.render();
        this.innerHTML = (0, $90482e2fcda9b250$exports.marked)(this.value, {
            mangle: false,
            headerIds: false
        });
    }
}
const $0f39b0cdcb50dcd5$export$305b975a891d0dfa = $0f39b0cdcb50dcd5$var$MarkdownViewer.elementCreator({
    tag: "markdown-viewer"
});



const { slot: $dc86df9eb8304028$var$slot } = (0, $519f1ddd575d759f$export$7a5d735b2ab6389d);
const $dc86df9eb8304028$var$flexDirections = {
    left: "row",
    right: "row-reverse",
    top: "column",
    bottom: "column-reverse"
};
const $dc86df9eb8304028$var$outsetMargins = {
    left: [
        "marginLeft",
        "marginRight"
    ],
    right: [
        "marginRight",
        "marginLeft"
    ],
    top: [
        "marginTop",
        "marginBottom"
    ],
    bottom: [
        "marginBottom",
        "marginTop"
    ]
};
class $dc86df9eb8304028$var$SideNav extends (0, $519f1ddd575d759f$export$16fa2f45be04daa8) {
    panelPosition = "left";
    minSize = 800;
    navSize = 200;
    compact = false;
    content = [
        $dc86df9eb8304028$var$slot({
            name: "nav"
        }),
        $dc86df9eb8304028$var$slot({
            part: "content"
        })
    ];
    _contentVisible = false;
    get contentVisible() {
        return this._contentVisible;
    }
    set contentVisible(visible) {
        this._contentVisible = visible;
        this.queueRender();
    }
    styleNode = (0, $519f1ddd575d759f$export$16fa2f45be04daa8).StyleNode({
        ":host": {
            display: "flex",
            flexDirection: (0, $519f1ddd575d759f$export$3cb96c9f6c8d16a4).flexDirection,
            transition: (0, $519f1ddd575d759f$export$75c0e6adb3e38f31).sideNavTransition("0.25s ease-out")
        },
        ":host slot": {
            position: "relative"
        },
        ":host slot:not([name])": {
            display: "block",
            flex: `0 0 ${(0, $519f1ddd575d759f$export$3cb96c9f6c8d16a4).contentWidth}`,
            width: (0, $519f1ddd575d759f$export$3cb96c9f6c8d16a4).contentWidth
        },
        ':host slot[name="nav"]': {
            display: "block",
            flex: `0 0 ${(0, $519f1ddd575d759f$export$3cb96c9f6c8d16a4).navWidth}`,
            width: (0, $519f1ddd575d759f$export$3cb96c9f6c8d16a4).navWidth
        }
    });
    onResize = ()=>{
        const { content: content } = this.parts;
        if (this.offsetParent === null) return;
        this.style.marginLeft = 0;
        this.style.marginRight = 0;
        this.style.marginTop = 0;
        this.style.marginBottom = 0;
        const empty = [
            ...this.childNodes
        ].find((node)=>// @ts-expect-error
            node instanceof Element ? node.getAttribute("slot") !== "nav" : true) === undefined;
        if (empty) {
            this.style.setProperty("--nav-width", "100%");
            this.style.setProperty("--content-width", "0%");
            return;
        }
        const parent = this.offsetParent;
        const size = this.panelPosition.match(/left|right/) ? parent.offsetWidth : parent.offsetWidth;
        this.compact = size < this.minSize;
        if (!this.compact) {
            content.classList.add("-side-nav-visible");
            this.style.setProperty("--nav-width", `${this.navSize}px`);
            this.style.setProperty("--content-width", `calc(100% - ${this.navSize}px)`);
        } else {
            content.classList.remove("-side-nav-visible");
            this.style.setProperty("--nav-width", "50%");
            this.style.setProperty("--content-width", "50%");
            const margins = $dc86df9eb8304028$var$outsetMargins[this.panelPosition];
            if (this.contentVisible) this.style[margins[0]] = "-100%";
            else this.style[margins[1]] = "-100%";
        }
    };
    observer;
    connectedCallback() {
        super.connectedCallback();
        this.contentVisible = this.parts.content.childNodes.length === 0;
        globalThis.addEventListener("resize", this.onResize);
        // @ts-expect-error
        this.observer = new MutationObserver(this.onResize);
        this.observer.observe(this, {
            childList: true
        });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.observer.disconnect();
    }
    constructor(){
        super();
        this.initAttributes("panelPosition", "minSize", "navSize", "compact");
    }
    render() {
        super.render();
        this.style.setProperty("--flex-direction", $dc86df9eb8304028$var$flexDirections[this.panelPosition]);
        this.onResize();
    }
}
const $dc86df9eb8304028$export$938418df2b06cb50 = $dc86df9eb8304028$var$SideNav.elementCreator({
    tag: "side-nav"
});



const { slot: $d77ebb496050b767$var$slot } = (0, $519f1ddd575d759f$export$7a5d735b2ab6389d);
class $d77ebb496050b767$var$SizeBreak extends (0, $519f1ddd575d759f$export$16fa2f45be04daa8) {
    minWidth = 0;
    minHeight = 0;
    value = "normal";
    content = [
        $d77ebb496050b767$var$slot({
            part: "normal"
        }),
        $d77ebb496050b767$var$slot({
            part: "small",
            name: "small"
        })
    ];
    styleNode = (0, $519f1ddd575d759f$export$16fa2f45be04daa8).StyleNode({
        ":host": {
            display: "inline-block",
            position: "relative"
        }
    });
    constructor(){
        super();
        this.initAttributes("minWidth", "minHeight");
    }
    onResize = ()=>{
        const { normal: normal, small: small } = this.parts;
        if (this.offsetParent === null) return;
        else if (this.offsetParent.offsetWidth < this.minWidth || this.offsetParent.offsetHeight < this.minHeight) {
            normal.hidden = true;
            small.hidden = false;
            this.value = "small";
        } else {
            normal.hidden = false;
            small.hidden = true;
            this.value = "normal";
        }
    };
    // TODO trigger a resize event when an ancestor element
    // is inerted or moved into the DOM.
    connectedCallback() {
        super.connectedCallback();
        globalThis.addEventListener("resize", this.onResize);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        globalThis.removeEventListener("resize", this.onResize);
    }
}
const $d77ebb496050b767$export$96370210d2ca0fff = $d77ebb496050b767$var$SizeBreak.elementCreator({
    tag: "size-break"
});



const { div: $fd71018faf00c7f0$var$div, slot: $fd71018faf00c7f0$var$slot } = (0, $519f1ddd575d759f$export$7a5d735b2ab6389d);
class $fd71018faf00c7f0$var$TabSelector extends (0, $519f1ddd575d759f$export$16fa2f45be04daa8) {
    value = 0;
    role = "tabpanel";
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
            display: "none !important"
        },
        ":host .tab-holder": {
            display: "flex",
            flexDirection: "column"
        },
        ":host .tabs": {
            display: "flex",
            userSelect: "none",
            whiteSpace: "nowrap"
        },
        ":host .tabs > div": {
            padding: `${(0, $519f1ddd575d759f$export$3cb96c9f6c8d16a4).spacing50} ${(0, $519f1ddd575d759f$export$3cb96c9f6c8d16a4).spacing}`,
            cursor: "default"
        },
        ':host .tabs > [aria-selected="true"]': {
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
            part: "tabs"
        }), $fd71018faf00c7f0$var$div({
            class: "border"
        }, $fd71018faf00c7f0$var$div({
            class: "selected",
            part: "selected"
        }))),
        $fd71018faf00c7f0$var$slot()
    ];
    constructor(){
        super();
        this.initAttributes("anne", "example");
    }
    // @ts-expect-error
    addTabBody(body, selectTab = false) {
        if (!body.hasAttribute("name")) throw new Error("element has no name attribute", body);
        this.shadowRoot.append(body);
        this.setupTabs();
        if (selectTab) this.value = this.bodies.length - 1;
        this.queueRender();
    }
    // @ts-expect-error
    keyTab = (event)=>{
        const { tabs: tabs } = this.parts;
        // @ts-expect-error
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
    // @ts-expect-error
    get bodies() {
        return [
            ...this.children
        ].filter((elt)=>elt.hasAttribute("name"));
    }
    pickTab = (event)=>{
        const { tabs: tabs } = this.parts;
        // @ts-expect-error
        const target = event.target;
        const tabIndex = [
            ...tabs.children
        ].indexOf(target);
        if (tabIndex > -1) this.value = tabIndex;
    };
    setupTabs = ()=>{
        const { tabs: tabs } = this.parts;
        const tabBodies = [
            ...this.childNodes
        ].filter((child)=>child.hasAttribute("name"));
        tabs.textContent = "";
        for(const index in tabBodies){
            const tabBody = tabBodies[index];
            const name = tabBody.getAttribute("name");
            const bodyId = `${this.instanceId}-${index}`;
            tabBody.id = bodyId;
            tabs.append($fd71018faf00c7f0$var$div(name, {
                tabindex: 0,
                role: "tab",
                ariaControls: bodyId
            }));
        }
    };
    connectedCallback() {
        super.connectedCallback();
        const { tabs: tabs } = this.parts;
        tabs.addEventListener("click", this.pickTab);
        tabs.addEventListener("keydown", this.keyTab);
        this.setupTabs();
    }
    render() {
        const { tabs: tabs, selected: selected } = this.parts;
        const tabBodies = this.bodies;
        for(let i = 0; i < tabBodies.length; i++){
            const tabBody = tabBodies[i];
            // @ts-expect-error
            const tab = tabs.children[i];
            if (this.value === Number(i)) {
                tab.setAttribute("aria-selected", true);
                selected.style.marginLeft = `${tab.offsetLeft - tabs.offsetLeft}px`;
                selected.style.width = `${tab.offsetWidth}px`;
                tabBody.removeAttribute("hidden");
            } else {
                tab.removeAttribute("aria-selected");
                tabBody.setAttribute("hidden", "");
            }
        }
    }
}
const $fd71018faf00c7f0$export$a932f737dcd864a2 = $fd71018faf00c7f0$var$TabSelector.elementCreator({
    tag: "tab-selector"
});




function $aa6766f320e9c023$export$b37fb374f2e92eb6(sortValuator, ascending = true) {
    return (p, q)=>{
        const pSort = sortValuator(p);
        const qSort = sortValuator(q);
        for(const i in pSort){
            if (pSort[i] !== qSort[i]) return ascending ? pSort[i] > qSort[i] ? 1 : -1 : pSort[i] > qSort[i] ? -1 : 1;
        }
        return 0;
    };
}




export {$6f5c65c3cb8e7707$export$d75ad8f79fe096cb as bodymovinPlayer, $caad8cb31595333a$export$d89b6f4d34274146 as codeEditor, $9053df33169f6cdf$export$f71ce0a5ddbe8fa0 as dataTable, $e1929d8b732838cb$export$8ca73b4108207c1f as filterBuilder, $2c86e776c99cb064$export$ca243e53be209efb as mapBox, $0f39b0cdcb50dcd5$export$305b975a891d0dfa as markdownViewer, $dc86df9eb8304028$export$938418df2b06cb50 as sideNav, $d77ebb496050b767$export$96370210d2ca0fff as sizeBreak, $fd71018faf00c7f0$export$a932f737dcd864a2 as tabSelector, $def26fc1ab27d844$export$c947e3cd16175f27 as trackDrag, $6317e842c6d02af7$export$c6e082819e9a0330 as scriptTag, $6317e842c6d02af7$export$63257fda812a683f as styleSheet, $aa6766f320e9c023$export$b37fb374f2e92eb6 as makeSorter};
//# sourceMappingURL=index.js.map
