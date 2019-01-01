/**
 * This file defines functions NextAuth to look up, add and update users.
 *
 * It returns a Promise with the functions matching these signatures:
 *
 * {
 *   find: ({
 *     id,
 *     email,
 *     emailToken,
 *     provider,
 *     poviderToken
 *   } = {}) => {},
 *   update: (user) => {},
 *   insert: (user) => {},
 *   remove: (id) => {},
 *   serialize: (user) => {},
 *   deserialize: (id) => {}
 * }
 *
 * Each function returns Promise.resolve() - or Promise.reject() on error.
 **/

// Load environment variables from a .env file if one exists
require('dotenv').load()

// This config file uses MongoDB for User accounts, as well as session storage.
// This config includes options for NeDB, which it defaults to if no DB URI
// is specified. NeDB is an in-memory only database intended here for testing.

// Send email direct from localhost if no mail server configured

module.exports = () => {
    return Promise.resolve({
        // If a user is not found find() should return null (with no error).
        find: ({id, email, emailToken, provider} = {}) => {
        return null;
        },
        // The user parameter contains a basic user object to be added to the DB.
        // The oAuthProfile parameter is passed when signing in via oAuth.
        //
        // The optional oAuthProfile parameter contains all properties associated
        // with the users account on the oAuth service they are signing in with.
        //
        // You can use this to capture profile.avatar, profile.location, etc.
        insert: (user, oAuthProfile) => {
        return null
        },
        // The user parameter contains a basic user object to be added to the DB.
        // The oAuthProfile parameter is passed when signing in via oAuth.
        //
        // The optional oAuthProfile parameter contains all properties associated
        // with the users account on the oAuth service they are signing in with.
        //
        // You can use this to capture profile.avatar, profile.location, etc.
        update: (user, profile) => {
        return null
        },
        // The remove parameter is passed the ID of a user account to delete.
        //
        // This method is not used in the current version of next-auth but will
        // be in a future release, to provide an endpoint for account deletion.
        remove: (id) => {
        return null
        },
        // Seralize turns the value of the ID key from a User object
        serialize: (user) => {
        // Supports serialization from Mongo Object *and* deserialize() object
        return null;
        },
        // Deseralize turns a User ID into a normalized User object that is
        // exported to clients. It should not return private/sensitive fields,
        // only fields you want to expose via the user interface.
        deserialize: (id) => {
        return null;
        },
        // Email Sign In
        //
        // Accounts are created automatically, as when signing in via oAuth.
        // Users are sent one-time use sign in tokens in links. This avoids
        // storing user supplied passwords anywhere, preventing password re-use.
        //
        // To disable this option, do not set sendSignInEmail (or set it to null).
        sendSignInEmail: ({email, url, req}) => {
        return null
        },
        // Credentials Sign In
        //
        // If you use this you will need to define your own way to validate
        // credentials. Unlike with oAuth or Email Sign In, accounts are not
        // created automatically so you will need to provide a way to create them.
        //
        // This feature is intended for strategies like Two Factor Authentication.
        //
        // To disable this option, do not set signin (or set it to null).
        /*
        signIn: ({form, req}) => {
        return new Promise((resolve, reject) => {
            // Should validate credentials (e.g. hash password, compare 2FA token
            // etc) and return a valid user object from a database.
            return usersCollection.findOne({
            email: form.email
            }, (err, user) => {
            if (err) return reject(err)
            if (!user) return resolve(null)

            // Check credentials - e.g. compare bcrypt password hashes
            if (form.password === "test1234") {
                // If valid, return user object - e.g. { id, name, email }
                return resolve(user)
            } else {
                // If invalid, return null
                return resolve(null)
            }
            })
        })
        },
        */
        // Session Object (optional)
        //
        // The session object that gets returned to the client. You don't need to
        // specify this function here unless you want to override or extend the
        // default (e.g. with any other properties you have added to req.session)
        //
        // Note: The object returned will be stored in localStorage and visible
        // client side so do not return data you would not want the user to see.
        /*
        */
        session: (session, req) => {
        session.someOtherCustomProperty = "Example custom property"

        return session
        }
    })
}
