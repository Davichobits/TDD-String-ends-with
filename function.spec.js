import { describe, it, expect } from 'vitest';
import { compareArguments } from './function';

describe("tests for function compareArguments", ()=>{
  it('should be a function', ()=>{
    expect(typeof compareArguments).toBe('function');
  })

  it('should return an error if first parameter is empty', ()=> {
    expect(()=>compareArguments()).toThrow()
  })
  
  it('should return an error if second parameter is empty', ()=>{
    expect(()=>compareArguments('uno')).toThrow()
  })

  it('should return an error if first parameter is not a string', ()=>{
    expect(()=>compareArguments(1)).toThrow()
  })

  it ('should return an error if second parameter is not a string', ()=>{
    expect(()=>compareArguments('1',2)).toThrow()
  })

  it('should return a booleano', ()=>{
    expect(compareArguments('uno', 'dos')).toBeTypeOf('boolean')
  })

  it('should return true if first parameter ends with the second parameter', ()=>{
    expect(compareArguments('adcd', 'cd')).toBe(true)
  })

  it('should return false if first parameter dont ends with the second parameter', ()=>{
    expect(compareArguments('adcd', 'ee')).toBe(false)
  })

})