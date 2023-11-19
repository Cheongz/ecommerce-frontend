import packageInfo from '../../auth_config.json';

export const mytestconfig = {
    production: false,
    auth: {
        domain: packageInfo.domain,
        clientId: packageInfo.clientId,
        authorizationParams: {
            redirect_uri: window.location.origin
        }
    }
};
