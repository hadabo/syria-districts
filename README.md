# Syria districts

[![Greenkeeper badge](https://badges.greenkeeper.io/hadabo/syria-districts.svg)](https://greenkeeper.io/)
[![Build Status][build-badge]][build]
[![MIT License][license-badge]][LICENSE]
[![Semantic release][semantic-release]][semantic]
[![Syria districts package][npm-dm]][syria-districts]
[![Version][npm-v-badge]][syria-districts]
[![Commitizen friendly][commitizen-badge]][commitizen]
[![codecov][codecov-badge]][codecov]



Get all the districts names of Syria or a random one. a PoC to learn [semantic-release](https://www.npmjs.com/package/semantic-release)

## Installation

This package is distributed via npm:

```bash
npm install --save syria-districts
```

## Usage
```javascript
import syriaDistricts from 'syria-districts';

const allDistricts = syriaDistricts.all;
// [ 'Damascus',  'Rif Dimashq',  'Homs',  'Aleppo',  'Hama',  'Idlib',  'Raqqa',  'Al-Hasakah',  'Daraa',  'Tartus',  'Deir ez-Zor',  'Quneitra',  'Al-Suwayda',  'Latakia' ]

const randomDistrict = syriaDistricts.random();
// Damascus

const randomDistricts = syriaDistricts.random(3);
// [ 'Al-Hasakah', 'Daraa', 'Raqqa' ]
```

## Other
This library was developed by [Abdul-hadi Hawari](https://twitter.com/@hadabo) as a PoC to learn [semantic-release](https://www.npmjs.com/package/semantic-release). 



<sub>inspired from [starwars-names](https://www.npmjs.com/package/starwars-names) by Kent C. Dodds.</sub>

[build-badge]: https://img.shields.io/travis/hadabo/syria-districts.svg?style=flat-square
[build]: https://travis-ci.org/hadabo/syria-districts
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license]: https://github.com/hadabo/syria-districts/blob/master/LICENSE
[semantic-release]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square
[semantic]: https://www.npmjs.com/package/semantic-release
[npm-dm]: https://img.shields.io/npm/dm/syria-districts.svg?style=flat-square
[syria-districts]: https://www.npmjs.com/package/syria-districts
[commitizen-badge]:https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square
[commitizen]: http://commitizen.github.io/cz-cli/
[codecov-badge]: https://img.shields.io/codecov/c/github/hadabo/syria-districts/master.svg?style=flat-square
[codecov]: https://codecov.io/gh/hadabo/syria-districts
[npm-v-badge]: https://img.shields.io/npm/v/syria-districts.svg?style=flat-square