/**
 * Created by neilpennell on 1/3/15.
 */
var Config={};
Config = {
    name: 'Action Item Editor',
    title: 'Making Action Items Easier',
    subtitle: 'Remove the Pain of tracking an Action Item',
    logo: function() {
        return '<b>' + this.name + '</b>';
    },
    footer: function() {
        return this.name + ' - Copyright ' + new Date().getFullYear();
    },
    emails: {
        from: 'noreply@' + Meteor.absoluteUrl()
    },
    blog: '',
    about: '',
    username: false,
    homeRoute: '/',
    dashboardRoute: '/dashboard',
    socialMedia: {
        facebook: {
            url: 'http://facebook.com/neil.pennell.1968',
            icon: 'facebook'
        },
        twitter: {
            url: 'http://twitter.com/NeilPennell',
            icon: 'twitter'
        },
        github: {
            url: 'https://github.com/neilpennell/ai',
            icon: 'github'
        }
    },
    publicRoutes: ['home']
};

