module.exports = {
    EMAIL_REGEXP: new RegExp('^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))'
        + '@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'),
    PASSWORD_REGEXP: new RegExp('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$'),
    ZIPCODE_REGEXP: new RegExp('^[0-9a-zA_Z]+$'),
    USERFIELD_REGEXP: new RegExp('^[0-9a-zA_Z@\\.]+$'),
    NAME: {
        MIN: 2,
        MAX: 60
    }
};
