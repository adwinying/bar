/**
 * config.js
 *
 * bar configs go here.
 */

import _ from 'lodash'
import * as custom from './custom'

// Delay in milliseconds between consecutive commands executions
// Expensive elements should throttle themselves
export const refreshRate = custom.refreshRate || 15000

// Config for Bar (wrapper) component
export const bar = _.merge({
  style: {},
}, custom.bar)

// Config for Time component
export const time = _.merge({
  format: '%a %m/%d %l:%M',
  style: {
    padding: '0 15px',
  },
}, custom.time)

// Config for Input component
export const input = _.merge({
  style: {},
}, custom.input)

// Config for Battery component
export const battery = _.merge({
  style: {},
}, custom.battery)

// Config for Workspace component
export const workspace = _.merge({
  style: {},
}, custom.workspace)

// Config for Cpu component
export const cpu = _.merge({
  style: {},
}, custom.cpu)

// Config for Spotify component
export const spotify = _.merge({
  style: {},
}, custom.spotify)

// Config for Spacer component
export const spacer = _.merge({
  style: {},
}, custom.spacer)

// Config for Weather component
export const weather = _.merge({
  style: {},
}, custom.weather)
