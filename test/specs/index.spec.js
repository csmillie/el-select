import Vue from 'vue'
import ElCompo from './../../src/index.js'

describe('el-select', () => {
  it('install', done => {
    expect(ElCompo).to.respondTo('install')
    done()
  })
})