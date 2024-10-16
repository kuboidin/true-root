export const SUCCESS_200 = {
    code: 200,
    status: 'OK',
    message: 'SUCCESS',
    data: {}
};

export const SUCCESS_201 = {
    code: 201,
    status: 'OK',
    message: 'CREATED'
};

export const SUCCESS_204 = {
    code: 204,
    status: 'OK',
    message: 'NO CONTENT'
};

export const ERROR_400 = {
    code: 400,
    status: 'ERROR',
    message: 'BAD REQUEST',
    error: 'Missing Required parameters'
};

export const ERROR_401 = {
    code: 401,
    status: 'ERROR',
    message: 'UNAUTHORIZED',
    error: 'Incorrect username authentication credentials'
};

export const ERROR_403 = {
    code: 403,
    status: 'ERROR',
    message: 'FORBIDDEN',
    error: 'Invalid authentication credentials'
};

export const ERROR_404 = {
    code: 404,
    status: 'ERROR',
    message: 'NOT FOUND',
    error: 'The requested resource could not be found'
};

export const ERROR_500 = {
    code: 500,
    status: 'ERROR',
    message: 'INTERNAL SERVER ERROR',
    error: 'Something went wrong'
};

export const ERROR_501 = {
    code: 501,
    status: 'ERROR',
    message: 'NOT IMPLEMENTED',
    error: 'The requested resource could not be found'
};
