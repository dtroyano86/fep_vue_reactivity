type Dep = Set<any>
type KeyToDepMap = Map<any, Dep>

const targetMap = new Map<any, KeyToDepMap>()
let activeEffect: any

const track = (target: object) => {
  let depsMap = targetMap.get(target)
  if (!depsMap) {
    depsMap = new Map()
    targetMap.set(target, depsMap)
  }

  let deps = depsMap.get('value')
  if (!deps) {
    deps = new Set()
    depsMap.set('value', deps)
  }

  deps.add(activeEffect)
}

const trigger = (target: object) => {
  const depsMap = targetMap.get(target)
  if (!depsMap) {
    return
  }

  depsMap.forEach((dep) => {
    dep.forEach((eff) => {
      if (eff) eff()
    })
  })
}


class RefImpl {
  private _value: string

  constructor(val: string) {
    this._value = val
  }

  get value() {
    track(this)
    return this._value
  }

  set value(val: string) {
    this._value = val
    trigger(this)
  }
}

export const ref = (val: string) => {
  return new RefImpl(val)
}

export const effect = (fn: Function) => {
  activeEffect = fn
  fn()
  activeEffect = undefined
}

