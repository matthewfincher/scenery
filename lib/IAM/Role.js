// Copyright 2015 OpenWhere, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

var AWSClass = require('../AWSClass.js');
var Resource = require('../Resource.js');
var aws_properties_iam_policy = require('../properties/aws_properties_iam_policy.js');

var propertyMap = {'AssumeRolePolicyDocument': {'list': false, 'type': 'object'},
 'Path': {'list': false, 'type': 'string'},
 'Policies': {'list': true, 'type': aws_properties_iam_policy}};

var Class = function (id) {
    return Resource.call(this, id, 'AWS::IAM::Role', {});
};
require('util').inherits(Class, Resource);

Class = AWSClass.registerPropertyPrototypes(Class, propertyMap);
module.exports = Class;