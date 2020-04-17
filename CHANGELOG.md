## Versioning

Given a version number MAJOR.MINOR.PATCH, increment the:

* MAJOR version when you make incompatible API changes
* MINOR version when you add functionality in a backwards-compatible manner
* PATCH version when you make backwards-compatible bug fixes
* Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

The versioning rules are described on http://semver.org/

## Eslint config backend changelog

### 1.1.0

* Added globals definition for `describe`, `it`, `before` and `beforeEach`

### 1.0.2

* Removed jsdoc rules, since most services will fail because of this. Added instructions for the Dockerfile.

### 1.0.0

* Initial release with eslint rules.