#!/bin/bash

sysctl -n vm.loadavg | awk '{print $2}'
