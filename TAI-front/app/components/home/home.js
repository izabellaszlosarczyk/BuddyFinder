import homeComponent from './home.component';

export default app => {
    app.config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'templates/home.html'
            })
            .state('policy', {
                url: '/policy',
                templateUrl: 'templates/app/policy.html'
            })
            .state('privacy', {
                url: '/privacy',
                templateUrl: 'templates/app/privacy.html'
            })
            .state('choices', {
                url: '/choices',
                templateUrl: 'templates/app/choices.html'
            })
            .state('cookies', {
                url: '/cookies',
                templateUrl: 'templates/app/cookies.html'
            })
            .state('login', {
                url: '/login',
                template: '<t-login></t-login>'
                //templateUrl: 'templates/login.html'
            })
            .state('register', {
                url: '/register',
                template: '<t-register></t-register>'
            })
            .state('logged', {
                url: '/logged',
                template: '<t-logged></t-logged>'
            })
            .state('logged.policy', {
                url: '/policy',
                templateUrl: 'templates/app/policy.html'
            })
            .state('logged.privacy', {
                url: '/privacy',
                templateUrl: 'templates/app/privacy.html'
            })
            .state('logged.choices', {
                url: '/choices',
                templateUrl: 'templates/app/choices.html'
            })
            .state('logged.cookies', {
                url: '/cookies',
                templateUrl: 'templates/app/cookies.html'
            })
            .state('logged.yourOffer', {
                url: '/yourOffer',
                templateUrl: 'templates/app/yourOffer.html'
            })
            .state('logged.addOffer', {
                url: '/addOffer',
                templateUrl: 'templates/app/addOffer.html'
            })
            .state('logged.viewOffer', {
                url: '/viewOffer',
                templateUrl: 'templates/app/viewOffer.html'
            })
            .state('logged.editOffer', {
                url: '/editOffer',
                templateUrl: 'templates/app/editOffer.html'
            })
            .state('logged.newOffer', {
                url: '/newOffer',
                templateUrl: 'templates/app/newOffer.html'
            })
    }).directive('home', homeComponent);

    if (ENVIRONMENT === 'test') {
        require('./home.test.js');
    }
}
