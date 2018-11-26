export const preventSubmit = e => {
    e.preventDefault();
};

export const isEmpty = val => val === '' || val === null || val === undefined;

export const validateEmail = email => {
    // eslint-disable-next-line
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email); // This method returns true if it finds a match, otherwise it returns false.
};
