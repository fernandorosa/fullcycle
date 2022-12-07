#!/bin/bash

# make wait-for-it executable
#chmod +x wait-for-it.sh

# call wait-for-it with passed in args and then start node if it succeeds
bash wait-for-it.sh -h db -p 3306 -t 300 -s -- node index.js