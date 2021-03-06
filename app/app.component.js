System.register(['angular2/core', './courses.component', './authors.component', './favourite.component', './like.component', './voter.component', './tweetlist.component', './zippy.component', './contact-form.component', './subscription-form.component', './signup-form.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, courses_component_1, authors_component_1, favourite_component_1, like_component_1, voter_component_1, tweetlist_component_1, zippy_component_1, contact_form_component_1, subscription_form_component_1, signup_form_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (favourite_component_1_1) {
                favourite_component_1 = favourite_component_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (voter_component_1_1) {
                voter_component_1 = voter_component_1_1;
            },
            function (tweetlist_component_1_1) {
                tweetlist_component_1 = tweetlist_component_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            },
            function (contact_form_component_1_1) {
                contact_form_component_1 = contact_form_component_1_1;
            },
            function (subscription_form_component_1_1) {
                subscription_form_component_1 = subscription_form_component_1_1;
            },
            function (signup_form_component_1_1) {
                signup_form_component_1 = signup_form_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent.prototype.onVote = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<signup-form></signup-form>",
                        //kept to make it possible to use all templates from course on the fly
                        directives: [courses_component_1.CoursesComponent, authors_component_1.AuthorsComponent, favourite_component_1.FavouriteComponent, like_component_1.LikeComponent, voter_component_1.VoterComponent, tweetlist_component_1.TweetListComponent, zippy_component_1.ZippyComponent, contact_form_component_1.ContactFormComponent, subscription_form_component_1.SubscriptionFormComponent, signup_form_component_1.SignUpFormComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//template parts used before last challenge
/*template: `<h1>Hello Angular</h1>
               <courses></courses>
               <authors></authors>
               <favourite></favourite> <br>
               <like></like>
               <voter (vote)="onVote($event)" [nVotes]="13" ></voter>
               <tweetlist></tweetlist>
               <zippy title="My Zippy Components Title">
                 Wow im putting Some Content in here !!!
             </zippy>
             <contact-form></contact-form>
             <subscription-form></subscription-form>`
*/ 
//# sourceMappingURL=app.component.js.map